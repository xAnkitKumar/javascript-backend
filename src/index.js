import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()






/* 1 way but it is crowded
import express from "express";
const app=express();
//IIFE
;(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("err");
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port: ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR:",error);
        throw error
    }

})()   */