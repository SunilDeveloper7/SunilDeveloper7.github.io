//constant
//Game logic variable & state
//Dom reference
// Function and game Logic
//Event listner

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let speed = 7;

let tileCount = 40
let tileSize =canvas.width / tileCount - 2;
let headX =10;
let headY = 10;


function drawGame() {
    // console.log('draw game');
    clearScreen();
    drawSnake();
    setTimeout(drawGame,1000/speed);
}

function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawSnake() {
    ctx.fillStyle ='green'
    ctx.fillRect(headX * tileCount,headY* tileCount,tileSize,tileSize)
}


drawGame();





















// const box = 25;
// const canvasSize = 23;


// canvas.width = 1000;
// canvas.height = 600;



// // My obstracal for snake
// ctx.fillStyle = 'red'
// ctx.fillRect(700,60,50,200);
// ctx.fillRect(200,200,50,300);
// ctx.fillRect(400,60,100,50);
// ctx.fillRect(800,450,50,50);
// ctx.fillRect(500,350,50,200);
// ctx.fillRect(0,300,50,100);
// ctx.fillRect(500,60,50,200);




