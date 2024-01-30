import express from "express"
import cors from "cors"
import bodyParser from "body-parser"


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: "*",
    credentials: true, 

}
app.use(cors(corsOptions))

 const port = 8080
app.listen(port, () =>{
    console.log(`connected to port${port}`)
})