let signin = document.querySelector(".signin");
let box=document.querySelector(".box");
signin.onclick = function() {
            box.style.transform="rotateY(-180deg) translateX(100%)";
}

let siginup = document.querySelector(".signup");
siginup.onclick = function () {
    box.style.transform="rotateY(0deg) translateX(0%)";
}

let labUs = document.querySelector(".l-us")
let username = document.getElementById("uname");

username.onfocus = function() {
    labUs.style.top="-12px";
    labUs.style.backgroundColor="#4D5656";
    
    username.onblur = function() {
        if (username.value=='') {
            labUs.style.top="7px";
        }
    }
}