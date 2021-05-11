// Get date display information
var DateToDisplay = (function () {
    var date = new Date();

    function day() {
        var obj = date.getDate(),
            suffix = ['st', 'nd', 'rd', 'th'];
        switch (date.getDate()) {
            case 1:
            case 21:
            case 31:
                return obj + suffix[0];
                break;
            case 2:
            case 22:
                return obj + suffix[1];
                break;
            case 3:
            case 23:
                return obj + suffix[2];
            default:
                return obj + suffix[3];
        }
    }

    function year() {
        return date.getFullYear();
    }

    function month() {
        var obj = date.getMonth(),
            current,
            names = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ];
        names.forEach(function (e, i) {
            if (i == obj) {
                current = e;
            }
        });
        return current;
    }

    function today() {
        var space = ' ',
            comma = ',';
        return month() + space + day() + comma + space + year();
    }

    function displayActiveSpinning() {
        var time = date.getHours();

        if(time < 14 && time > 16) {
            $(".active-spinning").toggleClass('toggle-content');
        }
    }

    return {
        today: today,
        active: displayActiveSpinning
    };

})();
