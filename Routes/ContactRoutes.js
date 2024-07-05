const express = require("express");
const { sendEmailController } = require("../Controllers/ContactControl");

//router object
const router = express.Router();

//routes
router.post("/sendEmail", sendEmailController);

// /export
module.exports = router;