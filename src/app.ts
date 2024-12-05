import express from 'express';
// import bodyParser from 'body-parser';
import session from 'express-session';
import morgan from "morgan";
import cors from "cors";
import http from 'http';
import { AppDataSource } from "./config/database";

/* CONFIG */
import { JWTS, PORT } from "./config/environments";

/* ROUTES */
// import { AuthenticationRouter } from "./routes/authentication.routes";
// import { UserRouter } from "./routes/users.routes";
import { ProductoRouter } from "./routes/producto.routes";
import { VentaRouter } from './routes/venta.routes';
import { ReabastecimientoRouter } from './routes/reabastecimiento.routes';

AppDataSource.initialize().then(() => {
        console.log("Data Source ha sido inicializado!")
    }).catch((err: any) => {
        console.error("Error al inicializar Data Source:", err)
    })
;

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use(
  session({
    secret: JWTS,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);

/* ROUTES */
app.use("/api/v1", routes());

/* ROUTES IMPORT */
function routes(): Array<express.Router> {
    return [
        // new AuthenticationRouter().router,
        new ProductoRouter().router,
        new VentaRouter().router,
        new ReabastecimientoRouter().router,
        // new UserRouter().router
    ];
  }
  
  server.listen(PORT, function () {
    console.log('Servidor Conectado en http://localhost:' + PORT);
  });

// import productRoutes from './routes/productRoutes';

// app.use(bodyParser.json());
// app.use('/api', productRoutes);