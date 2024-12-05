import { Request, Response } from 'express';
import { ReabastecimientoService } from './reabastecimiento.service';
import { ResponseHandler } from '../../utils/response.handler';
import { AppDataSource } from '../../config/database';

export class ReabastecimientoController {
  private reabastecimientoService: ReabastecimientoService;

  constructor() {
    this.reabastecimientoService = new ReabastecimientoService(AppDataSource);
  }

  async crearReabastecimiento(req: Request, res: Response): Promise<void> {
    try {
      const { productoId, cantidad, fecha } = req.body;
      const reabastecimiento = await this.reabastecimientoService.crearReabastecimiento({ productoId, cantidad });
      ResponseHandler.handleResponse(res, 201, 'Reabastecimiento creado', reabastecimiento);
    } catch (error) {
      ResponseHandler.handleResponse(res, 500, 'Error creando reabastecimiento', null, error);
    }
  }

  async obtenerReabastecimientos(_req: Request, res: Response): Promise<void> {
    try {
      const reabastecimientos = await this.reabastecimientoService.obtenerReabastecimientos();
      ResponseHandler.handleResponse(res, 200, 'Reabastecimientos obtenidos', reabastecimientos);
    } catch (error) {
      ResponseHandler.handleResponse(res, 500, 'Error obteniendo reabastecimientos', null, error);
    }
  }

  async obtenerReabastecimientoPorId(req: Request, res: Response): Promise<void> {
    try {
      const reabastecimiento = await this.reabastecimientoService.obtenerReabastecimientoPorId(+req.params.id);
      if (!reabastecimiento) return ResponseHandler.handleResponse(res, 404, 'Reabastecimiento no encontrado');
      ResponseHandler.handleResponse(res, 200, 'Reabastecimiento obtenido', reabastecimiento);
    } catch (error) {
      ResponseHandler.handleResponse(res, 500, 'Error obteniendo reabastecimiento', null, error);
    }
  }

  async obtenerReabastecimientosPorProductoId(req: Request, res: Response): Promise<void> {
    try {
      const reabastecimientos = await this.reabastecimientoService.obtenerReabastecimientosPorProductoId(+req.params.productoId);
      if (!reabastecimientos || reabastecimientos.length === 0) {
        return ResponseHandler.handleResponse(res, 404, 'No se encontraron reabastecimientos para este producto');
      }
      ResponseHandler.handleResponse(res, 200, 'Reabastecimientos obtenidos para el producto', reabastecimientos);
    } catch (error) {
      ResponseHandler.handleResponse(res, 500, 'Error obteniendo reabastecimientos del producto', null, error);
    }
  }
}