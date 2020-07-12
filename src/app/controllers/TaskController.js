import Joi from "@hapi/joi";
import Task from "../models/Task";

class TaskCrontroller {
  async store(req, res) {
    const schema = Joi.object({
      state: Joi.boolean(),
      description: Joi.string(),
    });

    const payload = req.payload;
    console.log(payload);
    const { state, description } = req.payload;

   
      const task = await Task.query().insert({
        state: state,
        description: description,
      });
   

    console.log(task);

    return task;
  }
}

export default new TaskCrontroller();
