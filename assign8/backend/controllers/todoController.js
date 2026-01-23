import { resHandler } from "../utils/resHandler.js";
import {Todo} from "../models/todoModels.js";

export const getAllTodo = async (req, res) => {
    try {
        const todos = await Todo.find().sort({createdAt: -1});  //new first
        if(todos.length === 0){
            return resHandler(res, 201, "No todo found");
        }

        return resHandler(res, 200, "All todos available", todos);
    } catch (error) {
        console.log("Error while getting all todos", error.message);
        return resHandler(res, 500, error.message);
    }
}

// create new todo
export const createTodo = async (req, res) => {
    try {
        console.log(req.body);
        const { todo } = req.body;
        if(!todo){
            return resHandler(res, 200, "Todo task missing.");
        }
        const newTodo = new Todo({
            todo
        });
        const savedTodo = await newTodo.save();
        return resHandler(res, 200, "Todo task added", savedTodo );
        
    } catch (error) {
        console.log("Error while creating  todos", error.message);
        return resHandler(res, 500, error.message);
    }
}

// update todo
export const updateTodo = async (req, res) => {
    try {
        const todoId = req.params.id;

        const{todo, isCompleted} = req.body;
        const updateFields = {};
        if(todo){
            updateFields.todo = todo;
        }
        if(isCompleted !== undefined){
            updateFields.isCompleted = isCompleted;
        }

        if(Object.keys(updateFields).length === 0){
            return resHandler(res, 400, "No fields provided to update");
        }
        
        const updatedTodo = await Todo.findByIdAndUpdate(todoId, {$set: updateFields}, {new : true});
        if(!updatedTodo){
            return resHandler(res, 200, "No todo found");
        }
        return resHandler(res, 200, "Todo Updated", updatedTodo);
    } catch (error) {
        console.log("Error while updating existing todos", error.message);
        return resHandler(res, 500, error.message);
    }
}

// delete todo
export const deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id;
        if(!todoId){
            return resHandler(res, 200, "Please provided todo ID.")
        }
        await Todo.findByIdAndDelete(todoId);
         return resHandler(res, 200, "Todo Deleted");
    } catch (error) {
        console.log("Error while deleting the todos", error.message);
        return resHandler(res, 500, error.message);
    }
}