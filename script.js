 let door_1=document.getElementById('door1');

let door_2=document.getElementById('door2');

let door_3=document.getElementById('door3');

let robotPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spacePath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg"

let numClosedDoors=3;

let openDoor1;
let openDoor2;
let openDoor3;

let startButton=document.getElementById('start');

let currentPlaying= true;

let score = 0;
let highScore = 0;
let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');
currentStreak.innerHTML = score;
bestStreak.innerHTML = highScore;

function isClicked(door) {
    if (door.src == closedDoorPath) {
        return false;
    } else {
        return true;
    }
}
  


function isBot(door) {
    if (door.src === robotPath) {
        return true;
    }
    else {
        return false;
    }
}


function playDoor(door) {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    }
    else if (isBot(door)) {
        gameOver('lose');
    }
}



const randomDoorGenerator=()=>{

        let choreDoor = Math.floor(Math.random() * numClosedDoors);

        if (choreDoor === 0) {
                openDoor1 = robotPath;
                openDoor2 = beachPath;
                openDoor3 = spacePath;
              } else if (choreDoor === 1) {
                openDoor2 = robotPath;
                openDoor1 = beachPath;
                openDoor3 = spacePath;
              } else {
                openDoor3 = robotPath;
                openDoor1 = beachPath;
                openDoor2 = spacePath;
              }
}


door_1.onclick=()=>{
    if(currentPlaying ){
    door_1.src=openDoor1;
    playDoor(door_1);
    }
}

door_2.onclick=()=>{
    if(currentPlaying ){
        door_2.src=openDoor2;
        playDoor(door_2);
        }
}

door_3.onclick=()=>{
    if(currentPlaying && !isClicked(door_3)){
        door_3.src=openDoor3;
        playDoor(door_3);
    }
}

startButton.onclick = () => {
    startRound();
}


const gameOver=(status)=>{
    if (status==='win'){
    startButton.innerHTML="You win, Play Again!";
    getYourScore();
    }
    else {
        startButton.innerHTML="You lose, Play Again";
        score=0
        currentStreak.innerHTML = score;
    }
    currentPlaying=false;
}

const startRound=()=>{
  door_1.src = closedDoorPath;
  door_2.src = closedDoorPath;
  door_3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
  randomDoorGenerator();
}

const getYourScore = () => {
    score++;
    currentStreak.innerHTML = score;
    if (score > highScore) {
      highScore = score;
      bestStreak.innerHTML = highScore;
    }
  }

startRound();


