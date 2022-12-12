const server = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//To-Do: Database Connection
mongoose.connect("mongodb://localhost:27017/toDo");
mongoose.connection.on("connected", () => {
    console.log("DB CONNECTED");
});
mongoose.connection.on("error", () => {
    console.log("Connection Error");
});

const { getToDo, createNewToDo, updateToDo, deleteToDo } = require("./src/controllers/index");
const app = server();

app.use(cors());

app.use(bodyParser.json());


app.get("/data", getToDo);

app.post("/create-new-task", createNewToDo);

app.put("/update-task", updateToDo);

app.delete("/delete-task", deleteToDo);

app.get("/overview", (request, response) => {
    return response.send("Hi, Its About Me");
});


app.listen(4000, () => {
    console.log("Server Started on port 4000");
});