
const my_button = document.getElementById("my_button");

const my_Image = document.getElementById("my_Image");

my_button.addEventListener("click", event => {
                                               if(my_Image.style.visibility == "hidden")
                                               {
                                                    my_Image.style.visibility = "visible";

                                                    my_button.textContent = "HIDE";
                                               }
                                               else
                                               {
                                                    my_Image.style.visibility = "hidden";

                                                    my_button.textContent = "SHOW";
                                               }
                                             });