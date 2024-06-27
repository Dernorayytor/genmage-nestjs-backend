import { Entity } from 'typeorm';
import { Controller,Post,Body,Get,Put, Param, Delete } from '@nestjs/common';
import { UserPost } from './enties/interface/user.interface';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import { DeleteResult } from 'typeorm';

@Controller('user')
export class UserController {
    constructor(private feedService: UserService){}
    @Post()
    create(@Body() userPost: UserPost): Observable<UserPost> {
        return this.feedService.createPost(userPost);
    }
    @Get()
    findAll(): Observable<UserPost[]> {
        return this.feedService.findAllPosts();
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() userPost: UserPost
    ): Observable<UpdateResult> {
        return this.feedService.updatePost(id, userPost);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
        return this.feedService.deletePost(id);
    }


}
