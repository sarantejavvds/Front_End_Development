const Choices = ["rock", "paper", "scissors"];

let Player_score = 0, Opponent_AI_Score = 0;

const Player_Display = document.getElementById("Player_Display");

const Opponent_AI_Display = document.getElementById("Opponent_AI_Display");

const result_display = document.getElementById("result_display");

const Player_score_display = document.getElementById("Player_score_display");

const AI_score_display = document.getElementById("AI_score_display");

function Play_Game(player_Choice)
{
    const computer_Choice = Choices[Math.floor(Math.random() * 3)];

    let result = "";

    if(player_Choice === computer_Choice)
    {
        result = "It's a Tie !!!";
    }
    else
    {
        switch(player_Choice)
        {
            case "rock"     : result = (computer_Choice === "scissors") ? "YOU WIN !!!" : "YOU LOSE !!!"; 
                              break; 

            case "paper"    : result = (computer_Choice === "rock") ? "YOU WIN !!!" : "YOU LOSE !!!"; 
                              break;

            case "scissors" : result = (computer_Choice === "paper") ? "YOU WIN !!!" : "YOU LOSE !!!"; 
                              break;
        }
    }

    Player_Display.textContent = `PLAYER : ${player_Choice}`;

    Opponent_AI_Display.textContent = `Opponent_AI : ${computer_Choice}`;

    result_display.textContent = result;

    result_display.classList.remove("green_Text", "red_Text");

    switch(result)
    {
        case "YOU WIN !!!"  : result_display.classList.add("green_Text");
                              Player_score++;
                              Player_score_display.textContent = Player_score;
                              break;

        case "YOU LOSE !!!" : result_display.classList.add("red_Text");
                              Opponent_AI_Score++;
                              AI_score_display.textContent = Opponent_AI_Score;
                              break;

    }
    
}

