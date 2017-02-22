'use strict';


function Display (imageName, path) {
  this.displayed = 0;
  this.clicked = 0;
  this.filepath = 'images/' + path;
  this.name = imageName;
}

var bag = new Display('bag', 'bag.jpg');
var banana = new Display('banana', 'banana.jpg');
var bathroom = new Display('bathroom', 'bathroom.jpg');
var boots = new Display('boots', 'boots.jpg');
var breakfast = new Display('breakfast', 'breakfast.jpg');
var bubblegum = new Display('bubblegum', 'bubblegum.jpg');
var chair = new Display('chair', 'chair.jpg');
var cthulhu = new Display('cthulhu', 'cthulhu.jpg');
var dogDuck = new Display('dogDuck', 'dog-duck.jpg');
var dragon = new Display('dragon', 'dragon.jpg');
var pen = new Display('pen', 'pen.jpg');
var petSweep = new Display('petSweep', 'pet-sweep.jpg');
var scissors = new Display('scissors', 'scissors.jpg');
var shark = new Display('shark', 'shark.jpg');
var sweep = new Display('sweep', 'sweep.png');
var tauntaun = new Display('tauntaun', 'tauntaun.jpg');
var unicorn = new Display('unicorn', 'unicorn.jpg');
var usb = new Display('usb', 'usb.gif');
var waterCan = new Display('waterCan', 'water-can.jpg');
var wineGlass = new Display('wineGlass', 'wine-glass.jpg');

var images = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

var randomNumber = function() {
  return Math.floor(Math.random() * (images.length));
};

var currentImages = function() {
  return [images[randomNumber()], images[randomNumber()], images[randomNumber()]];
};



var pageSwitch = function() {
  var imageTrio = currentImages();
  for (var i = 0; i < imageTrio.length; i++) {
    imageTrio[i].displayed++;
    console.log(imageTrio[i]);
  };
  
  document.getElementById('first').setAttribute('src', imageTrio[0].filepath);
  document.getElementById('second').setAttribute('src', imageTrio[1].filepath);
  document.getElementById('third').setAttribute('src', imageTrio[2].filepath);
};

document.getElementById('first').addEventListener('click', pageSwitch);
document.getElementById('second').addEventListener('click', pageSwitch);
document.getElementById('third').addEventListener('click', pageSwitch);


pageSwitch();