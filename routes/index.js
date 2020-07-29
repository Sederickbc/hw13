const router = require("express").Router();
const db = require('../models');
router.get("/", (req, res )=>{
    db.Burger.findAll().then(data=> {
        const burgers = data.map(a=> a.dataValues);
        console.log(burgers)
        res.render("index", {burgers});
    })
    
});

//router.post to take data and add burger to DB



//router.put to update a burger in db from devoured to undevoured or vice versa

module.exports = router;