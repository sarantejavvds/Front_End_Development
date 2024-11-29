const decrease_Button = document.getElementById("decrease_Button");
const reset_Button = document.getElementById("reset_Button");
const increase_Button = document.getElementById("increase_Button");

const count_Label = document.getElementById("count_Label");

let count=0;

increase_Button.onclick = function()
{
    count++;

    count_Label.textContent = count;
}

decrease_Button.onclick = function()
{
    count--;

    count_Label.textContent = count;
}

reset_Button.onclick = function()
{
    count=0;

    count_Label.textContent = count;
}