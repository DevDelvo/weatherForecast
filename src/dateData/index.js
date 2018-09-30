const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getDateFromString = (dateString) => {
    const date = new Date(dateString || Date.now());
    const dateObj = {
        day: days[date.getDay()],
        date: date.getDate().toString(),
        month: months[date.getMonth()],
        hours: militarizeTime(date.getHours()) ,
        minutes: militarizeTime(date.getMinutes()),
        year: date.getFullYear(),
    };
    return dateObj;
}

function militarizeTime(time) {
    return time < 10 ? '0' + time : time.toString();
}