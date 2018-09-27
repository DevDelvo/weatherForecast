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
        const date = new Date(dateString);
        return;
    }
}