const express = require("express");
const router = express.Router();
const { authValidation } = require("../middlewares/auth.middleware");

// Ruta de prueba protegida
router.get("/private", authValidation, (req, res) =>{
    res.json({
        msg: "Acceso permitido",
        user: req.user
    })
})

module.exports = router