import { Router } from "express";
import { createTask } from "../controllers/todoController";

export const routerTodo = Router();

// 6) POST /todos/:id/task  ||  payload - headers {title: "", completed: 0}
routerTodo.post("/todos/:id/task", createTask);
