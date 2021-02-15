// let statusEl =document.querySelector('.status')

// statusEl.addEventListener('click',function(e) {
//     localStorage.setItem('status', '.status');
// })


let img0 = document.querySelector('.img');

let imgPath  = localStorage.getItem('img');
// console.log(imgPath);

img0.setAttribute('src', imgPath); 



// let title0 = document.querySelector('.title');

// let titlePath = localStorage.getItem('title');

// title0.setAttribute('src',titlePath);








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
// let eatSound;
// let collisionSound 
let snake =null;
let apple =null;
let newSp =null;
let newSnake =[];
let tailLength = 0;




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


class Snakepart{
	constructor(x,y,color){
		this.x = x;
		this.y = y;
		this.color = color;
		// this.color =color
	}
	render() {
		ctx.fillStyle = 'red';
		for(let i=0; i<snakeParts.length; i++) {
			let part =snakeParts[i];
			ctx.fillRect(part.x * tileCount, part.y *tileCount,tileSize,tileSize);
			// ctx.fillStyle = 'red';
			
			
		}
		snakeParts.push(new Snakepart(snake.x,snake.y))
		if(snakeParts.length > tailLength) {
			snakeParts.shift();
		}
	}
}



function drawGame() {
    if(gameOver === false) {
        clearScreen();
        apple.render();
        snake.render();
        newSp.render();
        checkAppleCollision();
        checkWallCollision()
    }
    drawScore()
    checkForGameOver()
    // handleReset()
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
        tailLength++;

        // console.log('collision');
        apple.x =Math.floor(Math.random() * tileSize);
        apple.y =Math.floor(Math.random() * tileSize);
        // snake.grow();
        
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
            ctx.fillStyle = "green";
            ctx.font = "25px Adorn serif";
            ctx.fillText("Game is Over you hit LEFT wall", canvas.width /6.5, canvas.height / 2);
            ctx.fillText(`Your Score is ${score}`, canvas.width /4, canvas.height / 1.5);
            
        
        }else if(snake.x > tileCount + 2){
            gameOver = true;
            ctx.fillStyle = "Red";
            ctx.font = "25px Adorn serif";
            ctx.fillText("Game is Over you hit the RIGHT wall", canvas.width /6.5, canvas.height / 2);
            ctx.fillText(`Your Score is ${score}` , canvas.width /4, canvas.height / 1.5);
            
            
        }else if(snake.y <0){
            gameOver = true;
            ctx.fillStyle = "Red";
            ctx.font = "25px Adorn serif";
            ctx.fillText("Game is Over you hit the TOP wall", canvas.width /6.5, canvas.height / 2);
            ctx.fillText(`Your Score is ${score}`, canvas.width /4, canvas.height / 1.5);
        
            

        }else if(snake.y >tileCount - 14){
            gameOver = true;
            ctx.fillStyle = "Red";
            ctx.font = "25px Adorn serif";
            ctx.fillText("Game is Over you hit the BOTTOM wall", canvas.width /6.5, canvas.height / 2);
            ctx.fillText(`Your Score is ${score}` , canvas.width /4, canvas.height / 1.5);
            

        }else if(snakeParts.x === snake.x && snakeParts.y == snake.y) {
            gameOver = true;
            ctx.fillStyle = "Red";
            ctx.font = "25px Adorn serif";
            ctx.fillText("Game is Over you hit your self", canvas.width /6.5, canvas.height / 2);
            ctx.fillText(`Your Score is ${score}` , canvas.width /4, canvas.height / 1.5);
        
        } else if(gameOver === true) {
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
            ctx.fillText(`Your Score is ${score}`, canvas.width /3, canvas.height / 1.5);

        }else if(score === 5){
            ctx.fillStyle = "blue";
            ctx.font = "60px georgia ";

            var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop("0", " magenta");
            gradient.addColorStop("0.5", "blue");
            gradient.addColorStop("1.0", "red");
            // Fill with gradient
            ctx.fillStyle = gradient;
        
            ctx.fillText("Congrats", canvas.width /3, canvas.height / 2);
            ctx.fillText(`Your Score is ${score}. Great Hit the highest score` , canvas.width /4, canvas.height / 1.5);
        

            
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


    // else if(score === 6 ){
    //     speed = 6;
    // }
    // else if(score === 7 ){
    //     speed = 7;
    // }
    // else if(score === 8 ){
    //     speed = 8;
    // }
    // else if(score === 9 ){
    //     speed = 9;
    // }
    // else if(score === 10 ){
    //     speed = 10;
    // }
    // else (checkWallCollision === snake){
    //     gameOver =true;
    // }


    ctx.fillStyle = "white";
    ctx.font = "10px Verdana"
    ctx.fillText("Score " + score, canvas.width-50, 10);


    snake.render() === false;


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
function init() {
    gameOver = false;
    score =0;
    snakeParts=[];
    snake = new Snake(5,5,'green');
    apple = new Apple(10,10,'pink');
    newSp = new Snakepart(5,5,'red');
    console.log('init');
}







//event listeners
btns.addEventListener('click', init);














init();
drawGame();
