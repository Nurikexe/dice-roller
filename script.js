function roleDice(){
    const userInput = document.getElementById("userInput").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");

    const values = [];
    const images = [];

    for(let i = 0; i < userInput; i++){
        let random = Math.floor((Math.random() * 6) + 1);
        values.push(random);
        images.push(`<img src = "images/${random}.png">`);
    }
    diceResult.textContent = `Dice: ${values.join(", ")}`;
    diceImage.innerHTML = images.join(``);
}