let cobrabuttonEl = document.querySelector('.Cobra');
let rattlebutton1El = document.querySelector('.rattle');

console.log(cobrabuttonEl);

cobrabuttonEl.addEventListener('click',function(e) {
    localStorage.setItem('img','img.png/cobra.jpeg');

    
})
// console.log('hello');

rattlebutton1El.addEventListener('click',function() {
    localStorage.setItem('img','img.png/Rattlesnake.jpg');
})




// let statusEl =document.querySelector('.status')
// let status01El = document.querySelector('.status1')

// statusEl.addEventListener('click',function(e) {
//     localStorage.setItem('title', 'Cobra is Playing....');
// })

// status01El.addEventListener('click',function() {
//     localStorage.setItem('title','rattle is playing now...')
// })