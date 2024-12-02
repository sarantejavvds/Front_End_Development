const Display_Text = document.getElementById("my_Text");

const Submit_Button_1 = document.getElementById("my_Submit_1");

const Result = document.getElementById("result_Element");

Submit_Button_1.onclick = function()
{
    let age = 0;

    age = Display_Text.value;

    age = Number(age);

    if(age < 0)
    {
        Result.textContent = `Your age can't be Below ZERO`;
    }
    else if(age == 0)
    {
        Result.textContent = `Your can't enter, You are still Baby`;
    }
    else if(age < 18  && age > 0)
    {
        Result.textContent = `You Can't Enter this Site`;
    }
    else if(age >= 18  && age <= 100)
    {
        Result.textContent = `You Can Enter this Site`;
    }
    else if(age > 100)
    {
        Result.textContent = `You are too OLD to Enter This site.`;
    }
}

const Check_Box = document.getElementById("my_Checkbox");

const VISA = document.getElementById("visa_Button");

const MasterCard = document.getElementById("master_card_Button");

const Paypal = document.getElementById("paypal_Button");

const Submit_Button_2 = document.getElementById("my_Submit_2");

const SubResult = document.getElementById("sub_result");

const Payment_Result = document.getElementById("payment_result");

Submit_Button_2.onclick = function()
{
    if(Check_Box.checked)
    {
        SubResult.textContent = 'You chose to Subscribed';
    }
    else
    {
        SubResult.textContent = 'You chose to Not Subscribe';
    }

    if(VISA.checked)
    {
        Payment_Result.textContent = 'You are Paying with VISA';
    }
    else if(MasterCard.checked)
    {
        Payment_Result.textContent = 'You are Paying with MasterCard';
    }
    else if(Paypal.checked)
    {
        Payment_Result.textContent = 'You are Paying with Paypal';
    }
    else
    {
        Payment_Result.textContent = `You must select a Payment`;
    }
}