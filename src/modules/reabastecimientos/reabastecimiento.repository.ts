import { AppDataSource } from '../../config/database';
import { Reabastecimiento } from '../../models/reabastecimiento.model';

export const ReabastecimientoRepository = AppDataSource.getRepository(Reabastecimiento);