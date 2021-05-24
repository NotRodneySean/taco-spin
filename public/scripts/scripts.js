let User = {};

function displayPastWinners(totals) {
    totals = User.totals_list;
    let content = $("#winningHistory tbody");
    for (let i = 0; i < totals.length; i++) {
        content.append('<tr>' + '<td>' + totals[i].name + '</td>' + '<td>' + totals[i].guess + '</td>' + '<td>' + totals[i].spin_count + '</td>' + '<td>' + totals[i].date_won + '</td>' + '</tr>');
    }
}

$.ajax({
    url: '/history',
    complete: function (data) {
        console.log(data);
        User = JSON.parse(data.responseText);
        displayPastWinners(User.totals);
    }
});

