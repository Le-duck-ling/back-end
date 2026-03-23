import {Entity, PrimaryColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import {User} from "./user.entity";

@Entity({schema:"public", name:"Pet"})
export class Pet{

    @PrimaryColumn("character varying", {name:'pet_id'})
    pet_id: string;

    @OneToOne(()=>User, {onDelete: 'CASCADE', nullable:false})
    @JoinColumn({name:'user_id', referencedColumnName:'user_id'})
    user_id: User;

    @Column("character varying", {name:'pet_name', nullable:false})
    pet_name: string;

    @Column("character varying", {name:'pet_type', nullable:false})
    pet_type: string;

    @Column("int",{name:"pet_hunger"})
    pet_hunger:number;

    @Column("int",{name:"pet_happy"})
    pet_happy:number;

    @Column("int",{name:"pet_energy"})
    pet_energy:number;
}