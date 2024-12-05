import { DataSource } from "typeorm";
import { Producto } from '../models/producto.model';
import { Venta } from '../models/venta.model';
import { Reabastecimiento } from '../models/reabastecimiento.model';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    port: 3306,
    database: 'pixels-hub-db',
    entities: [Producto, Venta, Reabastecimiento],
    logging: true,
    synchronize: true,
});