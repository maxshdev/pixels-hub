import { AppDataSource } from '../../config/database';
import { Venta } from '../../models/venta.model';

export const VentaRepository = AppDataSource.getRepository(Venta);