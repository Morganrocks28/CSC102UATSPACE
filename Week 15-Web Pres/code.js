//for the assignment, we need a timer to count down from 50 to 0 by 5 sec increments and show "blastOff at 0"
//for my example we are going to count down from 20 to 0 sec by 2 sec increments and show "blastOff at 0"

function start() {
    console.log("start() started");
    document.getElementById("data").rows["seconds"].innerHTMl = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    console.log("start button disabled");
    document.getElementById("stopButton").disabled = false;
    console.log("stop button enabled");
}

function stop() {
    console.log("stop() started");
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    console.log("start button enabled");
    document.getElementById("stopButton").disabled = true;
    console.log("stop button disabled");
}

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

function betterCtDown() {
    console.log("testCtDown() started"); 
    //variable to track time
    currTime = 50;
    //for loop to save typing 
    for(var i = 0; i <= 10; i++) {
        console.log(i);
        setTimeout(function(){
            if(currTime == 0) {
                //if we are done and need blastOff
                document.getElementById("blastOffText").innerHTML = "Blast Off";
            } else if(currTime < 25){
                //bc the admiral wants this 
                document.getElementById("blastOffText").innerHTML = 
                    "Warning Less than ½ way to launch, time left = " + currTime;
            } else {
                //everything else 
                document.getElementById("blastOffText").innerHTML = currTime;
            }
            // we are iterating by 5s
            currTime = currTime - 5;
            //5000 to wait 5 seconds between counts
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
    //document.getElementById("die1Res").innerHTML = die1;
     // Gives die2 a random number between 0 and 6
    var die2 = Math.ceil(6 * Math.random());
     // Adding the two dice roll numbers together
     console.log("die1 is " + die1);
     console.log("die2 is " + die2);
     var sum = die1 + die2;
     //  Gives the result of die2 on the page
     //document.getElementById("die2Res").innerHTML = die2;
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

function playStation() {
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
    setTimeout(function(){
        mySound.stop();
    }, 7500);
}



function sound (srcFile) {
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
}