import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Venta } from './venta.model';
import { Reabastecimiento } from './reabastecimiento.model';

@Entity('productos')
export class Producto {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  nombre!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio!: number;

  @Column({ type: 'int' })
  stock!: number;

  @Column({ name: 'barcode', type: 'varchar', length: 255, unique: true })
  codigoBarras!: string;

  @OneToMany(() => Venta, (venta) => venta.producto)
  ventas!: Venta[];

  @OneToMany(() => Reabastecimiento, (reabastecimiento) => reabastecimiento.producto)
  reabastecimientos!: Reabastecimiento[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: Date;
}
