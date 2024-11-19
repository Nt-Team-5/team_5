import express from "express"
import morgan from "morgan"
import { cartItemRouter, cartRouter, orderRouter } from "./routes/index.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.use("/api/v1/cart", cartRouter)
app.use("/api/v1/cartItem", cartItemRouter)
app.use("/api/v1/order", orderRouter)

app.use((err, req, res) => {
    if (err) {
        return res.send(err.message)
    }
    return res.send("not found")
})

export default app
