let signin = document.querySelector(".signin");
let box=document.querySelector(".box");
signin.onclick = function() {
            box.style.transform="rotateY(-180deg) translateX(100%)";
            // box.style.transform="";
            
}

let siginup = document.querySelector(".signup");
siginup.onclick = function () {
    box.style.transform="rotateY(0deg) translateX(0%)";

}