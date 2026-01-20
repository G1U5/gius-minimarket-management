const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth.controller");
const { authValidation } = require("../middlewares/auth.middleware");
const router = express.Router();

// REGISTER
router.post("/register", registerUser);
// Login
router.post("/login", loginUser);

module.exports = router;
