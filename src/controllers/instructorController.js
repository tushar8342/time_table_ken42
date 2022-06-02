const Instructor = require("../models/instructorModel");
const express = require("express");

const crudController = require("./crudController");

const router = express.Router();

router.post("", crudController(Instructor).post);

router.get("", crudController(Instructor).getData);

module.exports = router;