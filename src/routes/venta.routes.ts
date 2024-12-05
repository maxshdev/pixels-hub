import authenticateToken from '../middleware/jwt.middleware';
import { BaseRouter } from './routes';
import { VentaController } from '../modules/ventas/venta.controller';

export class VentaRouter extends BaseRouter<VentaController> {
  constructor() {
    super(VentaController);
  }

  routes(): void {
    this.router.post('/ventas', authenticateToken, (req, res) => this.controller.crearVenta(req, res));
    this.router.get('/ventas', authenticateToken, (req, res) => this.controller.obtenerVentas(req, res));
    this.router.get('/ventas/:id', authenticateToken, (req, res) => this.controller.obtenerVentaPorId(req, res));
  }
}