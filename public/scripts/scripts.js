let User = {};

function adjustDate(date_str) {
    return new Date(date_str).toLocaleDateString();
}

$.ajax({
    url: '/history',
    complete: function (data) {
        console.log(data);
        User = JSON.parse(data.responseText);
    }
});