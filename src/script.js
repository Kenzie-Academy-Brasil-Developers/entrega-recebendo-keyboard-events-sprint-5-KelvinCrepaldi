let boxTop = 200;
let boxLeft = 200;

document.addEventListener('keydown', (event) => {

    if(event.key === 'ArrowDown'){
        boxTop += 10
        document.getElementById("box").style.top = boxTop + "px";
    }

    if(event.key === 'ArrowUp'){
        boxTop -= 10
        document.getElementById("box").style.top = boxTop + "px";
    }

    if(event.key === 'ArrowRight'){
        boxLeft +=10
        document.getElementById("box").style.left = boxLeft + "px";
    }

    if(event.key === 'ArrowLeft'){
        boxLeft -=10
        document.getElementById("box").style.left = boxLeft + "px";
    }
  });