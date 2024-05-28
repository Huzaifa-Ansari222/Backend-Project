import  express  from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express ()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})) 
//use use for middelware
app.use(express.json({limit:"16kb"}))//accpt json 
app.use(express.urlencoded({extended:true ,limit:"16kb"}))//route url specail symbol remover
app.use(express.static("public"))//public folder
app.use(cookieParser())




export { app }