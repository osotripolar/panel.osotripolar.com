
import express from "express"
import { PORT } from "./config.js"

const app = express()

app.get('/',(req,res)=>{
  res.send('Hola desde panel')
})

app.listen(PORT,()=>{
  console.log('Server on port: ', PORT)
})