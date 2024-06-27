import { Entity } from 'typeorm';
import { Controller,Post,Body,Get,Put, Param, Delete } from '@nestjs/common';
import { ProfilePost } from './enties/interface/profile.interface';
import { ProfileService } from './profile.service';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import { DeleteResult } from 'typeorm';

@Controller('profile')
export class ProfileController {
    constructor(private feedService: ProfileService){}
    @Post()
    create(@Body() pofilePost: ProfilePost): Observable<ProfilePost> {
        return this.feedService.createPost(pofilePost);
    }
    @Get()
    findAll(): Observable<ProfilePost[]> {
        return this.feedService.findAllPosts();
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() profilePost: ProfilePost
    ): Observable<UpdateResult> {
        return this.feedService.updatePost(id, profilePost);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
        return this.feedService.deletePost(id);
    }


}
