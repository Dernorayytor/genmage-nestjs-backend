import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { UserPostEntity } from './enties/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPost } from './enties/interface/user.interface';
import { Observable, from } from 'rxjs';
import { UpdateResult } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserPostEntity)
        private readonly userPostRepository: Repository<UserPostEntity>
    ){}

    createPost(userPost: UserPost): Observable<UserPost> {
        return from(this.userPostRepository.save(userPost));
    }

    findAllPosts(): Observable<UserPost[]> {
        return from(this.userPostRepository.find());
    }

    updatePost(id: number, userPost: UserPost): Observable<UpdateResult> {
        return from(this.userPostRepository.update(id, userPost));
    }

    deletePost(id: number): Observable<DeleteResult> {
        return from(this.userPostRepository.delete(id));
    }
}
