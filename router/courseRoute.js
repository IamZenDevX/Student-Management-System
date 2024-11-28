const express = require("express");
const router = express.Router();

const {getallcourse, insertcorse} = require("../controller/courseController");



router.get("/getallcourse",  getallcourse);

router.post("/insertcorse",  insertcorse);

module.exports = router;