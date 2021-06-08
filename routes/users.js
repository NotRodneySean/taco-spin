const express = require('express');
const router = express.Router();
const services = require('../services/users');

// Routes
router.get('/', getAll);
router.post('/', addUser);

// GET
async function getAll(req, res, next) {
  try {
    res.json(await services.getMultiple(req.query));
  } catch(err) {
      console.error(`Error while getting users info `, err.message);
      next(err);
  }
}

// POST
async function addUser(req, res, next) {
  try {
    res.json(await services.create(req.body));
  } catch (err) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
}

/* PUT 
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await users.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
});
*/

/* DELETE 
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await users.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});
*/

module.exports = router;