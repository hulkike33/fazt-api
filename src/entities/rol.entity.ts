import { Column, Entity, Index, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RolUser } from './rol-user.entity'

@Index('uk_rol_user', ['idRol'], { unique: true })
@Entity("Rol", { schema: "public" })
export class Rol {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id!: number;

    @Column("integer", { name: "name_rol" })
    nameRol!: string;

    @OneToMany(() => RolUser, rolUser => rolUser.id)
    rolUser!: RolUser[];
}