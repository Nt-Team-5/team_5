import { Router } from "express"
import {
    getAllCartController,
    getOneCartController,
    createCartController,
    updateCartController,
    deleteCartController,
} from "../../../../bek_team_3/team_3-Bekzod/src/controllers/index.js"
import { authGuard, roleGuard } from "../../../../bek_team_3/team_3-Bekzod/src/middlewares/index.js"

export const cartRouter = Router()

cartRouter.get("/all", authGuard, getAllCartController)
cartRouter.get("/one/:id", authGuard, getOneCartController)
cartRouter.post("/add", authGuard,roleGuard(['admin']), createCartController)
cartRouter.put("/update/:id", authGuard,roleGuard(['admin']), updateCartController)
cartRouter.delete("/delete/:id", authGuard,roleGuard(['admin']), deleteCartController)
