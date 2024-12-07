const minimum_Number = 1;

const maximum_Number = 100;

const answer = Math.floor(Math.random() * (maximum_Number - minimum_Number + 1)) + minimum_Number;

let running=true, attempts=0, guess;

let anstext = document.getElementById("Answer_text");

while(running)
{
    guess = window.prompt(`Guess a number between ${minimum_Number} to ${maximum_Number}`);

    guess = Number(guess);

    if(isNaN(guess))
    {
        window.alert("Please enter a valid Number");
    }
    else if((guess < minimum_Number)  ||  (guess > maximum_Number))
    {
        window.alert("Please enter a valid Number");
    }
    else
    {
        attempts++;

        if(guess < answer)
        {
            window.alert("LOWER THAN ACTUAL ANSWER");
        }
        else if(guess > answer)
        {
            window.alert("HIGHER THAN ACTUAL ANSWER");
        }
        else
        {
            window.alert(`YOU ARE CORRECT !!! The Answer is ${answer}, It took you ${attempts} Attempts`);

            running = false;
        }
    }
}

anstext.textContent = `The Right Answer is ${answer}, within the attempts of ${attempts}`;