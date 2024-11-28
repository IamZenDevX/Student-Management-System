const express = require("express");
const router = express.Router();

const {getalluser, userregister, verifylogin} = require("../controller/userController");



router.get("/getalluser",  getalluser);

router.post("/userregister",  userregister);

router.post("/verifylogin",  verifylogin);

module.exports = router;