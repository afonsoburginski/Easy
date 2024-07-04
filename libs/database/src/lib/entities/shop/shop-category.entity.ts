import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ShopCategoryStatus } from './enums/shop-category-status.enum';
import { ShopEntity } from './shop.entity';
import { MediaEntity } from '../media.entity';

@Entity('shop_category')
export class ShopCategoryEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  description?: string;

  @OneToOne(() => MediaEntity)
  @JoinColumn()
  image?: MediaEntity;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column('enum', {
    enum: ShopCategoryStatus,
    default: ShopCategoryStatus.Enabled,
  })
  status!: ShopCategoryStatus;

  @ManyToMany(() => ShopEntity, (shop) => shop.categories)
  shops!: ShopEntity[];
}