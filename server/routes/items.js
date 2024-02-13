const express = require('express');
const multer = require('multer');
const router  = express.Router()


const db = require('../db');

// const storage  = multer.diskStorage({
//     destination:(req, file, cb) =>{

//         db.addListener(null, "./images")

//     }, 
//     filename:(req, file, cb) =>{
//         db (null, file.fieldname + " " + Date.now() + path.extname(file.originalname));
//     }
// })
// const upload = multer({
//     storage: storage
// })


router.get('/', (req, res) =>{
    const sql ="SELECT * FROM items";
    db.query(sql, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

// router.get('/:item_id', (req, res) => {
//     const itemId = req.params.item_id;
//     const q = "SELECT FROM items WHERE item_id = ?"

// })
router.put('/:item_id', (req, res) => {
    const itemId = req.params.item_id;
    const q = "UPDATE items SET  `User_id` = ?, `User_name` = ?, `item_name` = ?, `description` = ?, `features` = ?,`features_1` = ?, `features_2` = ?, `features_3` = ?, `features_4` = ?, `item_image` = ? WHERE item_id =? ";
    const values=[
        req.body.User_id, 
        req.body.User_name,
        req.body.item_name, 
        req.body.description,
        req.body.features,
        req.body.features_1,
        req.body.features_2,
        req.body.features_3,
        req.body.features_4,
        req.body.item_image,
      

    ]
    db.query(q,[...values, itemId], (err, data)=>{
        
        if (err) {
            console.error('Error in database query:', err);
            return res.status(500).json(err)
        }
        console.log('Item updated Successfully', data);

        return res.status(201). json(data);
    } )
})



router.delete('/:item_id', (req, res) => {
    const itemId = req.params.item_id;
    const q = "DELETE FROM items WHERE item_id = ?"

    db.query(q,[itemId], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Item Deleted Successfully");
    } )
})


router.post("/", (req, res)=>{
    const values=[
        req.body.item_name, 
        req.body.User_name,
        req.body.User_id, 
        req.body.description,
        req.body.features,
        req.body.features_1,
        req.body.features_2,
        req.body.features_3,
        req.body.features_4,
        req.body.item_image
    ]
    db.query("INSERT INTO items (`item_name`,`User_name`, `User_id`, `description`,`features`,`features_1`, `features_2`, `features_3`,`features_4`, `item_image` ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", values, (err, data) =>{

        if (err) {
            console.error('Error in database query:', err);
            return res.status(500).json(err)
        }
        console.log('Inserted to the databsse', data);

        return res.status(201). json(data);
    })
})
module.exports = router;