const dotenv = require('dotenv');
dotenv.config();
const express = require('express');

const morgan = require('morgan');
const app = express();

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
