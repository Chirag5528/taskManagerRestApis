const express = require("express");

// setting up router
const router = express.Router();

// get user model

const User = require('../models/authors');

// get a list of user
router.get("/author", async (req,res) => {
    
    res.json(await User.find());
})

// get a single user
router.get("/author/:id", async (req,res) => {

    const {id} = req.params;
    
    res.send(`Should get the id here ${id}`);
})

// save a user
router.post("/author", async (req,res) => {
   const {name, age} = req.body;
   try{
    const user = new User({name, age}).save();
    res.status(201).json(user)
   }catch(err){
    res.status(400).json({ message: error.message })
   }
})

// update the user
router.put("/author/:id", async (req,res) => {

    const {id} = req.params;
    res.send(`PUT API ${id}`);
})

 router.delete("/author/:id", async (req,res) => {
    const {id} = req.params;
    res.send(`DELETE API ${id}`);
 })


module.exports = router;