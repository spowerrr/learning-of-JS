let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);

let para= document.querySelector("p");
console.log(para.getAttribute("class"));  //gets attribute 
para.style.visibility = "hidden";//it hides texts
//we can set attribute
console.log(para.setAttribute("class","123"));  //setting class attribute value puspo to 123
// let heading= document.querySelector("h1");
// console.log(heading);
// let cls = heading.getAttribute("h1");
// console.log(cls);

//changing color through js
div.style.backgroundColor = "red";
div.style.fontSize = "50px"; 
div.style.color = "green";
div.style.border = "0px";

//lets create a new button
let btn = document.createElement("button");
console.log(btn);
btn.innerText = "click me";

//div.prepend(btn);//inside the div but div starting with the button
//div.append(btn);//inside the div but in the end
//div.after(btn);//after div node