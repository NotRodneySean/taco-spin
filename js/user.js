const User = (function() {

    let a = [];

    function user() {
        for(let i=0; i<users.length; i++) {
            let o = {};
            o.user_id = users[i].user_id;
            o.full_name = users[i].full_name;
            o.guess = "";
            o.history = [];
            a.push(o);
        }
    }

    function guess() {
        user();
        for(let i=0; i<a.length; i++) {
            for(let j=0; j<guesses.length; j++) {
                if(a[i].user_id === guesses[j].user_id) {
                    a[i].guess = guesses[j].value;
                }
            }
        }
    }

    function history() {
        guess();
        for(let i=0; i<totals.length; i++) {
            for(let j=0; j<a.length; j++) {
                let o = {};
                if(a[j].user_id === totals[i].user_id) {
                    o.date_won = totals[i].date_won;
                    o.guess = totals[i].guess;
                    o.total = totals[i].spin_count;
                    a[j].history.push(o);
                }
            }
        }
    }

    function init() {
        history();
    }

    return {
        a: a,
        init: init
    };

})();

User.init();

const Winners = (function() {
    
    let winners = [];
  
    function winningHistory() {
        let content = $("#winningHistory tbody");
        for(let i=0; i<totals.length; i++) {
            let arr = [
                totals[i].name,
                totals[i].guess,
                totals[i].spin_count,
                totals[i].date_won
            ];
            winners.push(arr);
            content.append('<tr>' + '<td>' + totals[i].name + '</td>' + '<td>' + totals[i].guess + '</td>' + '<td>' + totals[i].spin_count + '</td>' + '<td>' + totals[i].date_won + '</td>' + '</tr>');
        }
        console.log(winners);
    }
    
    return {
        history: winningHistory
    };

})();

Winners.history();