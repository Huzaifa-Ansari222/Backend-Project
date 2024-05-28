// require('dotenv').config({path:'./env'}) //not using require format so we r using import and chnge script experimental verison
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

//using import instead of require
dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running PORT : ${process.env.PORT}`);
    })
})
.catch(
    (err) => {
        console.log("MONGO db connection failed!!!",err);
    }
)










/*
import express from "express"
const app = express()

//iffie imediatly run db
(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/$
        {DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERRR",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port $
            {process.env.PORT}`)
        }
    }catch (error){
        console.error("ERROR: ",error);
        throw err
    }
})()
*/