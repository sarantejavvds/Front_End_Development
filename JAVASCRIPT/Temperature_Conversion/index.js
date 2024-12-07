
const  input_Box = document.getElementById("text_Box");

const Convert_to_Fahrenheit = document.getElementById("To_Fahrenheit");

const Convert_to_Celcius = document.getElementById("To_Celcius");

const Result = document.getElementById("result");

let Temperature;

function convert()
{
    if(Convert_to_Fahrenheit.checked)
    {
        Temperature = Number(input_Box.value);

        Temperature = (Temperature * 9 / 5) + 32;

        Result.textContent = Temperature + "\u00B0F";
    }
    else if(Convert_to_Celcius.checked)
    {
        Temperature = Number(input_Box.value);
    
        Temperature = (Temperature - 32) * 5 / 9;
    
        Result.textContent = Temperature + "\u00B0C";
    }
    else
    {
        Result.textContent = "Select any Unit";
    }
}