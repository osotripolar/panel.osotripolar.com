
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
  // hay que ver si tiene cookie, si esta habilitado redireccionamos
  res.render('index')
})

app.post('/login',(req,res)=>{
  // hay que mandarle un jwt que lo autorice
  // 

  try{
    const {username,password} = req.body

    if(!username || !password){
      return res.status(400).json({message: "Los campos 'username' y 'password' son requeridos"})
    }
    
    if(password.length < 5){
      return res.status(400).json({message: "La contraseña no puede tener menos de 5 caracteres"})
    }
    
    res.sendStatus(200)
  }catch(error){
    console.log(error)
    res.sendStatus(500)
  }

})

// APP INIT
app.listen(PORT,()=>{
  console.log('Server on port: ', PORT)
})