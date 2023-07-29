export interface ITodo {
  id: number;
  title: string;
  keywords: string[];
  userId: number;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ITask {
  id: number;
  title: string;
  completed: number;
  todoId: number;
  userId: number;
}
