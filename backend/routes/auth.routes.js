const express = require("express");
const { registerUser } = require("../controllers/auth.controller");
const router = express.Router();

// REGISTER
router.post("/register", registerUser);

module.exports = router;
