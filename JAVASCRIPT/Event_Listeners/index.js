
const Box1 = document.getElementById("Box1");

Box1.addEventListener("click", function Change_Color(event)
{
    event.target.style.backgroundColor = "tomato";

    event.target.textContent = "AHH !! 💀";

});

Box1.addEventListener("mouseover", event => {
                                              event.target.style.backgroundColor = "yellow";

                                              event.target.textContent = "Don't do it !!! 😖";
                                            });

Box1.addEventListener("mouseout", event => {
                                              event.target.style.backgroundColor = "lightgreen";

                                              event.target.textContent = "Click Me 😀";
                                            });

const movespeed = 10;

let x = 0, y = 0;

document.addEventListener("keydown", event => {
                                               if(event.key.startsWith("Arrow"))
                                               {
                                                event.preventDefault();

                                                switch(event.key)
                                                {
                                                    case "ArrowUp" : y -= movespeed;
                                                                     break;

                                                    case "ArrowDown" : y += movespeed;
                                                                       break;

                                                    case "ArrowLeft" : x -= movespeed;
                                                                       break;

                                                    case "ArrowRight" : x += movespeed;
                                                                        break;
                                                }

                                                Box1.style.top = `${y}px`;

                                                Box1.style.left = `${x}px`;
                                               }
                                              });
