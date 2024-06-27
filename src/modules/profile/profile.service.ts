import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { ProfilePostEntity } from './enties/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfilePost } from './enties/interface/profile.interface';
import { Observable, from } from 'rxjs';
import { UpdateResult } from 'typeorm';

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(ProfilePostEntity)
        private readonly profilePostRepository: Repository<ProfilePostEntity>
    ){}

    createPost(profilePost: ProfilePost): Observable<ProfilePost> {
        return from(this.profilePostRepository.save(profilePost));
    }

    findAllPosts(): Observable<ProfilePost[]> {
        return from(this.profilePostRepository.find());
    }

    updatePost(id: number, profilePost: ProfilePost): Observable<UpdateResult> {
        return from(this.profilePostRepository.update(id, profilePost));
    }

    deletePost(id: number): Observable<DeleteResult> {
        return from(this.profilePostRepository.delete(id));
    }
}
