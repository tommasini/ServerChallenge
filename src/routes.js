import TaskController from "./app/controllers/TaskController";

module.exports = [
  {
    method: "GET",
    path: "/",
    handler: function(req,res){
      return "Hello Lisgo"
    }
  },
  {
    method: "POST",
    path: "/task",
    handler: TaskController.store,
  },
  {
    method: "PUT",
    path: "/task/{id}",
    handler: TaskController.update,
  },
  {
    method: "GET",
    path: "/task",
    handler: TaskController.index,
  },
];
