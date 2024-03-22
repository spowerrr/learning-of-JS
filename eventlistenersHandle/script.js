let body = document.querySelector("body");
let button = document.querySelector("button");
let btn = document.querySelector("#btn");
let mode = "light";
btn.addEventListener("click",() =>{
    if(mode === "light"){
        mode = "dark";
        //body.style.backgroundColor = "black";
        //body.style.color = "white";
        body.classList.add("dark");  //body.classList.add("created class in css") adding it on classList 
        body.classList.remove("light");
    } else {
        mode = "light";
        //body.style.backgroundColor = "white";
        //body.style.color="black" // this approach works the same thing like classList.add does for light class
        body.classList.add("light"); ////body.classList.add("created class in css") adding it on classList
        body.classList.remove("dark");
    }
});
