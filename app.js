require('express-async-errors');
const express = require('express');
const morgan = require('morgan');
const notFoundMiddleware = require('./middleware/not-found');

const taskRouter = require('./routes/taskRoutes');


const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());





// 3) ROUTES
app.use('/api/v1/task',taskRouter);
app.use(notFoundMiddleware);

module.exports = app;
