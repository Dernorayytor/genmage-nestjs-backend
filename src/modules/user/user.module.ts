import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPostEntity } from './enties/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([UserPostEntity])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
