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
    method: "PUT",
    path: "/task",
    handler: TaskController.store,
  },
  {
    method: "PATCH",
    path: "/task/{id}",
    handler: TaskController.update,
  },
  {
    method: "GET",
    path: "/task",
    handler: TaskController.index,
  }, 
  {
    method: "DELETE",
    path: "/task/{id}",
    handler: TaskController.delete,
  },
];
