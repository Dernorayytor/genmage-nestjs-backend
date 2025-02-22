import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilePostEntity } from './enties/profile.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ProfilePostEntity])],
  providers: [ProfileService],
  controllers: [ProfileController]
})
export class UserModule {}
