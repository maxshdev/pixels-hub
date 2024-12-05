import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Producto } from './producto.model';

@Entity('reabastecimientos')
export class Reabastecimiento {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'producto_id' })
  productoId!: number;

  @Column({ type: 'int' })
  cantidad!: number;

  @CreateDateColumn({ name: 'fecha_reabastecimiento', type: 'timestamp' })
  fechaReabastecimiento!: Date;

  @ManyToOne(() => Producto, (producto) => producto.reabastecimientos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'producto_id' })
  producto!: Producto;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: Date;
}