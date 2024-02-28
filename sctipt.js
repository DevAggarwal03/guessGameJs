const RNum = Math.floor(Math.random() * 100) + 1;
const num = document.getElementById("num");
let submit = document.getElementById("submit");
let guesses = document.getElementById("guesses")
let hint = document.getElementById("hint")
let guess = 0;
let GNum;
let running = true;

console.log(RNum);

submit.onclick = function () {
    GNum = num.value;
    GNum = parseInt(GNum);
    if (isNaN(GNum)) {
        hint.textContent = `Enter a Valid Number`;
        console.log(GNum)
    }
    else if (GNum > 100 || GNum <= 0) {
        hint.textContent = `Enter a Valid Number`;
        console.log(GNum)
    }
    else {
        if (GNum > RNum) {
            hint.textContent = `Go lower`;
            guess += 1;
            guesses.textContent = guess;
            console.log(GNum)
        }
        else if (GNum < RNum) {
            hint.textContent = `Go higher`;
            guess += 1;
            guesses.textContent = guess;
            console.log(GNum)
        }
        else {
            hint.textContent = `Congratulations you compleated the game in ${guess} guesses`;
            console.log(GNum)
            running = false;
        }
    }
}
