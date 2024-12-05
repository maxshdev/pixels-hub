import { DataSource } from 'typeorm';
import { Reabastecimiento } from '../models/reabastecimiento.model';

export class ReabastecimientoQuery {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async obtenerReabastecimientos() {
    const reabastecimientoRepository = this.dataSource.getRepository(Reabastecimiento);
    return await reabastecimientoRepository.find();
  }

  async obtenerReabastecimientoPorId(id: number) {
    const reabastecimientoRepository = this.dataSource.getRepository(Reabastecimiento);
    return await reabastecimientoRepository.findOneBy({ id });
  }

  async obtenerReabastecimientosPorProductoId(productoId: number) {
    const reabastecimientoRepository = this.dataSource.getRepository(Reabastecimiento);
    return await reabastecimientoRepository.find({
      where: { productoId },
      order: { fechaReabastecimiento: 'DESC' }, // Ordenar por fecha descendente
    });
  }
}