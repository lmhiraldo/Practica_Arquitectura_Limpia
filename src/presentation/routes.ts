import { Router } from "express";
import { AuthRoutes } from "./auth/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/auth", AuthRoutes.routes);
    // router.use("/api/user");
    // router.use("/api/produts");
    // router.use("/api/orders");

    return router;
  }
}
