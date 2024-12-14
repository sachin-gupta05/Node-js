import mongoose from "mongoose";
import { userModel } from "./user.model.js";

const Register = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    // check user name empty
    // allready exist Register email,userName,
    //
    if (userName === "") {
      res.status(401).send({ message: "User Name is empty" });
    }

    const userExist = await userModel.findOne({
      $or: [{ userName }, { email }],
    });
    if (userExist) {
      res.status(409).send({ error: "user is all ready exist" });
    }

    const user = await userModel.create({ userName, email, password });

    return res.status(200).json(user);
  } catch (error) {
    console.log("error", error);
  }
  // res.send(userName);
};
export { Register };
