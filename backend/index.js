require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const cors=require('cors');
const {HoldingsModel} = require('./model/HoldingsModel');
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel} = require('./model/OrdersModel');
const {UsersModel} = require('./model/UsersModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
app.post('/signup',async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        if (!name || !email || !password){
            return res.status(400).json({message: "All fields are required"});
        }
        const existingUser = await UsersModel.findOne({email});
        if (existingUser){
            return res.status(400).json({message: "User already exists"});
        }
        const hashPassword = await bcrypt.hash(password,12);
        const newUser = new UsersModel({
            name,
            email,
            password:hashPassword
        });
        await newUser.save();
        res.json({message: "User registered successfully"});
    }
    catch(err){
        res.status(500).json({message: "Server error"});
    }
})
app.post('/login',async (req,res)=>{
    try{
        const {email,password} = req.body;
        if (!email || !password){
            res.status(400).json({message : "All fields are required"});
        }
        const user = await UsersModel.findOne({email});
        if (!user){
            res.status(400).json({message : "Invalid username or password"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch){
            res.status(400).json({message : "Invalid username or password"});
        }
        res.status(200).json({
            message : "Login successfull",
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        });
    }
    catch(err){
        res.status(500).json({message:"Login failed"});
    }
})
app.listen(PORT,()=>{
    console.log("Server is running");
    mongoose.connect(url);
    console.log("DB connected");
});