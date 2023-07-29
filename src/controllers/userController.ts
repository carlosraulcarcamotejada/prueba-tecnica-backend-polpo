import { RequestHandler } from "express";
import { users } from "../data/users";
import { IUser } from "../types";

export const getUsers: RequestHandler = async (req, res) => {
  try {
    return res.status(200).json([...users]);
  } catch (error) {
    return res.status(500).json({
      controller: "getUsers",
      error,
      message: "Please contact the administrator.",
      ok: false,
    });
  }
};

export const getUser: RequestHandler = async (req, res) => {
  try {
    const id = req.params?.id;

    const user = users.find((user) => user.id === parseInt(id, 10));

    return res.status(200).json({ ...user });
  } catch (error) {
    return res.status(500).json({
      controller: "getUser",
      error,
      message: "Please contact the administrator.",
      ok: false,
    });
  }
};

export const createUser: RequestHandler = async (req, res) => {
  try {
    const newUserId = users[users.length - 1].id + 1;

    const newUser: IUser = {
      id: newUserId,
      firstName: <string>req.headers.firstname || "",
      lastName: <string>req.headers.lastname || "",
      email: <string>req.headers.email || "",
    };

    return res.status(200).json({ ...newUser });
  } catch (error) {
    return res.status(500).json({
      controller: "createUser",
      error,
      message: "Please contact the administrator.",
      ok: false,
    });
  }
};
