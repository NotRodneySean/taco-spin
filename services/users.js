const db = require('./db');
const helper = require('../helper');

async function getMultiple() {
  const user_rows = await db.query(
    `SELECT * FROM users WHERE 1`, null
  );
  const guesses_rows = await db.query(
    `SELECT * FROM guess WHERE 1`, null
  );
  const totals_rows = await db.query(
    `SELECT * FROM totals WHERE 1`, null
  );
  const users = helper.emptyOrRows(user_rows);
  const guesses = helper.emptyOrRows(guesses_rows);
  const totals = helper.emptyOrRows(totals_rows);

  let totals_list = helper.formatWinningDate(totals);

  const info = helper.constructUserList(users, guesses, totals);

  return {
    info,
    users: users,
    totals: totals,
    guesses: guesses,
    totals_list
  };

}

async function getWinnerHistory() {
  const totals_rows = await db.query(
    `SELECT * FROM totals WHERE 1`, null
  );

  return { totals_rows };
}

async function create(user){
  const result = await db.query(
    `INSERT INTO users 
    (user_id, full_name) 
    VALUES 
    (?, ?)`, 
    [ user.user_id, user.full_name ]
  );

  let message = 'Error in creating user';

  if (result.affectedRows) {
    message = 'User created successfully';
  }

  return {
    message
  };
}

async function update(user_id, users) {
  const result = await db.query(
    `UPDATE users 
    SET full_name=? 
    WHERE user_id=?`, 
    [ users.full_name, users.user_id ]
  );

  let message = 'Error in updating user';

  if (result.affectedRows) {
    message = 'User updated successfully';
  }

  return {
    message
  };
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM users WHERE user_id=?`, 
    [id]
  );

  let message = 'Error in deleting user';

  if (result.affectedRows) {
    message = 'User deleted successfully';
  }

  return {
    message
  };
}

module.exports = {
  getMultiple,
  getWinnerHistory,
  create,
  update,
  remove
};