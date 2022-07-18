
const Router = require('koa-router');
const router = new Router({ prefix: '/tasks' });
const db = [{title:"transfer 100RMB", due:"21/08/2019"}];
const {
  find, findById, findByDue, create, update, delete: del,
} = require('../controllers/tasks');


router.get('/', find);
router.post('/', create);
router.get('/due/today', findByDue);
router.put('/:id/update', update);
router.delete('/:id', del);

module.exports = router;
