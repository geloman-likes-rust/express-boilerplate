import dotenv from "dotenv"
import Cors from "../utils/cors.js"
dotenv.config()

const ORIGIN = process.env.ALLOWED_ORIGIN
const METHODS = "GET, POST, PUT, DELETE"
const HEADERS = "Content-Type, Authorization"

export default function corsValidationMiddleware(request, response, next) {
  let cors = new Cors(request, response, next)
  cors
    .allowOrigin(ORIGIN)
    .allowMethods(METHODS)
    .allowHeaders(HEADERS)
    .next()
}
