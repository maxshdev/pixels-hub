import authenticateToken from '../middleware/jwt.middleware';
import { BaseRouter } from "./routes";
import { ProductoController } from "../modules/productos/producto.controller";

export class ProductoRouter extends BaseRouter<ProductoController> {
  constructor() {
    super(ProductoController);
  }

  routes(): void {
    this.router.post('/productos', authenticateToken, (req, res) => this.controller.crearProducto(req, res));
    this.router.get('/productos', authenticateToken, (req, res) => this.controller.obtenerProductos(req, res));
    this.router.patch('/productos/:id/stock', authenticateToken, (req, res) => this.controller.actualizarStock(req, res));
  }
}