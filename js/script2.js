




var btns = document.createElement("BUTTON");   // Create a <button> element
btns.classList.add("btn2");  // Add a highlight class
btns.innerHTML = "Reset";                   // Insert text
document.body.appendChild(btns);               // Append <button> to <body>







const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let speed = 10;
let tileCount = 30
let tileSize =canvas.width / tileCount - 2;
const initialSnakeX =10;
const initialSnakeY = 10;
const initialAppleX = 5;
const initialAppleY = 5;
let xVelocity = 0;
let yVelocity =0;
let score =0;
let snakeNewLength = [];



class Snake {
    constructor(x,y,color){
        this.x =x;
        this.y =y;
        this.xVelocity = 0;
        this.yVelocity = 0;
        this.color=color;

    }
    render() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x * tileCount,this.y* tileCount,tileSize,tileSize);
        this.x = this.x + this.xVelocity;
    this.y = this.y + this.yVelocity;
    }
}
let snake = new Snake(15,15,'green');
console.log(snake);





class Apple {
    constructor(x,y,color) {
        this.x = x;
        this.y =y;
        this.color = color;
    
        
    }
    render() {
        ctx.fillStyle =this.color;
        ctx.fillRect(this.x*tileCount,this.y*tileCount,tileSize,tileSize)

    }
}
let apple = new Apple(10,10,'pink');
console.log(apple);






function drawGame() {
    
clearScreen();
apple.render();
snake.render();
checkAppleCollision();
drawScore()



setTimeout(drawGame,1000/speed);
}


function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}




function checkAppleCollision() {
    // console.log('x is:',snake.x,apple.x,'y is',snake.y,apple.y);
    if(apple.x === snake.x && apple.y == snake.y) {
        score +=1;
        snakeNewLength +=1;

        
        // console.log('collision');
        apple.x =Math.floor(Math.random() * tileCount);
        apple.y =Math.floor(Math.random() * tileCount);
    }

}

function drawScore(){


    
    if(score === 1 ){
        speed = 1;
        
    }
    else if(score === 2){
        speed = 2;
    }
    else if(score === 3 ){
        speed = 3;
    }
    else if(score === 4 ){
        speed = 4;
    }
    else if(score === 5 ){
        speed = 5;
    }
    else if(score === 6 ){
        speed = 6;
    }
    else if(score === 7 ){
        speed = 7;
    }
    else if(score === 8 ){
        speed = 8;
    }
    else if(score === 9 ){
        speed = 9;
    }
    else if(score === 10 ){
        speed = 10;
    }
    // else (checkWallCollision === snake){
    //     gameOver =true;
    // }


    ctx.fillStyle = "white";
    ctx.font = "10px Verdana"
    ctx.fillText("Score " + score, canvas.width-50, 10);


}










document.addEventListener('keydown', keyDown);

function keyDown(event) {
    //up
    console.log(snake);
    if(event.keyCode == 38) {
        if(snake.yVelocity == 1)
        return;
        snake.yVelocity = -1;
        snake.xVelocity = 0;
    }
    
//down
    if(event.keyCode == 40) {
        if(snake.yVelocity == -1)
        return;
        snake.yVelocity = 1;
        snake.xVelocity = 0;
    }
    //left
    if(event.keyCode == 37) {
        if(snake.xVelocity == 1)
        return;
        snake.yVelocity = 0;
        snake.xVelocity = -1;
    }
    //right
    if(event.keyCode == 39) {
        if(snake.xVelocity == -1)
        return;
        snake.yVelocity = 0;
        snake.xVelocity= 1;
    }
    // event listeners

}





function handleReset() {
    console.log('Reset the game');
}
    


// event listeners
btns.addEventListener('click', handleReset);


drawGame();
