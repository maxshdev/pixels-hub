import { DataSource } from 'typeorm';
import { Producto } from '../models/producto.model';

export class ProductoCommand {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async crearProducto(datos: { nombre: string; precio: number; stock: number; codigoBarras: string }) {
    const productoRepository = this.dataSource.getRepository(Producto);
    const nuevoProducto = productoRepository.create(datos);
    return await productoRepository.save(nuevoProducto);
  }

  async actualizarStock(productoId: number, cantidad: number) {
    const productoRepository = this.dataSource.getRepository(Producto);
    const producto = await productoRepository.findOneBy({ id: productoId });

    if (!producto) {
      throw new Error('Producto no encontrado');
    }

    producto.stock += cantidad;
    return await productoRepository.save(producto);
  }
}