import express from "express"
let app = express()
let PORT = process.env.SERVER_PORT || 6969

app.get("/", (_, res) => res.status(200).json({ sucess: true, data: { greetings: "hello!" } }))

let handleServerConnection = (error) => console.log(error ? `Error message: ${error}` : `Server is Listening on Port ${PORT}`)
app.listen(PORT, handleServerConnection)
