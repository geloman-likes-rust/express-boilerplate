import dotenv from "dotenv"
import Cors from "../utils/cors.js"
dotenv.config()

const ORIGINS = process.env.ALLOWED_ORIGINS?.replace(" ", "").split(",")
const METHODS = process.env.ALLOWED_METHODS?.replace(" ", "").split(",")
const HEADERS = process.env.ALLOWED_HEADERS?.replace(" ", "").split(",")

export default function corsValidationMiddleware(request, response, next) {
  let cors = new Cors(request, response, next)
  cors
    .allowOrigins(ORIGINS)
    .allowMethods(METHODS)
    .allowHeaders(HEADERS)
    .next()
}
