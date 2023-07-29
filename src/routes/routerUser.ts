import { Router } from "express";
import { getUsers, getUser, createUser } from "../controllers/userController";
import { getTodo, getTodos } from "../controllers/todoController";

export const routerUser = Router();

// 1) GET /users
routerUser.get("/users/", getUsers);

// 2) GET /users/:id
routerUser.get("/users/:id", getUser);

// 3) POST /users  ||  payload - headers {firstName: "", lastName:"", email:""}
routerUser.post("/users/", createUser);

// 4) GET /users/:id/todos
routerUser.get("/users/:id/todos", getTodos);

// 5 GET /todos/:id
routerUser.get("/users/todos/:id", getTodo);
