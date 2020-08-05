import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity'
import {Rol} from './rol.entity'

@Index('uk_rol_user', ['idRol'], { unique: true })
@Index('uk_user', ['idUser'], { unique: true })
@Entity("Rol_user", { schema: "public" })
export class RolUser {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id!: number;

    @Column("integer", { name: "state_rol" })
    stateRol!: string;

    @ManyToOne(() => UserEntity, user => user.id)
    user!: UserEntity

    @ManyToOne(() => Rol, rol => rol.id)
    rol!: Rol
}