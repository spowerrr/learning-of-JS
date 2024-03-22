let div = document.querySelectorAll(".box");
console.log(div);
console.dir(div);
console.log(div[2]);

console.log("printing all div using loop:");
let i=1;
for(let all of div){
    all.innerText = `new div ${i}` ;
    i++;
}

//let heading= document.querySelector("h1");   //accessing to h1 heading through js in html code
