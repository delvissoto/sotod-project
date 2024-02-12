const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router  = express.Router()
const db = require('../db')
const cookieParser = require('cookie-parser')
const session  = require("express-session")

salt = 10;




router.get('/', (req, res) =>{
   if (req.session.user){
    res.send({loggedIn: true, user: req.session.user})
   } else {
        res.send({loggedIn:false})
   }
})

router.get('/logout', (req, res) => {
    res.clearCookie('userId', { path: '/' });
    req.session.destroy();  // destroy the session
    return res.json({ Message: "Success" });
});
// router.get('/:user_id', (req, res) => {
//     res.send(`Get user with ID ${req.params.user_id}`)
// })
// router.put('/:user_id', (req, res) => {
//     res.send(`update user with ID ${req.params.user_id}`)
// })
// router.delete('/:user_id', (req, res) => {
//     res.send(`Delete user with ID ${req.params.user_id}`)
// })


router.post("/signup", (req, res)=>{
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) =>{
        if(err) return res.json({Error:"Error hashing Passowod"});
        const values=[
            req.body.user_name, 
            req.body.email,
            hash,
        ]
        db.query("INSERT INTO users (`user_name`, `email`, `password` ) VALUES (?)", [values], (err, data) =>{

            if (err) {
                console.error('Error in database query:', err);
                return res.status(500).json(err)
            }
            console.log('Inserted to the databsse', data);
    
            return res.json({Status:"Success"});
        })
    })
   
    
})
router.post("/login", (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, email, (err, data) =>{

        if(err) return res.json({Error: err}); //error fetching 

        if(data.length > 0){
            bcrypt.compare(password, data[0].password, (err, response) =>{
                if(response){
                    req.session.user = data
                    console.log(req.session.user)
                    res.send(data);
                }else{
                    res.send({message:"Wrong username/password combination!"})
                }

            })
        }else{
            res.send({message:"User does not exist"})
        }
    })
})

module.exports = router;