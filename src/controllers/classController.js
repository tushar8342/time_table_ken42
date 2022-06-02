const Class = require("../models/classModel");
const express = require("express");
const crudController = require("./crudController");

const router = express.Router();

router.post("", crudController(Class).post);


router.get("", crudController(Class).getData);

module.exports = router;