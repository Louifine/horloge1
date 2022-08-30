document.getElementById('hour').addEventListener('click', event => {
    document.getElementById('heure').style.display = "flex";
    document.getElementById('guessGame').style.display = "none";
    document.getElementById('diceGamer').style.display = "none";
    document.getElementById('container').style.display = "none";
});
document.getElementById('gg').addEventListener('click', event => {
    document.getElementById('heure').style.display = "none";
    document.getElementById('guessGame').style.display = "flex";
    document.getElementById('diceGamer').style.display = "none";
    document.getElementById('container').style.display = "none";
});
document.getElementById('rollDice').addEventListener('click', event => {
    document.getElementById('heure').style.display = "none";
    document.getElementById('guessGame').style.display = "none";
    document.getElementById('diceGamer').style.display = "flex";
    document.getElementById('container').style.display = "none";
});
document.getElementById('carrous').addEventListener('click', event => {
    document.getElementById('heure').style.display = "none";
    document.getElementById('guessGame').style.display = "none";
    document.getElementById('diceGamer').style.display = "none";
    document.getElementById('container').style.display = "grid";
});