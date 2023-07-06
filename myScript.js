const aspect = document.querySelector('.aspect');
const front = document.querySelector('.front');


let i = 0;
function looding() {

    aspect.innerHTML = i + "%"
    front.style.width = i + "%";
    i++;
    if (i < 101) setTimeout(looding, 20);
}

looding();