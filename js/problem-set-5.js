/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  while (true){ 
      height=prompt("Please enter an integer between 1 and 23");
      height=Number(height);
      if(height>=1 && height<=23 && Number.isInteger(height)){
        break;
    };
  }; 
    let c=1;
    let hashtag='#';
    let lines="<code>";
    let spaces=height-2;

    while (c<=height){
      let a='';
      for(let b=0;b<=spaces;b++) {
        a+='&nbsp;';
      }
      spaces--;
      hashtag=hashtag+'#';
      lines=lines+a+hashtag+"</br>";
      c++;
    }
    document.getElementById("mario-easy-output").innerHTML=lines;
    lines=lines+"</code>"

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  while (true){
      height=prompt("Please enter an integer between 1 and 23");
      height=Number(height);
    if(height>=1 && height<=23 && Number.isInteger(height)){
      break;
    };
  };
  let c=1;
  let hashtag='#';
  let lines="<code>";
  let spacesBefore=height-2;
  let spacesAfter='&nbsp'+'&nbsp';
  while (c<=height){
    let a='';
    for(let b=0;b<=spacesBefore;b++) {
      a+='&nbsp;';
    }
    spacesBefore--;
    hashtag=hashtag+'#';
    lines=lines+a+hashtag+spacesAfter+hashtag+"</br>";
    c++;
  }
  document.getElementById("mario-hard-output").innerHTML=lines;
  lines=lines+"</code>"

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  card=prompt("Enter a Credit Card Number");
  let p=document.getElementById("credit-output");
  let sum=0;
  let cardNumber;
    for(let a=card.length-2; a >= 0; a -= 2){
      if((Number(card[a]))*2 > 9){
        cardNumber = String(Number(card[a])*2);
        sum += Number(cardNumber[0]) + Number(cardNumber[1]);
      }else{
        sum += Number(card[a])*2;
      }
    }
    for(a=card.length-1; a >= 0; a -= 2){
      sum += Number(card[a]);
    }
  if(card.length == 15 && card[0] == "3" && card[1] == "4" && sum%10==0 || card.length == 15 && card[0] == "3" && card[1]=="7" && sum%10==0){
    p.innerHTML = "<img src='images/amex.png'>";
  }else if(card.length == 16 && card[0] == "5" && card[1]>="1" && card[1]<="5" && sum%10==0){
    p.innerHTML = "<img src='images/mastercard.png'>";
  }else if(card[0] == "4" && card.length == 13 && sum%10 == 0 || card[0] == "4" && card.length == 16 && sum % 10 == 0){
    p.innerHTML = "<img src='images/visa.png'>";
  }else{
    p.innerHTML = "<img src='images/invalid.png'>";
  }
  card = Number(card);

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  let answer = Math.floor((Math.random() * 1000) + 1);
  console.log(answer);

  let guess = prompt("Enter a guess of a random integer between 1 and 1000");

  let tries = 1;
  while (guess != answer) {
    if (guess > answer && guess > 0  && guess <= 1000 && Number.isInteger(Number(guess))) {
      guess = prompt("Your guess was too high. Try again.");
      tries++;
    } else if (guess < answer && guess > 0 && Number.isInteger(Number(guess))) {
      guess = prompt("Your guess was too low. Try again.");
      tries++;
    } 
  }
  if (guess == answer) {
    let correct = document.getElementById("guess-output");
    correct.innerHTML = "Correct Answer! It took you " + tries + " tries!";
  }

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() { 

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
  
  windspeed=Number(prompt('Enter the Windspeed'));
  if (windspeed>=157){
    document.getElementById('hurricane-output').innerHTML='Category 5 Hurricane.';
  }else if (windspeed>=130){
    document.getElementById('hurricane-output').innerHTML='Category 4 Hurricane.';
  }else if (windspeed>=111){
    document.getElementById('hurricane-output').innerHTML='Category 3 Hurricane.';
  }else if (windspeed>=96){
    document.getElementById('hurricane-output').innerHTML='Category 2 Hurricane.';
  }else if (windspeed>=74){
    document.getElementById('hurricane-output').innerHTML='Category 1 Hurricane.';
  }else if (windspeed>=39){
    document.getElementById('hurricane-output').innerHTML='Tropical Storm';
  }else if (windspeed<=38){
    document.getElementById('hurricane-output').innerHTML='The skies are calm...';
  }
  
  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY
  
  let score;
let total2=0;
let discarded = [];
let k;
let p = document.getElementById("gymnastics-output");
for(let i = 0; i<6; i++){
  k=0
  score = -1;
  while (score<0 || score>10 || score*10%1!=0){
    if(k==1){
    score=Number(prompt("Your last input was invalid. Choose a score from 0.0 to 10.0."));
  }else{
    score=Number(prompt("Choose a score from 0.0 to 10.0."));
  }
    k=1
  }
  scores.push(score);
}
for(let j = 0; j<6; j++){
  total+=scores[j];
}
total2=total;
discarded.push(Math.min(...scores));
total2-=Math.min(...scores);
discarded.push(Math.max(...scores));
total2-=Math.max(...scores);
let result = `Discarded: ${discarded[0]}, ${discarded[1]}<br/>Score: ${(total2/4).toFixed(2)}`;
p.innerHTML=result;
  
  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
