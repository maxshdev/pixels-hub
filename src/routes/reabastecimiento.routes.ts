import authenticateToken from '../middleware/jwt.middleware';
import { BaseRouter } from "./routes";
import { ReabastecimientoController } from "../modules/reabastecimientos/reabastecimiento.controller";

export class ReabastecimientoRouter extends BaseRouter<ReabastecimientoController> {
  constructor() {
    super(ReabastecimientoController);
  }

  routes(): void {
    this.router.post('/reabastecimientos', authenticateToken, (req, res) => this.controller.crearReabastecimiento(req, res));
    this.router.get('/reabastecimientos', authenticateToken, (req, res) => this.controller.obtenerReabastecimientos(req, res));
    this.router.get('/reabastecimientos/:id', authenticateToken, (req, res) => this.controller.obtenerReabastecimientoPorId(req, res));
    this.router.get('/productos/:productoId/reabastecimientos', authenticateToken, (req, res) => this.controller.obtenerReabastecimientosPorProductoId(req, res));
  }
}