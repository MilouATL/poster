//first try
function checkKeyPressed(e) {
    if (e.keyCode == "66") {
        document.body.style.background = "linear-gradient(magenta, yellow, cyan)";
        document.body.style.transition = "1.5";
    }
}

//second try
// window.addEventListener("keydown", checkKeyPressed, false);

// function checkKeyPressed(event) {
//     var element = event.keyCode; 
//     if (element == "66") {
//        alert('yo');
//     }
// }
// window.addEventListener('keydown', setClassTimeout('animationTest', 15000, 'animateGradient'), false);



window.addEventListener('keydown', setClassTimeout, false);


function setClassTimeout(e) {
    let element = document.getElementById('animationTest');
    if (e.keyCode == "66") {
        element.classList.add('animateGradient');
        setTimeout(function(){element.classList.remove('animateGradient')}, 20000);
    }
}