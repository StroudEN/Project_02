let score = 0;

let scoreDisplay = document.getElementById('score');

let scoreModifierAmount = document.getElementById('scoreModifierAmount');

let scoreModifier = 0;

const plantButton = document.getElementById("plantDisplay");

// Plant button functionality including first item unlock, 
// since you can't have a passive unlock yet.
plantButton.addEventListener('click', function(clickPlant) {
    if (clickPlant.target.matches('#plantDisplay')) {
        console.log("Increased Crops by one")
        score++;
        scoreDisplay.innerText=score        
    }   if (score > 15 && item1Hide == true) {
        item1Hide = false
        itemHide1.classList.remove('itemHide')
    }
});

// game timer tick for modifier increase as well as searching for 
// passive unlocks per second
setInterval(function(event) {
    if (scoreModifier>0) {
        score=score+scoreModifier   

    }scoreDisplay.innerText=score;
    if (score > 25 && item2Hide == true) {
        item2Hide = false
        itemHide2.classList.remove('itemHide')
    }
    if (score > 40 && item3Hide == true) {
        item3Hide = false
        itemHide3.classList.remove('itemHide')
    }
    if (score > 60 && item4Hide == true) {
        item4Hide = false
        itemHide4.classList.remove('itemHide')
    }
    if (score > 185 && item5Hide == true) {
        item5Hide = false
        itemHide5.classList.remove('itemHide')
    }
    if (score > 400 && item6Hide == true) {
        item6Hide = false
        itemHide6.classList.remove('itemHide')
    }
    if (score > 675 && item7Hide == true) {
        item7Hide = false
        itemHide7.classList.remove('itemHide')
    }
    if (score > 1750 && item8Hide == true) {
        item8Hide = false
        itemHide8.classList.remove('itemHide')
    }
}, 1000)

// Could possibly set up a visValue Array

//-------------------------Item 1-------------------------------

let item1Owned = document.getElementById('item1Owned');
let item1Cost = document.getElementById('item1Cost');
const item1Button = document.getElementById('item1Button');


let item1Stock = 0
let item1Price =20

let itemHide1 = document.getElementById('itemHide1')
let item1Hide = true

item1Button.addEventListener('click', function(clickTrowel) {
    if (clickTrowel.target.matches('#item1Button')) {

        if (score>=item1Price) {
            score=score-item1Price;
            scoreDisplay.innerText=score;  
            item1Stock++;
            item1Owned.innerText=item1Stock;
            item1Price=Math.floor(item1Price+item1Price/2);
            item1Cost.innerText=item1Price;
            scoreModifier=scoreModifier+1;
            scoreModifierAmount.innerText=scoreModifier;
        }}return
});

//-------------------------Item 2-------------------------------

let item2Owned = document.getElementById('item2Owned');
let item2Cost = document.getElementById('item2Cost');
const item2Button = document.getElementById('item2Button');

let item2Stock = 0
let item2Price =30

let itemHide2 = document.getElementById('itemHide2')
let item2Hide = true

item2Button.addEventListener('click', function(clickShovel) {
    if (clickShovel.target.matches('#item2Button')) {

        if (score>=item2Price) {
            score=score-item2Price;
            scoreDisplay.innerText=score;  
            item2Stock++;
            item2Owned.innerText=item2Stock;
            item2Price=Math.floor(item2Price+item2Price/2);
            item2Cost.innerText=item2Price;
            scoreModifier=scoreModifier+2;
            scoreModifierAmount.innerText=scoreModifier;
        }}return
});

//-------------------------Item 3-------------------------------

let item3Owned = document.getElementById('item3Owned');
let item3Cost = document.getElementById('item3Cost');
const item3Button = document.getElementById('item3Button');

let item3Stock = 0
let item3Price =50

let itemHide3 = document.getElementById('itemHide3')
let item3Hide = true

console.log([]===[])
item3Button.addEventListener('click', function(clickFert) { 
    console.dir(clickFert.target)
    console.log(clickFert.target)
    if (clickFert.target.id == 'item3Button') {

        if (score>=item3Price) {
            score=score-item3Price;
            scoreDisplay.innerText=score;
            item3Stock++;
            item3Owned.innerText=item3Stock;
            item3Price=Math.floor(item3Price+item3Price/2);
            item3Cost.innerText=item3Price;
            scoreModifier=scoreModifier+5;
            scoreModifierAmount.innerText=scoreModifier;
        }}
});

