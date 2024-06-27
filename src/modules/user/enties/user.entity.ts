import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity('user_post')
export class UserPostEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({default: ''})
    email: string;
    @Column({type:'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}