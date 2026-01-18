import express from "express";
import { createTodo, deleteTodo, getAllTodo, updateTodo } from "../controllers/todoController.js";


const todoRouter = express.Router();

todoRouter.get("/", getAllTodo);
todoRouter.post("/", createTodo);
todoRouter.put("/:id", updateTodo);
todoRouter.delete("/:id", deleteTodo);

export default todoRouter;