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
let p=document.querySelector('p')

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
    p.style.display='inline';
    startBox.style.display='none';
    h1.style.display='none';
    document.body.style.backgroundImage='none';
    document.body.style.backgroundColor='rgb(17, 144, 195)';
    play.remove()
    Emoji.scoreResult()

}

play.addEventListener('click', startGame)

//--------------------------------------------------------------
class Game {
    constructor(timer, score, jump) {
        this.timer=0
        this.score=0
        this.jump=0
    }
    scoreResult() {
        setInterval(() => {
            this.score++
document.querySelector('.score').innerHTML = this.score
        },900)
    }
}

const Emoji = new Game ('Jumping Emoji')




function gameOver() {
    fire1.remove()
    fire2.remove()
    plant.remove()
    grass.remove()
    sun.remove()
    cloud1.remove()
    cloud2.remove()
    cloud3.remove()
    cloud4.remove()
}

