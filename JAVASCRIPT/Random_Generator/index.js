const Roll_Button = document.getElementById("my_Button");

const Display_Button_1 = document.getElementById("my_Label1");

const Display_Button_2 = document.getElementById("my_Label2");

const Display_Button_3 = document.getElementById("my_Label3");

const min=1, max=6;

let random_Number1, random_Number2, random_Number3;

Roll_Button.onclick = function()
{
    random_Number1 = Math.floor(Math.random() * max) + min;
    random_Number2 = Math.floor(Math.random() * max) + min;
    random_Number3 = Math.floor(Math.random() * max) + min;

    Display_Button_1.textContent = random_Number1;

    Display_Button_2.textContent = random_Number2;

    Display_Button_3.textContent = random_Number3;

}