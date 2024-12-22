
const  weather_form = document.querySelector(".weather_form")

const city_Input = document.querySelector("city_Input");

const card = document.querySelector("card");

const api_Key = "f5d4465e3693ef3b74a8115785519b8a";

weather_form.addEventListener("submit", async event => {
                                                           event.preventDefault();

                                                           const city = city_Input.value;

                                                           if(city)
                                                           {
                                                              try
                                                              {
                                                                 const weather_data = await getWeatherData(city);

                                                                 displayWeatherInfo(weather_data);
                                                              }
                                                              catch(error)
                                                              {
                                                                console.error(error);

                                                                displayError(error);
                                                              }
                                                           }
                                                           else
                                                           {
                                                            displayError("Please Enter a City");
                                                           }

                                                        });

function displayError(message)
{
    const Error_Display = document.createElement("p");

    Error_Display.textContent = message;

    Error_Display.classList.add("Error_Display");

    card.textContent = "";

    card.style.display = "flex";

    card.appendChild(Error_Display);
}

async function getWeatherData(city)
{
    const api_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}`;    

    const response = await fetch(api_URL);

    if(!response.ok)
    {
        throw new Error("No Data Found");
    }

    return await response.json();
}

function displayWeatherInfo(data)
{
    const {name:city, main:{temp, humidity}, weather:[{description, id}]} = data;

    card.textContent = "";

    card.style.display = "flex";

    const city_Display = document.createElement("h1");

    const temperature_Display = document.createElement("p");

    const humidity_Display = document.createElement("p");

    const description_Display = document.createElement("p");

    const weather_Emoji = document.createElement("p");

    city_Display.textContent = city;

    city_Display.classList.add("city_Display");

    card.appendChild(city_Display);


    temperature_Display.textContent = `Temperature : ${(temp - 273.15).toFixed(1)}°C`;

    temperature_Display.classList.add("temperature_Display");

    card.appendChild(temperature_Display);


    humidity_Display.textContent = `Humidity : ${humidity}`;

    humidity_Display.classList.add("humidity_Display");

    card.appendChild(humidity_Display);


    description_Display.textContent = description;

    description_Display.classList.add("description_Display");

    card.appendChild(description_Display);


    weather_Emoji.textContent = getWeatherEmoji(id);

    weather_Emoji.classList.add("weather_Emoji");

    card.appendChild(weather_Emoji);
}

function getWeatherEmoji(weather_ID)
{

    switch(true)
    {
        case ((weather_ID >= 200) && (weather_ID < 300)) : return "⛈"; //break;

        case ((weather_ID >= 300) && (weather_ID < 400)) : return "🌧"; //break;

        case ((weather_ID >= 500) && (weather_ID < 600)) : return "⛈"; 
                                                           //break;

        case ((weather_ID >= 600) && (weather_ID < 700)) : return "❄"; 
                                                          // break;

        case ((weather_ID >= 700) && (weather_ID < 800)) : return "🌫"; 
       // break;

        case ((weather_ID === 800)) : return "☀"; 
                                     // break;

        case ((weather_ID >= 801) && (weather_ID < 810)) : return "☁"; 
                                                          // break;

        default: return "❓";
    }
}