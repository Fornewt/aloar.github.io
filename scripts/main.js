// document.querySelector("html").addEventListener("click",function(){
//     alert("只要是活着的东西，就算是神也杀给你看。")
// })

let myImage = document.querySelector("img");

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/shiki.jpg"){
        myImage.setAttribute("src", "images/sinner.jpg");
    }else{
        myImage.setAttribute("src","images/shiki.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName(){//注意，函数仍然不是直接运行的，是将button事件与函数绑定
    let myName = prompt("请输入你的名字");
    if(!myName){
        setUserName()
    }else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "来者不善啊，" + myName;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "你看来者都是客，"+ storedName;
}

myButton.onclick = function() {
    setUserName();
};