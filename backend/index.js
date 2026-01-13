require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const cors=require('cors');
const {HoldingsModel} = require('./model/HoldingsModel');
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel} = require('./model/OrdersModel');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const app = express();
app.use(cors());
app.use(bp.json());
app.get('/allholdings',async(req,res)=>{
    let allholdings = await HoldingsModel.find({});
    res.json(allholdings);
});
app.get('/allPositions',async(req,res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
})
app.post('/newOrder',async(req,res)=>{
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode
    });
    newOrder.save();
    res.json({message: "Order Placed"});
});
app.listen(PORT,()=>{
    console.log("Server is running");
    mongoose.connect(url);
    console.log("DB connected");
});