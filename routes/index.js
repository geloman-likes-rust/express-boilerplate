import express from "express"
import getRoot from "../controllers/index.js"
let router = express.Router()

router
  .route("/")
  .get(getRoot)
