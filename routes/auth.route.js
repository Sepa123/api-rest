import { Router } from "express";
import { infoUser, login, register } from "../controller/auth.controller.js";
import { body } from "express-validator";
import { validationResultExpress } from "../middlewares/validationResultExpress.js";
import { generateRefreshToken, requireToken } from "../middlewares/requireToken.js";
const router = Router();

router.post(
  "/register",
  [
    body("email", "Formato de email incorrecto")
      .trim()
      .isEmail()
      .normalizeEmail(),
    body("password", "formato de password incorrecto")
      .trim()
      .isLength({ min: 6 })
      .custom((value, {req}) => {
        if (value !== req.body.repassword) {
            throw new Error ("no coinciden las contraseñas");
        }
        return value;
      }),
  ],
  validationResultExpress,
  register
);
router.post(
  "/login",
  [
    body("email", "Formato de email incorrecto")
      .trim()
      .isEmail()
      .normalizeEmail(),
    body("password", "formato de password incorrecto")
      .trim()
      .isLength({ min: 6 }),
  ],
  login
);
router.get("/protected", requireToken, infoUser);
router.get("/refresh", )

export default router;