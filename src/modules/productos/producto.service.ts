import { ProductoCommand } from '../../commands/producto.command';
import { ProductoQuery } from '../../queries/producto.query';
import { DataSource } from 'typeorm';

export class ProductoService {
  private productoCommand: ProductoCommand;
  private productoQuery: ProductoQuery;

  constructor(dataSource: DataSource) {
    this.productoCommand = new ProductoCommand(dataSource);
    this.productoQuery = new ProductoQuery(dataSource);
  }

  async crearProducto(datos: { nombre: string; precio: number; stock: number; codigoBarras: string }) {
    return await this.productoCommand.crearProducto(datos);
  }

  async obtenerProductos() {
    return await this.productoQuery.obtenerProductos();
  }

  async actualizarStock(id: number, cantidad: number) {
    return await this.productoCommand.actualizarStock(id, cantidad);
  }

  async obtenerProductoPorId(id: number) {
    return await this.productoQuery.obtenerProductoPorId(id);
  }
}