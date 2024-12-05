import { ReabastecimientoCommand } from '../../commands/reabastecimiento.command';
import { ReabastecimientoQuery } from '../../queries/reabastecimiento.query';
import { DataSource } from 'typeorm';

export class ReabastecimientoService {
  private reabastecimientoCommand: ReabastecimientoCommand;
  private reabastecimientoQuery: ReabastecimientoQuery;

  constructor(dataSource: DataSource) {
    this.reabastecimientoCommand = new ReabastecimientoCommand(dataSource);
    this.reabastecimientoQuery = new ReabastecimientoQuery(dataSource);
  }

  async crearReabastecimiento(datos: { productoId: number; cantidad: number }) {
    return await this.reabastecimientoCommand.crearReabastecimiento(datos);
  }

  async obtenerReabastecimientos() {
    return await this.reabastecimientoQuery.obtenerReabastecimientos();
  }

  async obtenerReabastecimientoPorId(id: number) {
    return await this.reabastecimientoQuery.obtenerReabastecimientoPorId(id);
  }

  async obtenerReabastecimientosPorProductoId(productoId: number) {
    return await this.reabastecimientoQuery.obtenerReabastecimientosPorProductoId(productoId);
  }
}