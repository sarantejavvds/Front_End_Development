const display = document.getElementById("display");

let timer = null;

let start_Time = 0;

let elapsed_Time = 0;

let is_Running = false;

function update()
{
    const current_Time = Date.now();
    
    elapsed_Time = current_Time - start_Time;

    let hours = Math.floor(elapsed_Time / (1000 * 60 * 60));
    hours = String(hours).padStart(2, "0");

    let minutes = Math.floor(elapsed_Time / (1000 * 60) % 60);
    minutes = String(minutes).padStart(2, "0");

    let seconds = Math.floor(elapsed_Time / 1000 % 60);
    seconds = String(seconds).padStart(2, "0");

    let milliseconds = Math.floor(elapsed_Time % 1000 / 10);
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
}

function start()
{
    if(!is_Running)
    {
        start_Time = Date.now() - elapsed_Time;

        timer = setInterval(update, 10);

        is_Running = true;
    }
}

function stop()
{
    if(is_Running)
    {
        clearInterval(timer);

        elapsed_Time = Date.now() - start_Time;

        is_Running = false;
    }
}

function reset()
{
    clearInterval(timer);

    start_Time = 0;

    elapsed_Time = 0;

    is_Running = false;

    display.textContent = "00 : 00 : 00 : 00";
}