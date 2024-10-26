const greeting = document.getElementById("greeting");

greeting.style.textAlign = "center";
greeting.style.marginTop = "50px";
greeting.style.fontSize = "50px";
greeting.style.color = "#3a3139";

const username = window.prompt("What's your name?", "Jane");

greeting.innerHTML = "Welcome to my website, " + username + "!";
