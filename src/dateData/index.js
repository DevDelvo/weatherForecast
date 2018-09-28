const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getDate = (dateString) => {
    if (!dateString) {
        const date = new Date();
        const day = days[date.getDay()];
        const month = months[date.getMonth()];
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${day}, ${month} ${date.getDate()} ${hours}:${minutes}`; 
    } else {
        const dateObj = {};
        const date = new Date(dateString);
        dateObj.day = days[date.getDay()];
        dateObj.month = months[date.getMonth()];
        if (date.getHours() < 10) {
            dateObj.hours = "0" + date.getHours();
        } else {
            dateObj.hours = date.getHours();
        }
        if (date.getMinutes() < 10) {
            dateObj.minutes = "0" + date.getMinutes();
        } else {
            dateObj.minutes = date.getMinutes();
        }
        return dateObj;
    }
}

export const getCelsius = (temp) => {
    return (temp - 32) * .5556;
}