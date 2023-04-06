const express = require("express")
const Chats = require("../DB/Schema/Chats")
const User = require("../DB/Schema/User")

const Chat = express.Router()


Chat.get("/login",async (req,res)=>{
    const {name,pass} = req.query
    const check = await User.findOne({name,pass})
    if(check){
        res.send({
            verified:true,
            user:check
        })
    }else{
        res.send({
            verified:false
        })
    }
})
Chat.get("/chats",async (req,res)=>{
    const chats = await Chats.find({})
    res.send({
        chats
    })
})


module.exports = Chat