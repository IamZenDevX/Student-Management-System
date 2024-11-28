const express = require("express");
const router = express.Router();

const {deletuser, verifyLoginByAdmin} = require("../controller/adminController");



router.post("/deleteuser/id/:id",  deletuser);

router.post("/verifyLoginByAdmin",  verifyLoginByAdmin);

module.exports = router;