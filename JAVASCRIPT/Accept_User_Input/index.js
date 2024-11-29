let userName;

document.getElementById("my_submit").onclick = function(){
    
    userName = document.getElementById("my_text").value;

    document.getElementById("my_h1").textContent = `HELLO ${userName}`;
}

console.log(`Username is ${userName}`);