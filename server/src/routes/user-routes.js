import { Router } from "express";
import { check } from "express-validator";

import { checkField } from "../middlewares/check-field.js";
import { validateJWT } from "../middlewares/validate-jwt.js";

import {
  validatorRole,
  validatorEmail,
  validatorMongoId,
} from "../helpers/db-validators.js";

import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user-controllers.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(validatorMongoId),
    // check("rol").custom(validatorRole),
    checkField,
  ],
  getUser
);

userRouter.post(
  "/",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe de ser más de 6 letras").isLength({
      min: 6,
    }),
    check("email", "El correo no es válido").isEmail(),
    check("email").custom(validatorEmail),
    // check("rol", "No es un rol válido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    // check("rol").custom(validatorRole),
    checkField,
  ],
  createUser
);

userRouter.delete(
  "/:id",
  [
    validateJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(validatorMongoId),
    checkField,
  ],
  deleteUser
);

userRouter.put(
  "/:id",
  [
    validateJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(validatorMongoId),
    check("rol").custom(validatorRole),
    checkField,
  ],
  updateUser
);

export default userRouter;
