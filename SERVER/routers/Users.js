const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const FanModel = require("../Models/UserSchema");
const TalentModel = require("../Models/TalentSchema");



// fan Signup

router.post('/fanSignup',async(req,res)=>{

    console.log("reached here");

    console.log(req.body);
try {

    let {firstname,lastname,username,email,password} = req.body;
    password = await bcrypt.hash(password,10);
    const fan = new FanModel ({
        firstname,
        lastname,
        username,
        email,
        password

    })

    await fan.save()
    res.status(200).json({data:fan})
    
} catch (error) {
    res.status(500).json({ msg: "error occured" });
    console.log(error);
}

})

// talent SignUp

router.post('/talentSignup',async(req,res)=>{

    console.log("reached here");

    console.log(req.body);
try {

    let {firstname,lastname,username,email,password} = req.body;
    password = await bcrypt.hash(password,10);
    const talent = new TalentModel ({
        firstname,
        lastname,
        username,
        email,
        password

    })

    let savetalent = await talent.save()
    res.status(200).json({data:"talent created successfully"})
    
} catch (error) {
    res.status(500).json({ msg: "error occured" });
    console.log(error);
}

})


module.exports = router;