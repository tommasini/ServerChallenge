import TaskController from "./app/controllers/TaskController";
import Joi from "@hapi/joi";

module.exports = [
  {
    method: "GET",
    path: "/",
    handler: function (req, res) {
      return "Hello Lisgo";
    },
  },
  {
    method: "PUT",
    path: "/task",
    handler: TaskController.store,
    config: {
      description: "Returns a task",
      validate: {
        failAction: async (request, h, err) => {
          if (process.env.NODE_ENV === "production") {
            // In prod, log a limited error message and throw the default Bad Request error.
            console.error("ValidationError:", err.message); // Better to use an actual logger here.
            throw Boom.badRequest(`Invalid request payload input`);
          } else {
            // During development, log and respond with the full error.
            console.error(err);
            throw err;
          }
        },
      
      },
    },
  },

  {
    method: "PATCH",
    path: "/task/{id}",
    handler: TaskController.update,
    config: {
      description: "Returns a task",
      validate: {
        failAction: async (request, h, err) => {
          if (process.env.NODE_ENV === "production") {
            // In prod, log a limited error message and throw the default Bad Request error.
            console.error("ValidationError:", err.message); // Better to use an actual logger here.
            throw Boom.badRequest(`Invalid request payload input`);
          } else {
            // During development, log and respond with the full error.
            console.error(err);
            throw err;
          }
        },
      
      },
    },
  },
  {
    method: "GET",
    path: "/task",
    handler: TaskController.index,
    config: {
      description: "Returns a task",
      validate: {
        failAction: async (request, h, err) => {
          if (process.env.NODE_ENV === "production") {
            // In prod, log a limited error message and throw the default Bad Request error.
            console.error("ValidationError:", err.message); // Better to use an actual logger here.
            throw Boom.badRequest(`Invalid request payload input`);
          } else {
            // During development, log and respond with the full error.
            console.error(err);
            throw err;
          }
        },
      
      },
    },
  },
  {
    method: "DELETE",
    path: "/task/{id}",
    handler: TaskController.delete,
    config: {
      description: "Returns a task",
      validate: {
        failAction: async (request, h, err) => {
          if (process.env.NODE_ENV === "production") {
            // In prod, log a limited error message and throw the default Bad Request error.
            console.error("ValidationError:", err.message); // Better to use an actual logger here.
            throw Boom.badRequest(`Invalid request payload input`);
          } else {
            // During development, log and respond with the full error.
            console.error(err);
            throw err;
          }
        },
      
      },
    },
  },
];
