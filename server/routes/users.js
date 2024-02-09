const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router  = express.Router()
const db = require('../db')
const cookieParser = require('cookie-parser')

salt = 10;



const verifyUser = (req, res, next )=>{
    const token = req.cookies.token;
    if(!token){
        return res.json({Error:"Not logged in"});
    }else{
        jwt.verify(token, "secret_key", (err, decoded) =>{
            if(err){
            return res.json({Error: 'Token is not right'});
            }else{
                 req.user= decoded.user;
                next()
            }  
            
        })
    }
}
router.get('/', verifyUser, (req, res) =>{
    return res.json({Status: "success", user: req.user})
})
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
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [req.body.email], (err, data) =>{
        if(err) return res.json({Error:'Login Server Error'});
        if(data.length > 0){
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) =>{
                if(err) return res.json({Error:"Password cant be read"})
                if(response) {
                        
                    const user = data[0].user_id
        
                    const token = jwt.sign({user: data[0]}, "secret_key", {expiresIn:"1d"});

                    console.log('User:', user.user_id);
                    console.log('Token:', token);

                 

                    res.cookie('token', token);

                    return res.json({Status:"Success"});
                }else{
                    return res.json({Error:" Incorrect Email or Password"})
                }
            })
        }else{
            return res.json({Error:'Email does not exist!'});
        }
    })
})

module.exports = router;