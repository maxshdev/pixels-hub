import { DataSource } from 'typeorm';
import { Producto } from '../models/producto.model';

export class ProductoQuery {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async obtenerProductos() {
    const productoRepository = this.dataSource.getRepository(Producto);
    return await productoRepository.find();
  }

  async obtenerProductoPorId(id: number) {
    const productoRepository = this.dataSource.getRepository(Producto);
    return await productoRepository.findOneBy({ id });
  }

  async buscarProductoPorCodigoBarras(codigoBarras: string) {
    const productoRepository = this.dataSource.getRepository(Producto);
    return await productoRepository.findOneBy({ codigoBarras });
  }
}