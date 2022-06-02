const express = require("express");
const meeting = require("../models/meetingIdModel");


const router = express.Router();



router.get("",async(req,res)=>{
    try {
        let meeting = await meeting.find()
        return res.status(200).send(meeting)
        
    } catch (error) {
        console.log('error:', error)
    }
})

module.exports = router;