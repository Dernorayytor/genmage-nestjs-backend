import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity('pofile_post')
export class ProfilePostEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({default: ''})
    email: string;
    @Column({default: ''})
    DisplayName?: string
    @Column({default: ''})
    Bio?: string;
    @Column({type:'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}