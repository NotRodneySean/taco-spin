function emptyOrRows(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}

let user_info = [];

function getUsers(users) {
    for (let i = 0; i < users.length; i++) {
        let o = {};
        o.user_id = users[i].user_id;
        o.full_name = users[i].full_name;
        o.guess = "";
        o.history = [];
        user_info.push(o);
    }
}

function getGuesses(guesses) {
    for (let i = 0; i < user_info.length; i++) {
        for (let j = 0; j < guesses.length; j++) {
            if (user_info[i].user_id === guesses[j].user_id) {
                user_info[i].guess = guesses[j].value;
            }
        }
    }
}

function getHistory(totals) {
    for (let i = 0; i < totals.length; i++) {
        for (let j = 0; j < user_info.length; j++) {
            let o = {};
            if (user_info[j].user_id === totals[i].user_id) {
                o.date_won = totals[i].date_won;
                o.guess = totals[i].guess;
                o.total = totals[i].spin_count;
                user_info[j].history.push(o);
                user_info[j].total_wins = user_info[j].history.length;
            }
        }
    }
}

function init(users, guesses, totals) {
    getUsers(users);
    getGuesses(guesses);
    getHistory(totals);
    return user_info;
}

module.exports = {
    emptyOrRows,
    init
};