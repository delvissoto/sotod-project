const express = require('express')


const router = express.Router()
router.get('/something', (req, res) =>{
    const somethingData = [
        {
            "id":"1",
            "myName":"Delvis", 
            "lastName":"Soto"
        }
    ]
    res.send(somethingData)

})
module.exports = router

