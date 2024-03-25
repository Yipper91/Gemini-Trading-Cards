let counter = 1;
const burger = document.querySelector("#burger");
const dropNav = document.querySelector("#dropNav");
const dropBg = document.querySelector("#dropBg");

burger.addEventListener("click", operate, false);

function operate() {
    if (counter == 1) {
        drop();
        counter = 0;
    } else if (counter == 0) {
        rise();
        counter = 1;
    }
}

const drop = () => {
    dropBg.style.visibility = "visible";
    dropNav.style.animation = "drop 0.7s steps(22) forwards";}

const rise = () => {
    dropNav.style.animation = "rise 0.7s steps(22) forwards";
    setTimeout(function() {
        nav_hide();
    }, 700);
}

function nav_hide () {
    dropBg.style.visibility = "hidden";
}