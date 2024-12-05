import { DataSource } from 'typeorm';
import { Reabastecimiento } from '../models/reabastecimiento.model';
import { Producto } from '../models/producto.model';

export class ReabastecimientoCommand {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async crearReabastecimiento(datos: { productoId: number; cantidad: number }) {
    const reabastecimientoRepository = this.dataSource.getRepository(Reabastecimiento);
    const productoRepository = this.dataSource.getRepository(Producto);

    // Verificar si el producto existe
    const producto = await productoRepository.findOneBy({ id: datos.productoId });
    if (!producto) {
      throw new Error('Producto no encontrado');
    }

    // Crear un nuevo registro de reabastecimiento
    const nuevoReabastecimiento = reabastecimientoRepository.create({
      productoId: datos.productoId,
      cantidad: datos.cantidad,
      fechaReabastecimiento: new Date(),
    });

    // Actualizar el stock del producto
    producto.stock += datos.cantidad;
    await productoRepository.save(producto);

    // Guardar el reabastecimiento
    return await reabastecimientoRepository.save(nuevoReabastecimiento);
  }
}