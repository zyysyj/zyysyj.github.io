let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/dog.jpg');
    }else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    } 
}

let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

function setUserName() {
    let myName = prompt('请输入你的名字');
    if(!myName) {
        setUserName();
    } else {
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
        localStorage.setItem('name', myName);
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function() {
    setUserName();
}

