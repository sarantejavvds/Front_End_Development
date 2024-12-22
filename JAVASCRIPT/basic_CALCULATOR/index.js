const display = document.getElementById("display");

function append_to_display(input)
{
    if(input === '+')
    {
        display.value += input;
    }
    else if(input === '-')
    {
        display.value -= input;
    }
    else if(input === '*')
    {
        display.value *= input;
    }
    else if(input === '/')
    {
        display.value /= input;
    }

    return input;
}

function clear_display()
{
    display.value = "";
}

function calculate()
{
    try
    {
        //let x = display.value;

        let y = eval(display.value);

        display.value = y;

        return y;
    }
    catch(error)
    {
        display.value = "Error";
    }
}

