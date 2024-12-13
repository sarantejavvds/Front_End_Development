
function update_Clock()
{
    const present_time = new Date();

    let hours = present_time.getHours();
    const meridiam = (hours >= 12) ? "PM" : "AM";

    const minutes = present_time.getMinutes().toString().padStart(2,0);

    const seconds = present_time.getSeconds().toString().padStart(2,0);

    hours = hours % 12 || 12;

    hours = hours.toString().padStart(2,0);

    const Clock_Time = `${hours} : ${minutes} : ${seconds} ${meridiam}`;

    const date = present_time.getDate();

    const month = present_time.getMonth() + 1;

    const year = present_time.getFullYear();

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const day_of_WEEK = days[present_time.getDay()];

    const Clock_Date = `${date} - ${month} - ${year}  ${day_of_WEEK}`;

    document.getElementById("clock_date").textContent = Clock_Date;

    document.getElementById("clock_time").textContent = Clock_Time;
}


update_Clock();

setInterval(update_Clock, 1000);
