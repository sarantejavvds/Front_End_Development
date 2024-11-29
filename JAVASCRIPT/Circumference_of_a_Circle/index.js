const PI=3.14159;

let radius, circumference;

document.getElementById("my_submit").onclick = function()
{
    radius=document.getElementById("my_Text").value;

    radius = Number(radius);

    circumference = 2 * PI * radius;

    document.getElementById("my_H3").textContent = `Circumference of Circle is ${circumference}`+"cm";
}