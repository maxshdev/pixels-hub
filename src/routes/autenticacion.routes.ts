import { BaseRouter } from "./routes";
import { AutenticacionController } from "../modules/autenticacion/autenticacion.controller";

export class AuthenticationRouter extends BaseRouter<AutenticacionController> {

    constructor() {
        super(AutenticacionController);
    }

    routes(): void {
        this.router.post('/autenticacion', (req, res) => this.controller.authorization(req, res));
        this.router.get('/status', (req, res) => this.controller.getStatus(req, res));
    }
}