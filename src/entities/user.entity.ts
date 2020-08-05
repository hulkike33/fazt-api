import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SkillUser } from './skilluser.entity';
@Index('uk_email', ['email'], { unique: true })
@Index('user_pkey', ['id'], { unique: true })
@Index('uk_username', ['username'], { unique: true })
@Entity('user', { schema: 'public' })
export class User {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id!: number;

  @Column('character varying', { name: 'name', length: 45 })
  name!: string;

  @Column('character varying', { name: 'username', unique: true, length: 45 })
  username!: string;

  @Column('character varying', { name: 'email', unique: true, length: 60 })
  email!: string;

  @Column('character varying', { name: 'password', length: 80 })
  password!: string;

  @Column('text', { name: 'image_path' })
  imagePath!: string;

  @Column('character varying', { name: 'state_user', length: 20 })
  stateUser!: string;

  @Column('integer', { name: 'active' })
  active!: number;

  @Column('text', { name: 'user_description', nullable: true })
  userDescription!: string | null;

  @Column('integer', { name: 'activation_key', nullable: true })
  activationKey!: number | null;

  @Column('integer', { name: 'reset_key', nullable: true })
  resetKey!: number | null;

  @Column('integer', { name: 'reset_date', nullable: true })
  resetDate!: number | null;

  @OneToMany(() => SkillUser, skillUser => skillUser.idUserSkill)
  skillUsers!: SkillUser[];
}
