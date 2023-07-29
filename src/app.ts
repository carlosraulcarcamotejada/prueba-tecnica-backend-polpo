import cors from "cors";
import Express from "express";
import { routerUser } from "./routes/routerUser";
import { routerTodo } from "./routes/routerTodo";

export const app = () => {
  const port = 5000;

  const express = Express();

  express.use(cors());

  express.use(Express.json());

  //Routes
  express.use(routerUser);
  express.use(routerTodo);

  express.listen(port, () => {
    console.log(`Server on port: ${port}`);
  });
};
