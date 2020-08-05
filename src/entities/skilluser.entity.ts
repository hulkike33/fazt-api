import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Skill } from './skill.entity';
import { User } from './user.entity';

@Index('skill_user_pkey', ['id'], { unique: true })
@Index('uk_user_skill', ['idSkill', 'idUser'], { unique: true })
@Entity('skill_user', { schema: 'public' })
export class SkillUser {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id!: number;

  @Column('integer', { name: 'id_user', unique: true })
  idUser!: number;

  @Column('integer', { name: 'id_skill', unique: true })
  idSkill!: number;

  @ManyToOne(() => Skill, skill => skill.skillUsers, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  })
  @JoinColumn([{ name: 'id_skill', referencedColumnName: 'id' }])
  idSkillUser!: Skill;

  @ManyToOne(() => User, user => user.skillUsers, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  })
  @JoinColumn([{ name: 'id_user', referencedColumnName: 'id' }])
  idUserSkill!: User;
}
