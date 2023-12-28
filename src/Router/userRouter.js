import { Router } from "express";
import { userDelete, userGetAll, userGetByID, userPost, userPut } from "../Controller/userController.js";
export const userRouter = Router();

userRouter.get("/", userGetAll);
userRouter.get("/:id", userGetByID);
userRouter.post("/", userPost);
userRouter.put("/:id", userPut);
userRouter.delete("/:id", userDelete);
