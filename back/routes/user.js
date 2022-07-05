const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const { verifySignUp } = require("../middlewar");

router.post("/signup", [
    verifySignUp.checkDuplicateEmail
  ], userCtrl.signup);

router.post("/login", userCtrl.login);
/*
router.put("/:id", userCtrl.modifyUser);
router.get("/:id", userCtrl.modifyUser);
router.delete("/:id", userCtrl.deleteUser);*/

module.exports = router;
