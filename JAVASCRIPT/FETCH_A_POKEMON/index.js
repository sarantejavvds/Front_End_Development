

async function fetchData()
{

    try
    {
        const pokemon_Name = document.getElementById("pokemon_Name").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_Name}`);

        if(!response.ok)
        {
            throw new Error("Couldn't Fetch Resource");
        }

        const data = await response.json();

        const pokemonSprite = data.sprites.front_default;

        const image_Element =  document.getElementById("pokemonSprite");

        image_Element.src = pokemonSprite;

        image_Element.style.display = "block";

    }
    catch(error)
    {
        console.error(error);
    }

}
