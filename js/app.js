console.log('Project 1')

function hello() {
    let playerName=prompt("Please enter your name")
    playerName=playerName[0].toUpperCase() + playerName.substring(1)
    if (playerName != null) {
        document.querySelector('.player').innerText = playerName +"'s "
    }
}
//--------------------------------------------------------------







//--------------------------------------------------------------


let grass =document.getElementById('grass')
let sun =document.getElementById('sun')
let cloud1 =document.getElementById('cloud1')
let cloud2 =document.getElementById('cloud2')
let cloud3 =document.getElementById('cloud3')
let cloud4 =document.getElementById('cloud4')
// let character =document.getElementById('char')
let character = document.querySelector('#char')
let happy =document.getElementById('happy')
let cool =document.getElementById('cool')
let silly =document.getElementById('silly')
let obstacle1 =document.getElementById('obstacle1')
let fire2 =document.getElementById('obstacle2')
let plant =document.getElementById('obstacle3')
let play1 = document.getElementById('startButton1')
let play2 = document.getElementById('startButton2')
let play3 = document.getElementById('startButton3')
let h1=document.querySelector('h1')
let p=document.querySelector('p')
let end = document.getElementById('end')
let h2 = document.querySelector('h2')
let score=document.querySelector('.score')
let happyBottom = parseInt(window.getComputedStyle(happy).getPropertyValue("bottom"));    //getting the style of happy emoji with getComputedStyle and bottom location of the happy emoji using getPropertyValue
let happyLeft = parseInt(window.getComputedStyle(happy).getPropertyValue("right"));    //getting the style of happy emoji with getComputedStyle and right location of the happy emoji using getPropertyValue
let happyWidth = parseInt(window.getComputedStyle(happy).getPropertyValue("width"));    //getting the style of happy emoji with getComputedStyle and width location of the happy emoji using getPropertyValue
let obstacle1Bottom =parseInt(window.getComputedStyle(obstacle1).getPropertyValue("bottom"));
let obstacle1Left =parseInt(window.getComputedStyle(obstacle1).getPropertyValue("left"));
let obstacle1Width =parseInt(window.getComputedStyle(obstacle1).getPropertyValue("width"));
let obstacle1Height =parseInt(window.getComputedStyle(obstacle1).getPropertyValue("height"));
let time = document. getElementById('timer');


//--------------------------------------------------------------

function startGame() {
    sun.style.display='inline';
    cloud1.style.display='inline';
    cloud2.style.display='inline';
    cloud3.style.display='inline';
    cloud4.style.display='inline';
    obstacle1.style.display='inline';
    fire2.style.display='inline';
    plant.style.display='inline';
    grass.style.display='inline';
    p.style.display='inline';
    h1.style.display='none';
    p.style.display='inline';
    document.body.style.backgroundImage='none';
    document.body.style.backgroundColor='rgb(17, 144, 195)';
    play1.remove()
    play2.remove()
    play3.remove()
    character.style.display='inline';
    happy.style.display='none';
    silly.style.display='none';
    cool.style.display='none';
    Emoji.scoreResult()
    hello()
    Emoji.timing()
    // jump()
}

play1.addEventListener('click', startGame)
play2.addEventListener('click', startGame)
play3.addEventListener('click', startGame)


const changeEmojiToCool = () => {
    character.src='pictures/cool.png'
}
const changeEmojiToSilly = () => {
    character.src='pictures/silly.png'
    character.style.height='120px'
    character.style.width='120px'
    character.style.bottom='90px'
}
const changeEmojiToHappy= () => {
    character.src='pictures/happy.png'
}

 play1.addEventListener('click', changeEmojiToSilly)
 play2.addEventListener('click', changeEmojiToHappy)
 play3.addEventListener('click', changeEmojiToCool)

//--------------------------------------------------------------
class Game {
    constructor(timer, score, ) {
        this.timer=timer
        this.score=0
    }
    timing() {
    let sec=0;
    let timer = setInterval(()=> {
        time.innerHTML = '00:'+sec;
        sec++;
    },1000)
    }
    scoreResult() {
        setInterval(() => {
            this.score++
document.querySelector('.score').innerHTML = this.score
        },300)
    
    }
}

const Emoji = new Game ('Jumping Emoji')

function jump() {
    character.classList.add('jump');
    setTimeout(() => {
        character.classList.remove('jump');
    },500);
}

document.addEventListener('keypress',() => {
    if (!character.classList.contains('jump')) {
jump();
    }
})



// let alive = setInterval(() => {
// if (obstacle1Left>100) {
//     console.log('game over')

// }
    // let obstacle1Left = parseInt(window.getComputedStyle(obstacle1).getPropertyValue("left"));
    // console.log(obstacle1Left)
    // if (obstacle1Left < 100) {
    //     obstacle1.style.display = 'none';
    // } else {
    //     obstacle1.style.display = '';
    // }
    // let fire2Left = parseInt(window.getComputedStyle(fire2).getPropertyValue('left'));
    // let plantLeft = parseInt(window.getComputedStyle(plant).getPropertyValue('left'));


    // if (happyLeft>=obstacle1Right - happyWidth && happyLeft <= obstacle1Right + obstacle1Width && happyBottom <= obstacle1Bottom + obstacle1Height) {
    //     alert("game over");
    // }
    //   alert("game over");

// },20);


// document.addEventListener('click', function (event) {
//     jump();
// });



// function gameOver() {
//     end.style.display='inline';
//     h2.style.display='inline';
//     obstacle1.remove()
//     fire2.remove()
//     plant.remove()
//     grass.remove()
//     sun.remove()
//     cloud1.remove()
//     cloud2.remove()
//     cloud3.remove()
//     cloud4.remove()
//     score.style.position='absolute';
//     score.style.bottom='100px';
//     document.querySelector('.player').innerText = playerName +"'s "
//     Emoji.scoreResult()
//     Emoji.timing()
//     location.reload()
    
//     // document.body.style.opacity=0.5;
// }





