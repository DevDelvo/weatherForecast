export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getDate = (year, month, day) => {
    if (!year && !month && !day) {
        const date = new Date();
        const day = days[date.getDay()];
        const month = months[date.getMonth()];
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${day}, ${month} ${date.getDate()} ${hours}:${minutes}`; 
    } else {
        return;
    }
}