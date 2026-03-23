import {Entity, PrimaryColumn, Column} from 'typeorm';

@Entity({schema:'public', name:'User'})
export class User{

    @PrimaryColumn("character varying", {name:'user_id'})
    user_id:string;

    @Column("character varying", {name:'user_name', length:20})
    user_name:string;

    @Column("character varying",{name:"user_mail"})
    user_mail:string;

    @Column("character varying", {name:'password'})
    password:string;
}