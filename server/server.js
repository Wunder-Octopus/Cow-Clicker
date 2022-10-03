const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api.js');

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//app.use(cookieParser());

// app.use('/build', express.static(path.join(__dirname, '../client/build')));  

app.use('/api', apiRouter);


//express error handler, receives (err) and console.logs/sends the error
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj);
  return res.status(errorObj.status).json(errorObj.message);
});



//404 route handler, for pages that dont exist, i.e. cowclicker.com/JohnCena
app.use((req, res) => res.status(404).send('A classic error, totally unknown!'));


app.listen(3000);

module.exports = app;