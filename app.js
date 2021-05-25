const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

// Route modules
const indexStatic = require('./routes/index');
const userJson = require('./routes/users');

app.set('title', 'Taco Spin');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Static Content
app.use(express.static(path.join(__dirname, 'public')));

// Application Routes
app.use('/', indexStatic);
app.use('/history', userJson);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});

  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;