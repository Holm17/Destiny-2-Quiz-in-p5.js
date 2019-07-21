let Hunter, Warlock, Titan;
let answer, answerButton, Text, D2HelpPicture;
let wpt;
let score = 0;
let wrongs = 0;
let finalanswer;
let whatClass = [1, 2, 3];
let hunter = [2, 3];
let warlock = [1, 3];
let titan = [1, 2];
let gameOver = 0;
function setup() {
// Loads all the images
  Hunter =loadImage("Hunter.jpg");
  Warlock = loadImage("Warlock.jpg");
  Titan = loadImage("Titan.jpg");
  D2HelpPicture = loadImage("Destiny2QuizHelp.png");

  createCanvas(800, 600);
// Answer button
  answer = createInput();
  answer.position(320, 100);
  answerButton = createButton("Answer");
  answerButton.position(answer.x  + answer.width, 100);
  answerButton.mousePressed(answered);
    
// Help checkbox
  helpMode = createCheckbox("HELP", false);
  helpMode.position(5, 15);
  helpMode.changed(helpOrNot);
  
// The first picture
  wpt = random(whatClass);
  
// The what class do you see text
  overBoxText = createElement("h2", "What class do you see?");
  overBoxText.position(320, 40); 
  answerText = createElement("h1");
  answerText.position(340, 170);
  
}

// Help button check or uncheck
function helpOrNot() {
    
  }

// The final answer
  function answered() {
    const finalAnswer = answer.value();
    // answerText.html(finalAnswer + " is");
    
// Checks if the answer matches with the showed destiny class
    if (wpt === 1) {
      if (answer.value() === "hunter") {
        score = score + 1;
        wpt = random(hunter);
        answer.value(""); 
        return draw();
         } else if (answer.value() !== "hunter") {
         wpt = random(hunter);
         wrongs = wrongs + 1;
         answer.value(""); 
         return draw();
        } 
      }
    
     if (wpt === 2) {
      if (answer.value() === "warlock") {
        score = score + 1;
        wpt = random(warlock);
        answer.value(""); 
        return draw();
      } else if (answer.value() !== "warlock") {
        wpt = random(warlock);
        wrongs = wrongs + 1;
        answer.value(""); 
        return draw();
        }
      }
      
    if (wpt === 3) {
      if (answer.value() === "titan") {
        score = score + 1;
        wpt = random(titan);
        answer.value(""); 
        return draw(); 
      } else if (answer.value() !== "titan") {
        wpt = random(titan);
        wrongs = wrongs + 1;
        answer.value(""); 
        return draw();
        }
      }   
    
// Reset answer 
  answer.value("");   
}
function draw() {
  background(111, 111);
  
  if (wrongs >= 3) {
    gameOver = gameOver + 1;
    textSize(50);
    clear();
    background(111);
    fill(255, 0, 0, 255);
    text("Game Over", 290, 250);
    return null;
  }  if (gameOver != 1) {

// Score
  textSize(20);
  text("score  =", 370, 200);
  text(score, 448, 200);
  textSize(12);
// Wrongs
  textSize(18);
  text("Wrongs:      out of 3", 343, 230);
  text(wrongs, 420, 230);
  textSize(12);
// Only write in small letters!
  fill(0, 0, 0, 100);
  text("Note that  your answers", 670, 17);
  text("only work if all you write", 670, 28);
  text("is in small letters!", 670, 39);
  fill(0, 0, 0, 0);
  rect(665, 1, 134, 42.5);
  fill(0);

// Check what picture to show
  if (wpt === 1) {  
    image(Hunter, 50, 300, 200, 200);
  }
  if (wpt === 2) {
    image(Warlock, 300, 300, 200, 200);
  }
  if (wpt === 3) {
    image(Titan, 550, 300, 200, 200);
  }
  if (score >= 5) {
   textSize(20);
   fill(0, 255, 0, 255);
   text("congratulations you won", 319, 260);
   fill(0);
   textSize(12);
  }
  
  // View the help picture
  if (this.helpMode.checked()) {  
    clear();
    background(111, 111);
    image(D2HelpPicture, 0, 0, 800, 600);
    }
  }
}
