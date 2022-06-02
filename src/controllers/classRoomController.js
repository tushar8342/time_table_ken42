const classmain = require("../models/classRoomModel");
const express = require("express");
const crudController = require("./crudController");

const router = express.Router();


router.post("", crudController(classmain).post);

router.get("", crudController(classmain).getData);


module.exports = router;