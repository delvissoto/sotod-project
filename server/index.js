const express = require("express");
const cors = require("cors");


const app = express()
app.use(cors())



app.get('/', (req, res)=> {
    return res.json('From Backendside');
})



const userRouter = require('./routes/users')
app.use('/users', userRouter)

const itemsRouter = require('./routes/items')
app.use('/users', userRouter)



app.listen(8080, ()=>{
    console.log("listening");
})