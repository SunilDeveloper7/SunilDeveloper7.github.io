




var btns = document.createElement("BUTTON");   // Create a <button> element
btns.classList.add("btn2");  // Add a highlight class
btns.innerHTML = "Reset";                   // Insert text
document.body.appendChild(btns);               // Append <button> to <body>







const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let speed = 10;
let tileCount = 30
let tileSize =canvas.width / tileCount - 2;
const initialSnakeX =5;
const initialSnakeY = 5;
const initialAppleX = 5;
const initialAppleY = 5;
let xVelocity = 0;
let yVelocity =0;
let score =0;
let snakeParts =[];
let gameOver = false;
// const collisionSound = new Audio("gulp.mp3");





class Snake {
    constructor(x,y,color){
        this.x =x;
        this.y =y;
        this.xVelocity = 0;
        this.yVelocity = 0;
        this.color=color;
        this.width = tileSize;

    }
    render() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x * tileCount,this.y* tileCount,tileSize,tileSize);
        this.x = this.x + this.xVelocity;
        this.y = this.y + this.yVelocity;
    }
    grow() {
        // snakeParts.push(this.x,this.y,this.color,tileSize,tileSize);
        ctx.fillStyle =this.color;
        for(let i=0; i <snakeParts.length; i++) {
        ctx.fillRect(snakeParts[i].x * tileSize,snakeParts[i].y * tileSize,tileSize,tileSize);
            

        }
        // ctx.fillRect(this.x,this.y,tileSize,tileSize);
        
        
        snakeParts.push({x:this.x,y:this.y})
        
        // this.width += tileSize;
        

        // console.log(snakeParts);
    }
}
let snake = new Snake(5,5,'green');
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
    // let result = isGameOver();
    // if(result){
    //     return;
    // }
    // isGameOver()
    if(gameOver === false) {
        clearScreen();
        apple.render();
        snake.render();
        checkAppleCollision();
        checkWallCollision()
        // if(snake.xVelocity || snake.yVelocity) {
        //     for (let i=0; i < snakeParts.length; i++) {
        //         snakeParts[i].render();
        //         checkBodyCollision(snakeParts[i]);
        //     }
            

        // }
    }
    // snaketail()
    // advanceSnake()
    drawScore()
    checkForGameOver()
    



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

        // console.log('collision');
        apple.x =Math.floor(Math.random() * tileCount);
        apple.y =Math.floor(Math.random() * tileCount);
        snake.grow();
    }

}

function checkWallCollision() {
    // console.log(snake.y);
    if(snake.x < 0){
        console.log('you are outside the canvas');
    }else if(snake.x > tileCount + 2){
        console.log('you are outside the canvas RIGHT');
        
    }else if(snake.y <0){
        console.log('TOP Canvas');
    }else if(snake.y >tileCount - 14){
        console.log('BOTTOM CANVAS' );
    }
}


    
function checkBodyCollision(body) {
    if(snakeParts.x === snake.x && snakeParts.y == snake.y) {
        // alert('Game is Over');
        console.log('BODY COLLISION');

        console.log('collision');
    
    }

}


function checkForGameOver() {

        if(this.yVelocity ===0 && this.xVelocity ===0){
            return false;
        }
        
        if(snake.x < 0){
            gameOver = true;
            
        
        
        }else if(snake.x > tileCount + 2){
            gameOver = true;
            
        }else if(snake.y <0){
            gameOver = true;

        }else if(snake.y >tileCount - 14){
            gameOver = true;
        }else if(snakeParts.x === snake.x && snakeParts.y == snake.y) {
            gameOver = true;
    } 

        if(gameOver === true) {
        ctx.fillStyle = "white";
        ctx.font = "50px Verdana";

        if (gameOver === true) {
            ctx.fillStyle = "white";
            ctx.font = "50px Verdana";

}
            var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop("0", " magenta");
            gradient.addColorStop("0.5", "blue");
            gradient.addColorStop("1.0", "red");
            // Fill with gradient
            ctx.fillStyle = gradient;
        
            ctx.fillText("Game Over!", canvas.width /3, canvas.height / 2);
            ctx.fillText("You total score is" , canvas.width /3, canvas.height / 1.5);

        }else if(score === 10){
            ctx.fillStyle = "blue";
            ctx.font = "60px georgia ";

            var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop("0", " magenta");
            gradient.addColorStop("0.5", "blue");
            gradient.addColorStop("1.0", "red");
            // Fill with gradient
            ctx.fillStyle = gradient;
        
            ctx.fillText("Congrats", canvas.width /3, canvas.height / 2);
            ctx.fillText("You Hit The highest Score " , canvas.width /4, canvas.height / 1.5);
            checkForGameOver()

            
        }
    
        
    
    }















    
    
function drawScore(){

    if(score <= 3 ){
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
