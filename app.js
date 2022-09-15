const express = require('express')
const app = express();
const {mongoose, database} = require('./src/database/connection')
require('dotenv').config();
const routes = require("./src/routes/")

// convert all the response into json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use("/test", async (req,res) => {
    

    const numbers =  [20,30,17,40];
    let numberStr = numbers.join("").match(/[7]/);
    let boomExists = false;
    if(numberStr) boomExists = true;
    res.send(`${boomExists ? "BOOM!" : "there is no 7 in the array"}`); 
});
app.listen(process.env.PORT || 3000, () => {
    console.clear();
    console.log(`CONNECTION ESTABLISHED ${process.env.PORT || 3000}`);
})



