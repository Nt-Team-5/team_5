import { Router } from "express"
import {
    getAllOrderController,
    getOneOrderController,
    createOrderController,
    updateOrderController,
    deleteOrderController,
} from "../../../../bek_team_3/team_3-Bekzod/src/controllers/index.js"
import {
    authGuard,
    roleGuard,
} from "../../../../bek_team_3/team_3-Bekzod/src/middlewares/index.js"

export const orderRouter = Router()

orderRouter.get("/all", authGuard, getAllOrderController)
orderRouter.get("/one/:id", authGuard, getOneOrderController)
orderRouter.post("/add", authGuard, roleGuard(["admin"]), createOrderController)
orderRouter.put(
    "/update/:id",
    authGuard,
    roleGuard(["admin"]),
    updateOrderController,
)
orderRouter.delete(
    "/delete/:id",
    authGuard,
    roleGuard(["admin"]),
    deleteOrderController,
)
