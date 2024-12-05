import { VentaCommand } from '../../commands/venta.command';
import { VentaQuery } from '../../queries/venta.query';
import { DataSource } from 'typeorm';

export class VentaService {
  private ventaCommand: VentaCommand;
  private ventaQuery: VentaQuery;

  constructor(dataSource: DataSource) {
    this.ventaCommand = new VentaCommand(dataSource);
    this.ventaQuery = new VentaQuery(dataSource);
  }

  async crearVenta(datos: { productoId: number; cantidad: number; total: number }) {
    return await this.ventaCommand.crearVenta(datos);
  }

  async obtenerVentas() {
    return await this.ventaQuery.obtenerVentas();
  }

  async obtenerVentaPorId(id: number) {
    return await this.ventaQuery.obtenerVentaPorId(id);
  }
}