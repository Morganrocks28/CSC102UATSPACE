//for the assignment, we need a timer to count down from 50 to 0 by 5 sec increments and show "blastOff at 0"
//for my example we are going to count down from 20 to 0 sec by 2 sec increments and show "blastOff at 0"
function blastOffTimer() {
    console.log("blastOffTimer() started");
    var currTime = 50;
    var i = 5;
    var timeMult = 500;
    document.getElementById("blastOffText").innerHTML = currTime;
    console.log(currTime)
    currTime = currTime - i;

    setTimeout(function(){
        console.log(currTime);
        if(currTime == 5) {
            document.getElementById("blastOffText").innerHTML =" Almost there, 5 sec left";
        } else if(currTime == 10){
            document.getElementById("blastOffText").innerHTML =" Kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, timeMult)


    setTimeout(function(){
        console.log(currTime);
        if(currTime == 5) {
            document.getElementById("blastOffText").innerHTML =" Almost there, 5 sec left";
        } else if(currTime == 10){
            document.getElementById("blastOffText").innerHTML =" Kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 2 * timeMult)

    setTimeout(function(){
        console.log(currTime);
        if(currTime == 5) {
            document.getElementById("blastOffText").innerHTML =" Almost there, 5 sec left";
        } else if(currTime == 10){
            document.getElementById("blastOffText").innerHTML =" Kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 3 * timeMult)

    setTimeout(function(){
        console.log(currTime);
        if(currTime == 5) {
            document.getElementById("blastOffText").innerHTML =" Almost there, 5 sec left";
        } else if(currTime == 10){
            document.getElementById("blastOffText").innerHTML =" Kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 4 * timeMult)

    setTimeout(function(){
        console.log(currTime);
        if(currTime == 5) {
            document.getElementById("blastOffText").innerHTML =" Almost there, 5 sec left";
        } else if(currTime == 10){
            document.getElementById("blastOffText").innerHTML =" Kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 5 * timeMult)

    setTimeout(function(){
        console.log(currTime);
        if(currTime == 5) {
            document.getElementById("blastOffText").innerHTML =" Almost there, 5 sec left";
        } else if(currTime == 10){
            document.getElementById("blastOffText").innerHTML =" Kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 6 * timeMult)

    setTimeout(function(){
        console.log(currTime);
        if(currTime == 5) {
            document.getElementById("blastOffText").innerHTML =" Almost there, 5 sec left";
        } else if(currTime == 10){
            document.getElementById("blastOffText").innerHTML =" Kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 7 * timeMult)

    setTimeout(function(){
        console.log(currTime);
        if(currTime == 5) {
            document.getElementById("blastOffText").innerHTML =" Almost there, 5 sec left";
        } else if(currTime == 10){
            document.getElementById("blastOffText").innerHTML =" Kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 8 * timeMult)

    setTimeout(function(){
        console.log(currTime);
        if(currTime == 5) {
            document.getElementById("blastOffText").innerHTML =" Almost there, 5 sec left";
        } else if(currTime == 10){
            document.getElementById("blastOffText").innerHTML =" Kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 9 * timeMult)

    setTimeout(function(){
        console.log(currTime);
        if(currTime == 5) {
            document.getElementById("blastOffText").innerHTML =" Almost there, 5 sec left";
        } else if(currTime == 10){
            document.getElementById("blastOffText").innerHTML =" Kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = "BlastOff!";
        }
        currTime = currTime - i;
    }, 10 * timeMult)
    
}

function betterCtDown () {
    console.log("testCtDown() started");
    currTime = 50;
    for(var i = 0; i <= 10; i++) {
        console.log(i);
        setTimeout(function(){
            document.getElementById("blastOffText").innerHTML = currTime;
            if(currTime == 0) {
                document.getElementById("blastOffText").innerHTML = "Blast Off";
            }
            currTime = currTime - 5;
        }, 5000 * i)
    }
}

function test() {
    console.log("test() started");
    var i = 0;
    currTime = 50;
    while(i <= 10) {
        console.log(i);
        setTimeout(function(){
            document.getElementById("blastOffText").innerHTML = currTime;
            if(currTime == 0) {
                document.getElementById("blastOffText").innerHTML = "Blast Off";
            }
            currTime = currTime - 5;
        }, 5000 * i)
        i = i + 1;
    }
}

function playCraps() {
    // Tells the log that playCraps has started
    console.log("playCraps() started...");
    // Gives die1 a random number between 0 and 6
    var die1 = Math.ceil (6 * Math.random());
    // Gives the result of die1 on the page
    document.getElementById("die1Res").innerHTML = die1;
     // Gives die2 a random number between 0 and 6
    var die2 = Math.ceil(6 * Math.random());
     // Adding the two dice roll numbers together
     var sum = die1 + die2;
     //  Gives the result of die2 on the page
     document.getElementById("die2Res").innerHTML = die2;
     // Tells the console the sum of the 2 dice rolls
     console.log("The sum of the two dice roll is: " + sum);
     //  Gives the result of die1 plus die2 on the page
     document.getElementById("sumRes").innerHTML = sum;
     //If statement is saying if sum equals 7 or 11, you lose
     if(sum == 7 || sum == 11) {
    //Displays on the page if sum equals 7 or 11, you lose
        document.getElementById("crapsRes").innerHTML = "Craps, you lose!!";
    // Else If statement is saying if die 1 and 2 are doubles less than 7, you win
     } else if(die1 == die2 && die1 % 2 == 0) {
    //Displays on the page if die 1 and 2 are doubles less than 7, you win
        document.getElementById("crapsRes").innerHTML = "Doubles, you win!!!"; 
     //Else statement is saying if it is any other number combo, you tie
     } else {
    //Displays on the page if it is any other number combo, you tie
        document.getElementById("crapsRes").innerHTML = "Tie, please try again."; 
     }
}