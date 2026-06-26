
import path from "node:path"
import express from "express"
import { PORT , ROOT} from "./config.js"

const app = express()

// CONFIG

app.use(express.json())
app.set("view engine","ejs")
app.set("views",path.join(ROOT,'views'))

// APP ROUTES
app.use(express.static(path.join(ROOT,'static')))

app.get('/',(req,res)=>{
  res.render('index')
})

// APP INIT
app.listen(PORT,()=>{
  console.log('Server on port: ', PORT)
})