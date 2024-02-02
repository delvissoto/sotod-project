const express = require('express')
const router  = express.Router()
const db = require('../db')

router.get('/', (req, res) =>{
    const sql ="SELECT * FROM users";
    db.query(sql, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
router.get('/:user_id', (req, res) => {
    res.send(`Get user with ID ${req.params.user_id}`)
})
.put('/:user_id', (req, res) => {
    res.send(`update user with ID ${req.params.user_id}`)
})
.delete('/:user_id', (req, res) => {
    res.send(`Delete user with ID ${req.params.user_id}`)
})


module.exports = router;