//-------------------------Item 4-------------------------------

let item4Owned = document.getElementById('item4Owned');
let item4Cost = document.getElementById('item4Cost');
const item4Button = document.getElementById('item4Button');

let item4Stock = 0
let item4Price =70

let itemHide4 = document.getElementById('itemHide4')
let item4Hide = true

item4Button.addEventListener('click', function(clickPlow) {
    if (clickPlow.target.matches('#item4Button')) {

        if (score>=item4Price) {
            score=score-item4Price;
            scoreDisplay.innerText=score;
            item4Stock++;
            item4Owned.innerText=item4Stock;
            item4Price=Math.floor(item4Price+item4Price/2);
            item4Cost.innerText=item4Price;
            scoreModifier=scoreModifier+10;
            scoreModifierAmount.innerText=scoreModifier;
        }}return
});

//-------------------------Item 5-------------------------------

// Set visValue where if Score > visValue remove class = #itemHide
let item5Owned = document.getElementById('item5Owned');
let item5Cost = document.getElementById('item5Cost');
const item5Button = document.getElementById('item5Button');

let item5Stock = 0
let item5Price =200

let itemHide5 = document.getElementById('itemHide5')
let item5Hide = true

item5Button.addEventListener('click', function(clickHorse) {
    if (clickHorse.target.matches('#item5Button')) {

        if (score>=item5Price) {
            score=score-item5Price;
            scoreDisplay.innerText=score;
            item5Stock++;
            item5Owned.innerText=item5Stock;
            item5Price=Math.floor(item5Price+item5Price/2);
            item5Cost.innerText=item5Price;
            scoreModifier=scoreModifier+25;
            scoreModifierAmount.innerText=scoreModifier;
        }}return
});

//-------------------------Item 6-------------------------------

// Set visValue where if Score > visValue remove class = #itemHide
let item6Owned = document.getElementById('item6Owned');
let item6Cost = document.getElementById('item6Cost');
const item6Button = document.getElementById('item6Button');

let item6Stock = 0
let item6Price =450

let itemHide6 = document.getElementById('itemHide6')
let item6Hide = true

item6Button.addEventListener('click', function(clickBean) {
    if (clickBean.target.matches('#item6Button')) {

        if (score>=item6Price) {
            score=score-item6Price;
            scoreDisplay.innerText=score;
            item6Stock++;
            item6Owned.innerText=item6Stock;
            item6Price=Math.floor(item6Price+item6Price/2);
            item6Cost.innerText=item6Price;
            scoreModifier=scoreModifier+50;
            scoreModifierAmount.innerText=scoreModifier;
        }}return
});

//-------------------------Item 7-------------------------------

let item7Owned = document.getElementById('item7Owned');
let item7Cost = document.getElementById('item7Cost');
const item7Button = document.getElementById('item7Button');

let item7Stock = 0
let item7Price =750

let itemHide7 = document.getElementById('itemHide7')
let item7Hide = true

item7Button.addEventListener('click', function(clickSprite) {
    if (clickSprite.target.matches('#item7Button')) {

        if (score>=item7Price) {
            score=score-item7Price;
            scoreDisplay.innerText=score;
            item7Stock++;
            item7Owned.innerText=item7Stock;
            item7Price=Math.floor(item7Price+item7Price/2);
            item7Cost.innerText=item7Price;
            scoreModifier=scoreModifier+100;
            scoreModifierAmount.innerText=scoreModifier;
        }}return
});

//-------------------------Item 8-------------------------------

let item8Owned = document.getElementById('item8Owned');
let item8Cost = document.getElementById('item8Cost');
const item8Button = document.getElementById('item8Button');

let item8Stock = 0
let item8Price =2000

let itemHide8 = document.getElementById('itemHide8')
let item8Hide = true

item8Button.addEventListener('click', function(clickGolem) {
    if (clickGolem.target.matches('#item8Button')) {

        if (score>=item8Price) {
            score=score-item8Price;
            scoreDisplay.innerText=score;
            item8Stock++;
            item8Owned.innerText=item8Stock;
            item8Price=Math.floor(item8Price+item8Price/2);
            item8Cost.innerText=item8Price;
            scoreModifier=scoreModifier+200;
            scoreModifierAmount.innerText=scoreModifier;
        }}return
});