const { response } = require("express");
const { todo } = require("../models/models");

const getToDo = async (request, response) => {
    var todoId = request.query.id;
    if(todoId){
        try{
            var todos = await todo.findById(studentId);
        }catch{
            todos = null;
        }
    }else{
        var todos = await todo.find();
    }
    var todos = await todo.find();
    return response.json(todos);
};

const createNewToDo = async (request, response) => {
    console.log(request.body);
    await todo.create(request.body);
    return response.json({data:"New Task Added"});
};

const updateToDo = async (request, response) => {
    var todoId = request.query.id;
    try{
        var toDo = await todo.findById(todoId);
        if(!toDo){
            return response
                .status(404)
                .json({status: "Error", msg: "No such task exist"});
        }
    }catch {
        return response
            .status(404)
            .json({status: "Error", msg: "No such task exist"});
    }
    console.log(request.body, todoId);
    await todo.findByIdAndUpdate(todoId, request.body);
    return response.json({data: "Task Updated"});
}

const deleteToDo = async (request, response) => {
    var todoId = request.query.id;
    await todo.findByIdAndDelete(todoId);
    return response.json({data: "Task Deleted" });
}

module.exports = { getToDo, createNewToDo, updateToDo, deleteToDo };