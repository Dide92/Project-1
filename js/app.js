console.log('Project 1')


let grass =document.getElementById('grass')
let sun =document.getElementById('sun')
let cloud1 =document.getElementById('cloud1')
let cloud2 =document.getElementById('cloud2')
let cloud3 =document.getElementById('cloud3')
let cloud4 =document.getElementById('cloud4')
let happy =document.getElementById('happy')
let fire1 =document.getElementById('obstacle1')
let fire2 =document.getElementById('obstacle2')
let plant =document.getElementById('obstacle3')
let play = document.getElementById('startButton')
let startBox =document.getElementById('startBox')
let h1=document.querySelector('h1')


// background-image: ;
// background-repeat: no-repeat;
// background-color: rgb(182, 226, 244);

//--------------------------------------------------------------



function startGame() {
    sun.style.display='inline';
    cloud1.style.display='inline';
    cloud2.style.display='inline';
    cloud3.style.display='inline';
    cloud4.style.display='inline';
    happy.style.display='inline';
    fire1.style.display='inline';
    fire2.style.display='inline';
    plant.style.display='inline';
    grass.style.display='inline';
    startBox.style.display='none';
    h1.style.display='none';
    document.body.style.backgroundImage='none';
    document.body.style.backgroundColor='rgb(17, 144, 195)';

    play.remove()
   

}

play.addEventListener('click', startGame)

// function GameOver() {
//     fire1.remove()
//     fire2.remove()

// }

