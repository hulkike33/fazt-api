import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SkillUser } from './SkillUser';

@Index('skill_pkey', ['id'], { unique: true })
@Index('uk_name_skill', ['nameSkill'], { unique: true })
@Entity('skill', { schema: 'public' })
export class Skill {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id!: number;

  @Column('character varying', { name: 'name_skill', unique: true, length: 45 })
  nameSkill!: string;

  @Column('character varying', { name: 'state_skill', length: 20 })
  stateSkill!: string;

  @OneToMany(() => SkillUser, skillUser => skillUser.idSkillUser)
  skillUsers!: SkillUser[];
}
