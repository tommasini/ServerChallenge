import Joi from "@hapi/joi";
import { Model } from "objection";
import db from '../../database/knex';

Model.knex(db);

class Task extends Model {
  static get tableName() {
    return "tasks";
  }
   
  static get joiSchema() {
    return Joi.object({
      id: Joi.number().integer(),
      state: Joi.boolean,
      description: Joi.string(),
      created_at: Joi.date(),
    });
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }
}

export default Task;
