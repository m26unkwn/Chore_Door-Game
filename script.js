let door_1=document.getElementById('door1');

let door_2=document.getElementById('door2');

let door_3=document.getElementById('door3');

let robot_path="./assets/robot.svg"

let beachPath="./assets/beach.svg"

let spacePath="./assets/space.svg"

let numClosedDoor=3

let openDoor0;
let openDoor1;
let openDoor2;

let startButton=document.getElementById('start')

let closedDoorPath="./assets/closed_door.svg"

const isClickd=(door)=>{
    if (door.src===closedDoorPath){
        return true
    }
    else{
        return false
    }

}

const playDoor=(door)=>{
    numClosedDoor--;
    if (numClosedDoor===0){
        gameOver()
    }
    else{
        gameOver()
    }
}

const randomDoorGenerator=()=>{

        let choreDoor = Math.floor(Math.random() * numClosedDoor);

        if (choreDoor === 0) {
                openDoor0 = robot_path;
                openDoor1 = beachPath;
                openDoor2 = spacePath;
              } else if (choreDoor === 1) {
                openDoor1 = robot_path;
                openDoor0 = beachPath;
                openDoor2 = spacePath;
              } else {
                openDoor2 = robot_path;
                openDoor0 = beachPath;
                openDoor1 = spacePath;
              }
}


door_1.onclick=()=>{
    if(!isClickd(door_1)){
    door_1.src=openDoor0
    playDoor(door_1)
    }
}

door_2.onclick=()=>{
    if(!isClickd(door_2)){
        door_2.src=openDoor0
        playDoor(door_2)
        }
}

door_3.onclick=()=>{
    if(!isClickd(door_3)){
        door_3.src=openDoor0
        playDoor(door_3)
        }
}

randomDoorGenerator()