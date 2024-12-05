import { Request, Response } from 'express';
import { VentaService } from './venta.service';
import { ResponseHandler } from '../../utils/response.handler';
import { AppDataSource } from '../../config/database';

export class VentaController {
  private ventaService: VentaService;

  constructor() {
    this.ventaService = new VentaService(AppDataSource);
  }

  async crearVenta(req: Request, res: Response): Promise<void> {
    try {
      const { productoId, cantidad, total } = req.body;
      const venta = await this.ventaService.crearVenta({ productoId, cantidad, total });
      ResponseHandler.handleResponse(res, 201, 'Venta creada', venta);
    } catch (error) {
      ResponseHandler.handleResponse(res, 500, 'Error creando venta', null, error);
    }
  }

  async obtenerVentas(_req: Request, res: Response): Promise<void> {
    try {
      const ventas = await this.ventaService.obtenerVentas();
      ResponseHandler.handleResponse(res, 200, 'Ventas obtenidas', ventas);
    } catch (error) {
      ResponseHandler.handleResponse(res, 500, 'Error obteniendo ventas', null, error);
    }
  }

  async obtenerVentaPorId(req: Request, res: Response): Promise<void> {
    try {
      const venta = await this.ventaService.obtenerVentaPorId(+req.params.id);
      if (!venta) {
        return ResponseHandler.handleResponse(res, 404, 'Venta no encontrada');
      }
      ResponseHandler.handleResponse(res, 200, 'Venta obtenida', venta);
    } catch (error) {
      ResponseHandler.handleResponse(res, 500, 'Error obteniendo venta', null, error);
    }
  }
}