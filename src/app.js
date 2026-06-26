
import path from "node:path"
import express from "express"
import { PORT , ROOT} from "./config.js"

const app = express()


app.use(express.static(path.join(ROOT,'static')))

app.get('/',(req,res)=>{
  res.sendFile(path.join(ROOT,'views','index.html'))
})

app.listen(PORT,()=>{
  console.log('Server on port: ', PORT)
})