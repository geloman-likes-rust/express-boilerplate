import dotenv from "dotenv"
import cors from "cors"
dotenv.config()

const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS?.replace(" ", "").split(",")

const OPTIONS = {
  origin: ALLOWED_ORIGINS || ["http://localhost"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}

let corsValidationMiddleware = cors(OPTIONS)

export default corsValidationMiddleware
