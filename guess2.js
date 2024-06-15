window.addEventListener('load', ()=>{
    in_put.focus();
    in_put.value = "";
})

let in_put = document.querySelector('.input'); // for the guess input 
let submit = document.querySelector('.submit'); //forthe submit

let p4 = document.querySelector('.p4');
let p5 = document.querySelector('.p5');
let p6 = document.querySelector('.p6');
let p33 = document.querySelector('.p33');
let p9 = document.querySelector('.p9');
let p10 = document.querySelector('.p10');
let p12 = document.querySelector('.p12');
let p13 = document.querySelector('.p13');
let p20 = document.querySelector('.p20');
let span3 = document.querySelector('.span3');
let control6 = document.querySelector('.control6');
let winaudio = new Audio("clapping.mp3"); // for the win audio
let lostaudio = new Audio("gameover.mp3"); // for the lost audio
let failaudio = new Audio('failaudio.mp3'); // for the fail audio

let control7 = document.querySelector('.control7');
let control8 = document.querySelector('.control8');
let control9 = document.querySelector('.control9');

let random_number = Math.floor(Math.random()*100) + 1; //to genarate a random number

let guess = 0;
let guess1 = 5;

submit.addEventListener('click', (e)=>{
    let inputfield = document.querySelector('.input').value;
    if(inputfield === "" || isNaN(inputfield) || inputfield < 1 || inputfield > 100){
        control9.classList.toggle('control99');
        failaudio.play();
        setTimeout(function(){
            control9.classList.toggle('control99');
            in_put.value = "";
            in_put.focus();
            // failaudio.pause();
        }, 2000);
        return;
       
    }else if(inputfield == random_number){
        guess++;
        guess1--;
        p12.innerHTML="The guess number was: " + random_number;
        p13.textContent += inputfield + (", ");
        control6.classList.add('control66');
        control8.classList.toggle('control88');

    }else if(guess == 4){
        guess++;
        guess1--;
        p9.innerHTML="The guess number was: " + random_number;
        p10.innerHTML += inputfield + ", ";
        p13.textContent += inputfield + (", ");
        control7.classList.toggle('control77');
        control6.classList.add('control66');
        lostaudio.play();

    }else if(inputfield < random_number){
        guess++;
        guess1--;
        p33.innerHTML =  guess1;
        p4.innerHTML = "You have made: " + guess + " Tried";
        p5.textContent += inputfield + ", ";
        p6.innerHTML = "Too: Low";
        p10.innerHTML += inputfield + ", ";
        p13.textContent += inputfield + (", ");
        in_put.focus();
        in_put.value = "";
        control6.classList.add('control66');

    }else{
        guess++;
        guess1--;
        p33.innerHTML = guess1;
        p4.innerHTML = "You have made: " + guess + " Tried";
        p5.textContent += inputfield + ", ";
        p6.innerHTML = "Too: High";
        p10.innerHTML += inputfield + ", ";
        p13.textContent += inputfield + (", ");
        in_put.focus();
        in_put.value = "";
        control6.classList.add('control66');
    }

})

function win(){
    control8.classList.toggle('control88');
    setTimeout(function(){
        window.location.reload();
    }, 1000);
}
function lose(){
    control7.classList.toggle('control77');
    setTimeout(function(){
        window.location.reload();
    }, 1000);
}

