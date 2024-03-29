// Chap 26

// Q1
// var number = Math.round(3.50);

// document.write(number)


// // Q2

// var origNum = 5.3
// var roundNum = Math.ceil(origNum);



// document.write(roundNum)

// // Q3

// var origNum1 = 7.7
// var roundNum1 = Math.floor(origNum1);

// document.write(roundNum1)

// // Q4

// var number1 = 67.85;

// var secVar = Math.round(number1)

// document.write(secVar)

// Q5

// var num = 0.5

// var roundedNumber = Math.floor(num)
// document.write(roundedNumber)


// var num = 0.4

// var roundedNumber = Math.round(num)
// document.write(roundedNumber)


// _______________________________

// Chap 27

// Q1

// var random = Math.floor(Math.random()*50) +1;

// console.log(random)

// // Q2

// var randomNumber = Math.random();

// Q3

// var dice = Math.floor( Math.random() * 6 )

// var diceRoll = Math.floor( Math.random() * 6 ) + 1;
// var diceRoll2 = Math.floor( Math.random() * 6 ) + 1;

// console.log(diceRoll)
// console.log(diceRoll2)


// // Q4

// var headUser = + prompt("Enter number")

// var tailUser = + prompt("Enter number")

// var toss = Math.random()*2;

// var convert = Math.floor(toss);

// if(convert === 0){
//     console.log(headUser +  " Win the toss")
// }else{
//     console.log(tailUser + " Win the toss")
// }



// // Chap 28-29

// // Q1

// var num1 = "1389"

// var result = parseInt(num1)

// console.log(result)

// // Q2

// var num2 = "123"
// var result2 = parseInt(num2)

// console.log(result2)

// // Q3

// var num3 = "43.876"

// var result3 = parseFloat(num3)

// console.log(result3)

// // Q5

// var num4 = 12390;
// console.log(num4.toString());


// // Q6

// var num5 = 42

// var result5 = String(num5);

// console.log(result5)


// // Q7

// var num6 = "3.14"

// var result6 = Number(num6)

// console.log(result6)


// _____________

// Chap 30

// Q1
// var number = 34.6789654

// var newNum = number.toFixed(4)

// console.log(newNum)

// Q2

// var number = 6.4987

// var result = parseFloat(number.toFixed(2))

// console.log(result)



// ____________________

// Chap 26-30

// Q1

var number2 = 3.45214;

document.write("number: " + number2);

var roundOff = Math.round(number2)

document.write(" <br> round off value : " + roundOff)

var floorValue = Math.floor(number2)

document.write(" <br> floor value : " + floorValue)

var ceilValue = Math.ceil(number2)

document.write(" <br> ceil value : " + ceilValue)

// Q2

var number3 = -2.673;

document.write("<br> <br> number: " + number3);

var roundOff = Math.round(number3)

document.write(" <br> round off value : " + roundOff)

var floorValue = Math.floor(number3)

document.write(" <br> floor value : " + floorValue)

var ceilValue = Math.ceil(number3)

document.write(" <br> ceil value : " + ceilValue)

// Q3




// Q4

var dice = Math.floor(Math.random()*6)+1;



console.log ("random dice value: "+ dice )

var dice2 = Math.floor(Math.random()*6)+1


console.log ("random dice value: "+ dice2)


// Q5


//  var headUser = + prompt("Enter number")

//  var tailUser = + prompt("Enter number")

//  var toss = Math.random()*2;

//  var convert = Math.floor(toss);

// if(convert === 0){
//     console.log(headUser +  " Win the toss")
// }else{
//     console.log(tailUser + " Win the toss")
// }

// Simulating a coin toss
// var head = prompt("Enter value")
// var tail = prompt("Enter value")
// var toss = Math.floor (Math.random()*2)

// // Displaying the result
// if (toss === 0 ) {
//     console.log("Heads");
// } else {
//     console.log("Tails");
// }



//Q6

var randomNum = Math.floor(Math.random()* 100);

console.log("random number between 1 and 100: " + randomNum )

// Q7

var userWeight = Number(prompt("Enter your weight in kilogram"))

// var weight = mat

document.write(" <br> Your weight is: "  + userWeight +" kilograms");

// Q8

var userGuess = parseInt( prompt("Enter a number between 1 & 10 "))

var secretNum = 7

if(userGuess === secretNum){
  alert("Congratulations")
}else{
  alert("Try again")
}
