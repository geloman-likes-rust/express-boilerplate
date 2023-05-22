import dotenv from "dotenv"
import express from "express"
import rootRoute from "./routes/index.js"
import corsValidationMiddleware from "./middlewares/corsValidation.js"
dotenv.config()

let app = express()
let PORT = process.env.SERVER_PORT || 6969

// GLOBAL MIDDLEWARES
app.use(express.json())
app.use(corsValidationMiddleware)

// ROUTES or ENDPOINTS
app.use(rootRoute)

let handleServerConnection = (error) => console.log(error ? `Error message: ${error.message}` : `Server is Listening on Port ${PORT}`)
app.listen(PORT, handleServerConnection)
