import path from "node:path"
import { fileURLToPath } from "node:url"
import detenv from "dotenv"

// habilitamos dotenv
detenv.config()

const __filename = fileURLToPath(import.meta.url)

// EXPORTAMOS LAS VARIABLES
export const ROOT = path.dirname(__filename)
export const PORT = Number(process.env.PORT) 