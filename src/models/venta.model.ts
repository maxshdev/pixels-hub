import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Producto } from './producto.model';

@Entity('ventas')
export class Venta {
    
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'producto_id' })
  productoId!: number;

  @Column({ type: 'int' })
  cantidad!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total!: number;

  @CreateDateColumn({ name: 'fecha_venta', type: 'timestamp' })
  fechaVenta!: Date;

  @ManyToOne(() => Producto, (producto) => producto.ventas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'producto_id' })
  producto!: Producto;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: Date;
}
