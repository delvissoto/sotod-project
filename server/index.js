const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/router.js')


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: "*",
    credentials: true, 
    optionSuccsessStatus: 200

}
app.use(cors(corsOptions))
app.use('/', router)

const port = 8080
app.listen(port, () =>{
    console.log(`connected to port${port}`)
})