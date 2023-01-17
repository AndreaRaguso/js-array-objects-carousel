const images = [
    {
        image: '../img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '../img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '../img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '../img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '../img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


let slide = document.getElementById("slide");
const btn1 = document.getElementById("slide-arrow-prev");
const btn2 = document.getElementById("slide-arrow-next");
const title = document.getElementById("title");
const text = document.getElementById("text");
const tumb = document.getElementById("anteprima");

let i = 0;
slide.src = images[i]["image"];
title.innerHTML = images[i]["title"];
text.innerHTML = images[i]["text"];


btn2.onclick = function(){
    i++;
    if (i > images.length - 1) {
      i = 0;
    }
    slide.src = images[i]["image"];
    title.innerHTML = images[i]["title"];
    text.innerHTML = images[i]["text"];
};
  
btn1.onclick = function(){
    i--;
    if (i < 0) {
      i = images.length - 1;
    }
    slide.src = images[i]["image"];
    title.innerHTML = images[i]["title"];
    text.innerHTML = images[i]["text"];
};

for(let i = 0; i < 5; i++){
    tumb.innerHTML += `<div class="tumb">
                            <img src="${images[i]["image"]}" class="tumb-img">
                        </div>`;
}