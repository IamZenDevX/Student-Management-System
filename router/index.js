const express = require("express");
const router = express.Router();

const adminRoute = require("./adminRoute");
const courseRoute = require("./courseRoute");
const userRoute = require("./userRoute");

router.use("/admin", adminRoute);
router.use("/course", courseRoute);
router.use("/user", userRoute);

module.exports = router;
