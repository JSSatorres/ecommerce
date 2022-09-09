import { Router } from "express";
import { check } from "express-validator";

import { checkFields } from "../middlewares/check-field.js";

import { login } from "../controllers/auth.js";

const router = Router();

router.post(
  "/login",
  [
    check("correo", "El correo es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    checkFields,
  ],
  login
);

module.exports = router;
