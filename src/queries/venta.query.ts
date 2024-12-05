import { DataSource } from 'typeorm';
import { Venta } from '../models/venta.model';

export class VentaQuery {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async obtenerVentas() {
    const ventaRepository = this.dataSource.getRepository(Venta);
    return await ventaRepository.find();
  }

  async obtenerVentaPorId(id: number) {
    const ventaRepository = this.dataSource.getRepository(Venta);
    return await ventaRepository.findOneBy({ id });
  }

  async obtenerVentasPorProducto(productoId: number) {
    const ventaRepository = this.dataSource.getRepository(Venta);
    return await ventaRepository.find({ where: { productoId } });
  }
}