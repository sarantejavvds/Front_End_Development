//const roll_Dice = () => 
function roll_Dice()
{
    const Dice_Count = document.getElementById("Number_of_Dice").value;

    const Dice_Result = document.getElementById("Dice_Result");

    const Dice_Images = document.getElementById("Dice_Images");

    const values = [];

    const images = [];

    for(let i=0 ; i < Dice_Count ; i++)
    {
        const value = Math.floor(Math.random() * 6) + 1;

        values.push(value);

        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    }

    Dice_Result.textContent = `dice : ${values.join(', ')}`;

    Dice_Images.innerHTML = images.join(``);
}