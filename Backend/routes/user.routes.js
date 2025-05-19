const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../contollers/user.controller");
const authMiddleware = require("../Middlewares/auth.middleware");
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name should be minimum 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be minimum 6 character long"),
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("invalid message"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 character long"),
  ],
  userController.loginUser
);

router.get("/profile", authMiddleware.authUser, userController.getUserProfile);

router.get("/logout", authMiddleware.authUser, userController.getLogoutUser);
module.exports = router;
