const Tasks = require('../models/tasks');
var date = require("silly-datetime");
const { logger } = require('../utils/logger');

class TasksCtl {
  async find(ctx) {
      logger.info("List the tasks: "+ JSON.stringify(Tasks));
      ctx.body = Tasks;

  }
  async findByDue(ctx) {

    var today = date.format(new Date(),'DD/MM/YYYY').toLocaleString();
    const results = Tasks.filter(item => item.due == today);
    if(results.length!=0){
      logger.info("List the tasks due today: "+ JSON.stringify(results));
      ctx.body = results;
    }else{
      ctx.throw(404, 'Task not exis.');
    }

  }

  async update(ctx) {
    ctx.verifyParams({
      title: { type: 'string', required: true },
      due: { type: 'string', required: true },
    });
    logger.info("Update the task from "+ JSON.stringify(Tasks[ctx.params.id * 1])+" to "+ JSON.stringify(ctx.request.body));
    Tasks[ctx.params.id * 1] = ctx.request.body;
    ctx.body = ctx.request.body;
  }

  async create(ctx) {
    ctx.verifyParams({
      title: { type: 'string', required: true },
      due: { type: 'string', required: true },
    });
    logger.info("Add new task: "+ JSON.stringify(ctx.request.body));
    Tasks.push(ctx.request.body);
    ctx.body = ctx.request.body;
  }
  async delete(ctx) {
    logger.info("Deleted task: "+ JSON.stringify(Tasks[ctx.params.id * 1]));
    Tasks.splice(ctx.params.id * 1,1);
    ctx.status = 204;
  }

}

module.exports = new TasksCtl();
