var door_1=document.getElementById('door1');

var door_2=document.getElementById('door2');

var door_3=document.getElementById('door3');

var robot_path="./assets/robot.svg"

var beachPath="./assests/beach.svg"

var spacePath="./assets/space.svg"

door_1.onclick=()=>{
    door_1.src=robot_path
}

door_2.onclick=()=>{
    door_2.src=beachPath
}

door_3.onclick=()=>{
    door_3.src=spacePath
}

