let User = {};
let total_wins = 0;

function displayPastWinners(totals) {
    let content = $("#winningHistory tbody");
    totals = User.totals_list;

    for (let i = 0; i < totals.length; i++) {
        content.append('<tr>' + '<td>' + totals[i].name + '</td>' + '<td>' + totals[i].guess + '</td>' + '<td>' + totals[i].spin_count + '</td>' + '<td>' + totals[i].date_won + '</td>' + '</tr>');
    }
}

$.ajax({
    url: '/users',
    complete: function (data) {
        User = JSON.parse(data.responseText);
        displayPastWinners(User.totals);
    }
});

// Form
$('input[type=submit]').click(function(e) {
    e.preventDefault();
    let data = {};

    data.full_name = $('input[type=text]').val();
    data.user_id = 9999;

    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: '/users',
        success: function(data) {
            console.log(JSON.stringify(data));
        }
    });

});