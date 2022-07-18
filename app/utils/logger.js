const path = require('path');
const log4js = require('koa-log4');
const RUNTIME_PATH = path.resolve(__dirname, '../');
const LOG_PATH = path.join(RUNTIME_PATH, 'log');
log4js.configure({

  appenders: {

    access: {

      type: 'dateFile',

      pattern: '-yyyy-MM-dd.log',

      alwaysIncludePattern: true,

      encoding: 'utf-8',

      filename: path.join(LOG_PATH, 'access.log')

    },

    application: {

      type: 'dateFile',

      pattern: '-yyyy-MM-dd.log',

      alwaysIncludePattern: true,

      encoding: 'utf-8',

      filename: path.join(LOG_PATH, 'application.log')

    },

    out: {

      type: 'console'

    }

  },

  categories: {

    default: { appenders: [ 'out' ], level: 'info' },

    access: { appenders: [ 'access' ], level: 'info' },

    application: { appenders: [ 'application' ], level: 'all'}

  }

});



exports.accessLogger = () => log4js.koaLogger(log4js.getLogger('access')); // log the access record

exports.logger = log4js.getLogger('application');
