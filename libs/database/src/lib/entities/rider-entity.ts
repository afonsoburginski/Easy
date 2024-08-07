import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { CouponEntity } from './coupon.entity';
import { Gender } from './enums/gender.enum';
import { RiderDocumentType } from './enums/rider-document-type';
import { RiderStatus } from './enums/rider-status.enum';
import { MediaEntity } from './media.entity';
import { RequestEntity } from './request.entity';
import { RiderAddressEntity } from './rider-address.entity';
import { RiderTransactionEntity } from './rider-transaction.entity';
import { RiderWalletEntity } from './rider-wallet.entity';
import { SavedPaymentMethodEntity } from './saved-payment-method.entity';
import { RiderReviewEntity } from './rider-review.entity';
import { DriverEntity } from './driver.entity';

@Entity('rider')
export class RiderEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('enum', {
    enum: RiderStatus,
    default: RiderStatus.Enabled,
  })
  status!: RiderStatus;

  @Column({ nullable: true })
  firstName?: string;

  // @Column({ nullable: true })
  // avatarUrl?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column({ nullable: true, type: 'varchar', length: 5 })
  countryIso?: string;

  @Column('bigint', {
    unique: true,
  })
  mobileNumber!: string;

  @CreateDateColumn()
  registrationTimestamp!: Date;

  @Column({ nullable: true })
  email?: string;

  @Column('enum', {
    enum: Gender,
    nullable: true,
  })
  gender?: Gender;

  @Column('varchar', {
    nullable: true,
  })
  address?: string;

  @Column({
    nullable: true,
  })
  isResident?: boolean;

  @Column({
    nullable: true,
  })
  idNumber?: string;

  @Column({
    nullable: true,
  })
  password?: string;

  @Column({
    nullable: true,
    //enum: RiderDocumentType
  })
  documentType?: RiderDocumentType;

  @Column({ nullable: true })
  notificationPlayerId?: string;

  @DeleteDateColumn()
  deletedAt?: Date;

  @OneToMany(() => RiderAddressEntity, (address) => address.rider)
  addresses!: RiderAddressEntity[];

  @OneToOne(() => MediaEntity, (media) => media.rider)
  @JoinColumn()
  media?: MediaEntity;

  @Column({ nullable: true })
  mediaId?: number;

  @Column('int', {
    nullable: true,
  })
  presetAvatarNumber?: number;

  @OneToMany(() => RequestEntity, (order) => order.rider)
  orders!: RequestEntity[];

  @OneToMany(() => RiderWalletEntity, (wallet) => wallet.rider)
  wallets!: RiderWalletEntity[];

  @ManyToMany(() => DriverEntity, (driver) => driver.ridersFavorited)
  @JoinTable()
  favoriteDrivers!: DriverEntity[];

  @ManyToMany(() => DriverEntity, (driver) => driver.ridersBlocked)
  @JoinTable()
  blockedDrivers!: DriverEntity[];

  @OneToMany(
    () => RiderTransactionEntity,
    (riderTransaction) => riderTransaction.rider,
    { onDelete: 'CASCADE', onUpdate: 'RESTRICT' },
  )
  transactions!: RiderTransactionEntity[];

  @ManyToMany(() => CouponEntity, (coupon) => coupon.riders)
  @JoinTable()
  coupons!: CouponEntity[];

  @OneToMany(
    () => SavedPaymentMethodEntity,
    (savedPaymentMethod) => savedPaymentMethod.rider,
  )
  savedPaymentMethods!: SavedPaymentMethodEntity[];

  @OneToMany(() => RiderReviewEntity, (review) => review.rider)
  reviewsForRider!: RiderReviewEntity[];
}
