import { response, request } from "express";
import jwt from "jsonwebtoken";

import User from "../models/user-models.js";
import { SECRETORPRIVATEKEY } from "../config/config.js";

export const validateJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición",
    });
  }

  try {
    const { uid } = jwt.verify(token, SECRETORPRIVATEKEY);

    // leer el usuario que corresponde al uid
    const user = await User.findById(uid);

    if (!user) {
      return res.status(401).json({
        msg: "Token no válido - usuario no existe DB",
      });
    }

    // Verificar si el uid tiene estado true
    if (!user.estado) {
      return res.status(401).json({
        msg: "Token no válido - user con estado: false",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no válido",
    });
  }
};
