function getShortMonth(month) {
    const desp = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return desp[month - 1];
}

export default function getDateTime(date) {
    date = new Date(date);

    let hour = date.getHours();
    let min = date.getMinutes();

    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDay();

    const now = new Date();
    if (now.getDay() === date.getDay()) {
        return hour + ":" + min;
    } else if (now.getDay() === date.getDay() + 1) {
        return 'Yesterday ' + hour + ":" + min;
    } else {
        return getShortMonth(month) + "," + day + ' ' + year + " " + hour + ":" + min;
    }
}
