const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req,res) => {

    const user = new User(req.body);

    await user.save();

    res.json({
        message:"Registration Successful"
    });
});

router.post("/login", async (req,res) => {

    const user = await User.findOne({
        email:req.body.email,
        password:req.body.password
    });

    if(user){
        res.json({
            success:true,
            user
        });
    } else {
        res.json({
            success:false
        });
    }
});

module.exports = router;