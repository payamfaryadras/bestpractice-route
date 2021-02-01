const express = require('express');

const route = express.Router();

route.get("/", (req,res) => {
    res.send("get all groups")
 });

 module.exports = route;
