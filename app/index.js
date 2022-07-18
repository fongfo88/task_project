
const Koa = require('koa');
const koaBody = require('koa-body');
const parameter = require('koa-parameter');
const bodyparser = require('koa-bodyparser');
const path = require('path');
const app = new Koa();
const routing = require('./routes');
const { accessLogger, logger } = require('./utils/logger');

app.use(accessLogger());
app.use(parameter(app));
app.use(bodyparser());

routing(app);

app.listen(3000, () => console.log('Service is running in port 3000'));
