const express = require('express')

const router = express.Router();

router.get('/',  async (req,res) => {
    console.clear();
    res.send("HOME SCREEN");
})
module.exports = router;