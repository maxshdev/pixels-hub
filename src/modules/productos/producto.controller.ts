import { Request, Response } from 'express';
import { ProductoService } from './producto.service';
import { ResponseHandler } from '../../utils/response.handler';
import { AppDataSource } from '../../config/database';

export class ProductoController {
  private productoService: ProductoService;

  constructor() {
    this.productoService = new ProductoService(AppDataSource);
  }

  async crearProducto(req: Request, res: Response): Promise<void> {
    try {
        const producto = await this.productoService.crearProducto(req.body);
        ResponseHandler.handleResponse(res, 201, 'Producto creado', producto);
    } catch (error) {
        ResponseHandler.handleResponse(res, 500, 'Error creando producto', null, error);
    }
  }

  async obtenerProductos(_req: Request, res: Response): Promise<void> {
    try {
        const productos = await this.productoService.obtenerProductos();
        ResponseHandler.handleResponse(res, 200, 'Productos obtenidos', productos);
    } catch (error) {
        ResponseHandler.handleResponse(res, 500, 'Error obteniendo productos', null, error);
    }
  }

  async actualizarStock(req: Request, res: Response): Promise<void> {
    try {
        const { cantidad } = req.body;
        const producto = await this.productoService.actualizarStock(+req.params.id, cantidad);
        if (!producto) return ResponseHandler.handleResponse(res, 404, 'Producto no encontrado');
        ResponseHandler.handleResponse(res, 200, 'Stock actualizado', producto);
    } catch (error) {
        ResponseHandler.handleResponse(res, 500, 'Error actualizando stock', null, error);
    }
  }
}
