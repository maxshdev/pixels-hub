import { DataSource } from 'typeorm';
import { Venta } from '../models/venta.model';

export class VentaCommand {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async crearVenta(datos: { productoId: number; cantidad: number; total: number }) {
    const ventaRepository = this.dataSource.getRepository(Venta);
    const nuevaVenta = ventaRepository.create(datos);
    return await ventaRepository.save(nuevaVenta);
  }
}