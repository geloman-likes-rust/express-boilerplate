import express from "express"
import rootRoute from "./routes/index.js"
import corsValidation from "./middlewares/corsValidation.js"

let app = express()
let PORT = process.env.SERVER_PORT || 6969

// UNCOMMENT THIS LATER (this message is for gelo)
// app.use(corsValidation)
app.use("/", rootRoute)

let handleServerConnection = (error) => console.log(error ? `Error message: ${error.message}` : `Server is Listening on Port ${PORT}`)
app.listen(PORT, handleServerConnection)
