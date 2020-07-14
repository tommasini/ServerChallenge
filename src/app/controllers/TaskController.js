import Joi from "@hapi/joi";
import Boom from "boom";
import Task from "../models/Task";

class TaskCrontroller {
  async store(req, res) {
    const schema = Joi.object({
      description: Joi.string(),
    });

    const payload = req.payload;
    console.log(payload);
    const { description } = req.payload;

    const task = await Task.query().insert({
      description: description,
    });

    console.log(task);

    return task;
  }

  async update(req, res) {
    const schema = Joi.object({
      state: Joi.boolean(),
      description: Joi.string(),
    });

    const id = req.params.id;

    const task = await Task.query().findById(id);

    if (!task) {
      return Boom.notFound("The task is undefined");
    }

    if (task.state) {
      return Boom.badRequest("The task is already completed");
    }

    let { description, state } = req.payload;

    if (!state) {
      state = task.state;
    }

    if (!description) {
      descritpion = task.description;
    }

    const taskUpdate = await Task.query().findById(id).patch({
      state: state,
      description: description,
    });

    const taskUpdated = await Task.query().findById(id);

    console.log(taskUpdated);

    return taskUpdated;
  }

  async index(req, res) {
    const { filter, orderBy } = req.query;

    if (filter == "COMPLETED" && !orderBy) {
      const tasks = await Task.query().select("tasks.*").where("state", true);
      return tasks;
    } else if (filter == "INCOMPLETED" && !orderBy) {
      const tasks = await Task.query().select("tasks.*").where("state", false);
      return tasks;
    } else if (!filter && orderBy == "DESCRIPTION") {
      const tasks = await Task.query().select("tasks.*").orderBy("description");
      return tasks;
    } else if (!filter && orderBy == "DATE_ADDED") {
      const tasks = await Task.query().select("tasks.*").orderBy("created_at");
      return tasks;
    } else if (filter == "COMPLETED" && orderBy == "DESCRIPTION") {
      const tasks = await Task.query()
        .select("tasks.*")
        .where("state", true)
        .orderBy("description");
      return tasks;
    } else if (filter == "INCOMPLETED" && orderBy == "DESCRIPTION") {
      const tasks = await Task.query()
        .select("tasks.*")
        .where("state", false)
        .orderBy("description");
      return tasks;
    } else if (filter == "COMPLETED" && orderBy == "DATE_ADDED") {
      const tasks = await Task.query()
        .select("tasks.*")
        .where("state", true)
        .orderBy("created_at");
      return tasks;
    } else if (filter == "INCOMPLETED" && orderBy == "DATE_ADDED") {
      const tasks = await Task.query()
        .select("tasks.*")
        .where("state", false)
        .orderBy("created_at");
      return tasks;
    } else if (filter == "ALL" && !orderBy) {
      const tasks = await Task.query().select("tasks.*");
      return tasks;
    } else if (filter == "ALL" && orderBy == "DESCRIPTION") {
      const tasks = await Task.query().select("tasks.*").orderBy("description");
      return tasks;
    } else if (filter == "ALL" && orderBy == "DATE_ADDED") {
      const tasks = await Task.query().select("tasks.*").orderBy("created_at");
      return tasks;
    } else {
      const tasks = await Task.query().select("tasks.*").orderBy("created_at");
      return tasks;
    }
  }
}

export default new TaskCrontroller();
