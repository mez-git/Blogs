require("dotenv").config()

const express =require("express")
const cors=require('cors')
const app=express()
const authRoute=require("./router/auth-router")
const contactRoute=require("./router/contact-router")
const servicesRoute=require("./router/service-router")
const connectDb=require("./util/db")
const User=require("./models/user-model")
const errorMiddleware = require("./middlewares/error-middleware")



//handling cors error
const corsOptions={
    origin:"http://localhost:5173",
    method:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}

app.use(cors(corsOptions));





app.use(express.json())


app.use("/api/auth",authRoute)
app.use("/api/form",contactRoute)
app.use("/api/data",servicesRoute)
app.use(errorMiddleware)

const PORT=5000;



connectDb().then(()=>{
    app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})
})
    

