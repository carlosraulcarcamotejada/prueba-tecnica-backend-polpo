import { RequestHandler } from "express";
import { todos as todosFixture } from "../data/todos";
import { tasks } from "../data/tasks";

import { ITask, ITodo } from "../types";

export const getTodos: RequestHandler = async (req, res) => {
  try {
    const userId = req.params?.id;
    const todosFound: ITodo[] = todosFixture.filter(
      (todo) => todo.userId === parseInt(userId, 10)
    );

    return res.status(200).json([...todosFound]);
  } catch (error) {
    return res.status(500).json({
      controller: "getTodos",
      error,
      message: "Please contact the administrator.",
      ok: false,
    });
  }
};

export const getTodo: RequestHandler = async (req, res) => {
  try {
    const todoId = req.params?.id;

    const todo: ITodo | undefined = todosFixture.find(
      (todo) => todo.id === parseInt(todoId, 10)
    );
    const todos: ITask[] = tasks.filter(
      (task) => task.todoId === parseInt(todoId, 10)
    );

    return res.status(200).json({ ...todo, todos });
  } catch (error) {
    return res.status(500).json({
      controller: "getTodo",
      error,
      message: "Please contact the administrator.",
      ok: false,
    });
  }
};

export const createTask: RequestHandler = async (req, res) => {
  try {
    const idTask = tasks[tasks.length - 1].id + 1;

    const todoId = parseInt(req.params?.id, 10);

    const userId =
      todosFixture.find((todo) => todo.id === todoId, 10)?.userId || -1;

    const newTask: ITask = {
      id: idTask,
      title: <string>req.headers.title || "",
      completed: parseInt(<string>req.headers.completed, 10),
      todoId,
      userId,
    };

    return res.status(200).json({ ...newTask });
  } catch (error) {
    return res.status(500).json({
      controller: "createTask",
      error,
      message: "Please contact the administrator.",
      ok: false,
    });
  }
};
