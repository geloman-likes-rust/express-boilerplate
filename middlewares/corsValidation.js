import dotenv from "dotenv"
import Cors from "../utils/cors.js"
dotenv.config()

const ORIGIN = process.env.ALLOWED_ORIGIN
const METHODS = process.env.ALLOWED_METHODS
const HEADERS = process.env.ALLOWED_HEADERS

export default function corsValidationMiddleware(request, response, next) {
  let cors = new Cors(request, response, next)
  cors
    .allowOrigin(ORIGIN)
    .allowMethods(METHODS)
    .allowHeaders(HEADERS)
    .next()
}
