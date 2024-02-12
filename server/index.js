const express = require("express");
const cors = require("cors");
const multer= require('multer')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session  = require("express-session")

const app = express()
app.use(express.json())
app.use(cors({
    origin:["http://52.86.154.61:3000"],
    methods:["POST", "GET", "PUT", "DELETE"], 
    credentials: true
    
}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true})); 

app.use(session({
    key: "userId",
    secret:"secret",
    resave: false, 
    saveUninitialized: false, 
    cookie:{
        maxAge: 60 * 60 * 24 * 1000, 
    }

}))


app.get('/', (req, res)=> {
    return res.json('From Backendside');
})
app.get('/', (res, req) =>{
    res.cookie('', '', {expires: new Date(1), path: '/' });
   return res.json({Message:"Success"})
})



const userRouter = require('./routes/users')
app.use('/users', userRouter)

const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter)



app.listen(8080, ()=>{
    console.log("listening");
})