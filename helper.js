function emptyOrRows(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}

function adjustDate(date_str) {
    return new Date(date_str).toLocaleDateString();
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
                o.date_won = adjustDate(totals[i].date_won);
                o.guess = totals[i].guess;
                o.total = totals[i].spin_count;
                user_info[j].history.push(o);
                user_info[j].total_wins = user_info[j].history.length;
            }
        }
    }
}

function formatWinningDate(array) {
    for(let i=0; i<array.length; i++) {
        array[i].date_won = adjustDate(array[i].date_won);
    }
    const sortedArray = sortArrayByDate(array);
    return sortedArray;
}

function sortWinningHistory(array) {
    for(let i=0; i<array.length; i++) {
        array[i].history = sortArrayByDate(array[i].history);
    }
}

function sortArrayByDate(array) {
    return array.slice().sort((a, b) => new Date(b.date_won).getTime() - new Date(a.date_won).getTime());
}

function constructUserList(users, guesses, totals) {
    getUsers(users);
    getGuesses(guesses);
    getHistory(totals);
    sortWinningHistory(user_info);
    return user_info;
}

function getHighestUserId(users) {
    let ids = [];
    for (let i = 0; i < users.length; i++) {
        ids.push(users[i].user_id);
    }
    return Math.max(...ids) + 1;
}

module.exports = {
    emptyOrRows,
    formatWinningDate,
    getHighestUserId,
    constructUserList
};