import { AppDataSource } from '../../config/database';
import { Producto } from '../../models/producto.model';

export const ProductoRepository = AppDataSource.getRepository(Producto);