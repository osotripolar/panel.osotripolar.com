import detenv from "dotenv"

detenv.config()

export const PORT = Number(process.env.PORT) 