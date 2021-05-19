const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

// Build pipeline
const app = express();

// Route modules
const tacoStatic = require('./routes/taco-static');
const indexStatic = require('./routes/index');
const userJson = require('./routes/users');

app.set('title', 'Taco Spin');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Form input
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static Content
app.use(express.static(path.join(__dirname, 'public')));

// Application Routes
app.use('/', indexStatic);
app.use('/history', userJson);
app.use('/taco-static', tacoStatic);

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