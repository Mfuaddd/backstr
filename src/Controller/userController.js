import { userModel } from "../Model/userModel.js";

export const userGetAll = async (req, res) => {
  res.status(200).send(await userModel.find({}));
};

export const userGetByID = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(await userModel.findById(id));
  } catch (error) {
    console.log("userGetByID: ", error.message);
  }
};

export const userPost = async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = new userModel({ name });
    await newUser.save();
    res.status(200).send("Got a POST request");
  } catch (error) {
    console.log("userPost: ", error.message);
  }
};

export const userPut = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await userModel.findByIdAndUpdate(id, { name });
    res.status(200).send("Got a PUT request");
  } catch (error) {
    console.log("userPut: ", error.message);
  }
};

export const userDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.status(200).send("Got a DELETE request");
  } catch (error) {
    console.log("userDelete: ", error.message);
  }
};
