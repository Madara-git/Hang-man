let letters = "qwertyuiopasdfghjklzxcvbnm";
let lettersContainer = document.querySelector(".letters");
let category = document.querySelector(".category span");
let letterGuess = document.querySelector(".letters-guss");
let lettertsArray = Array.from(letters);
const words = {
  programming: ["php", "javascript", "go", "scala", "r", "mysql", "python"],
  movies: [
    "Inception",
    "Matrix",
    "Avatar",
    "Titanic",
    "Interstellar",
    "Gladiator",
  ],
  people: ["Bob", "Michael", "Sarah", "Emma", "John", "Alice"],
  countries: ["USA", "Japan", "Germany", "Brazil", "Canada", "Australia"],
};
let allKeys = Object.keys(words);
let randomPro = Math.floor(Math.random() * allKeys.length);
let randomProName = allKeys[randomPro];
let randomProValue = words[randomProName];
let radonValueNumber = Math.floor(Math.random() * randomProValue.length);
let randomWord = randomProValue[radonValueNumber].toLowerCase();
category.innerHTML = `${randomProName}`;
let arrayOfTheWord = Array.from(randomWord);

function initLetters() {
  lettertsArray.forEach((letter) => {
    let span = document.createElement("span");
    span.className = "letter-box";
    let text = document.createTextNode(letter);
    span.appendChild(text);
    lettersContainer.appendChild(span);
  });
}
initLetters();

function RandomWordInPlace() {
  arrayOfTheWord.forEach((value) => {
    console.log(value);
    let span = document.createElement("span");
    //   if (value === " ") {
    //     span.className = "with-space";
    //   }
    letterGuess.appendChild(span);
  });
}
RandomWordInPlace();

let arrayone = document.querySelectorAll(".letters .letter-box");
let spanShow = document.querySelectorAll(".letters-guss span");
let wrongAttemps = 0;
let theDraw = document.querySelector(".hangman-draw");

letterGuess.classList.add("finished");

document.addEventListener("click", (e) => {
  let theStatus = false;

  if (e.target.classList.contains("letter-box")) {
    e.target.classList.add("clicked");
    let pressedValue = e.target.innerHTML.toLowerCase();
    arrayOfTheWord.forEach((char, index1) => {
      if (pressedValue === char) {
        theStatus = true;
        spanShow.forEach((span, index) => {
          if (index === index1) {
            span.innerHTML = char;
            span.classList.add("clicked");
          }
        });
      }
    });
    playSount(theStatus);
    if (wrongAttemps === 8) {
      losingWinning();
      arrayone.forEach((e) => {
        e.classList.add("finished");
      });
    }
  }
});
function playSount(Status) {
  if (Status) {
    document.getElementById("win").play();
    winiing();
  }
  if (!Status) {
    document.getElementById("lose").play();
    wrongAttemps++;
    theDraw.classList.add(`wrong-${wrongAttemps}`);
  }
}
function winiing() {
  const ArSpsan = Array.from(spanShow);
  const vlaue = ArSpsan.every((span) => span.classList.contains("clicked"));
  if (vlaue) {
    losingWinning(vlaue);
    arrayone.forEach((ar) => ar.classList.add("finished"));
  }
}
function losingWinning(vlaue) {
  let div = document.createElement("div");
  div.classList.add("message");
  let text = document.createTextNode(
    ` ${vlaue ? `You Won The Word Is` : `Game Over The Word Is`} ${randomWord}`
  );
  div.appendChild(text);
  document.querySelector(".container").appendChild(div);
}
