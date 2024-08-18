let cards = document.getElementsByClassName('cards');
let box = document.getElementsByClassName('box');
let stop_btn = document.getElementById('Stop');
let content  = document.getElementsByClassName('content');
let t2d = document.getElementById("2d");
let range_in = document.getElementsByClassName("range");




// mouse track : on x-axis event.ClientX
                //  on Y-axis event.ClientY

// function moveX(event){
//     let y = event.clientY
//     let x = event.clientX
//     let u = 68;
//     prg[0].addEventListener('mousedown',function(){
//         let v = circle[0].getBoundingClientRect().x;
//         circle[0].style.transform = `translateX(${((x-v)/356)*100}px)`; 
//         circle[0].style.transitionDuration= '200ms'
//         box[0].style.transform = `rotateY(${x-u}deg)`
//     });
//     console.log(`value of x${x} and Y${y}`);
// }

function arrange(a){
    cards[0].style.transform = `translateZ(${a})`;
    cards[0].style.transitionDuration= '2s';
    cards[1].style.transform = `translateZ(-${a})`;
    cards[1].style.transitionDuration= '2s';
    cards[2].style.right = a;
    cards[2].style.transform = 'rotateY(-90deg) rotateX(0deg)';
    cards[2].style.transitionDuration= '2s';
    cards[3].style.left = a;
    cards[3].style.transform = 'rotateY(90deg) rotateX(0deg)';
    cards[3].style.transitionDuration= '2s';
    cards[4].style.bottom = a;
    cards[4].style.transform = 'rotateX(-90deg) rotateX(0deg)';
    cards[4].style.transitionDuration= '2s';
    cards[5].style.top = a;
    cards[5].style.transform = 'rotateX(90deg) rotateX(0deg)';
    cards[5].style.transitionDuration= '2s';
    
}

// function dearrange(){
//     if(cards[2].style.right == '125px'){
//         arrange('250px');
//     }
//     for(let a = 0; a<6;a++){
//         cards[a].style.transform = 'rotate(0deg)';
//     }
//     if(box[0].style.transform=='rotateY(20deg)'){
//         box[0].style.transform = 'rotateY(360deg)';
//         box[0].style.transitionDuration= '2s';
//     }
// }

function stop(){
    if(box[0].style.animationIterationCount != '0'){
        box[0].style.animationIterationCount = '0';
        stop_btn.textContent = "Start"
        
    }else{
        box[0].style.animationIterationCount ='infinite';
        stop_btn.textContent = "Stop"
    }
}
    

function Two_D(){

    if(box[0].style.transformStyle != "flat"){
        t2d.textContent = "2D";
        box[0].style.transformStyle = "flat"
    }
    else{
        t2d.textContent = "3D";
        box[0].style.transformStyle = "preserve-3d";
    }
}

function move(){
    box[0].style.transform = `rotateX(${range_in[1].value}deg) rotateY(${range_in[0].value}deg) rotateZ(${range_in[2].value}deg)` 
    box[0].style.transitionDuration= '100ms';
}
// function move_hz()
// function bar(){
    
// }