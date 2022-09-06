import Rol from "../models/rol-model.js";
import User from "../models/user-models.js";

export const validatorRole = async (rol = "") => {
  const existRol = await Rol.findOne({ rol });
  if (!existRol) {
    throw new Error(`the rol ${rol} is not valid`);
  }
};

export const validatorEmail = async (email = "") => {
  const emailExits = await User.findOne({ email });
  if (emailExits) {
    throw new Error(`the email  ${email} is already registred`);
  }
};

export const validatorMongoId = async (id = "") => {
  const idExits = await User.findOne({ id });
  if (!idExits) {
    throw new Error(`the id: ${id} did not exist`);
  }
};
