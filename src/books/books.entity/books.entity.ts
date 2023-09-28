import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    bookName:string;

    @Column({length:300}) 
    bookTitle:string;

    @Column() 
    isAviable:boolean;
}