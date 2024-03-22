//let button= document.querySelector("button");// accessing with button tag
let btn= document.querySelector("#btn");//accessing with class attribute
//we'll won't use these methods
// btn.onclick = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clintX,evt.clintY);
// };

let div = document.querySelector("div");
// div.onmouseover = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clintX,evt.clintY);
// };
function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }
//we'll use these method
btn.addEventListener("click",()=>{
    let rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
});
// div.addEventListener("click",()=>{
//     console.log("You are hovering mouse");
// });
const handler2 = () =>{
    console.log("Second handler");
}
div.addEventListener("click",handler2);

//change mood
let mode = document.querySelector("#mode");
let curMode = "light";
const handle= () =>{
    if(curMode==="light"){
        curMode="dark";
    }else{
        curMode="light";
    }
    console.log(curMode);
}
mode.addEventListener("click",handle);
