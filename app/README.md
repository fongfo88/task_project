# Task Preject RESTFul API

#### Description
This web service can support create, update, delete, retrieve Tasks
One Task inlcudes two parameter "title" and "due"
Can use postman to demo the use cases

#### Framework
koa2


#### Demo Steps

1.  install node environment
2.  run npm i to install the middlewares required
3.  run node app.js or npm start to start the service

#### API Description

1.  list all the tasks: get method - localhost:3000/tasks
2.  create the task: post method - localhost:3000/tasks
body example:
{
	"title":"coding",
	"due":"21/08/2022"
}
3.  update tasks: put method - localhost:3000/tasks/1/update
body example:
{
	"title":"coding",
	"due":"21/08/2022"
}
4.  delete tasks: delete method - localhost:3000/tasks/1
5.  list the tasks due today: get method - localhost:3000/tasks/due/today

#### Architechture

1.  index.js is the entrance file
2.  routes is the router to handle the APIs request url
3.  controllers is the functions for all the APIs
4.  models is the data layer
5.  log folder is for log records (access log file for api access logs; application log file for manual print logs)

#### Notes

1.  the port is 3000
2.  I use the array for the data resource, since it stores in the RAM, once the service restarts the data will be reset
