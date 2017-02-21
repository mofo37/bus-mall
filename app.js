'use strict';


var images = ['images/bag.jpg', 'images/banana.jpg', 'images/bathroom.jpg', 'images/boots.jpg', 'images/breakfast.jpg', 'images/bubblegum.jpg', 'images/chair.jpg', 'images/cthulu.jpg', 'images/dog-duck.jpg', 'images/dragon.jpg', 'images/pen.jpg', 'images/pet-sweep.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/tauntaun.jpg', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.png', 'images/wine-glass.jpg'];



function Display (imageName, path) {
  this.displayed = 0;
  this.clicked = 0;
  this.filepath = 'images/' + path;
  this.name = imageName;
}




var currentImages = function() {
  // for (var first = 0; first < image.length; first++);
  return [images[], images[], images[]];
};




document.getElementById('first').setAttribute('src', currentImages()[0]);

document.getElementById('second').setAttribute('src', currentImages()[1]);

document.getElementById('third').setAttribute('src', currentImages()[2]);

var bag = new Display('bag', 'bag.jpg');
var banana = new Display('banana', 'banana.jpg');
var bathroom = new Display('bathroom', 'bathroom.jpg');
var boots = new Display('boots', 'boots.jpg');
var breakfast = new Display('breakfast', 'breakfast.jpg');
var bubblegum = new Display('bubblegum', 'bubblegum.jpg');
var chair = new Display('chair', 'chair.jpg');
var cthulu = new Display('cthulu', 'cthulu.jpg');
var dogDuck = new Display('dogDuck', 'dogDuck.jpg');
var dragon = new Display('dragon', 'dragon.jpg');
var pen = new Display('pen', 'pen.jpg');
var petSweep = new Display('petSweep', 'petSweep.jpg');
var scissors = new Display('scissors', 'scissors.jpg');
var shark = new Display('shark', 'shark.jpg');
var sweep = new Display('sweep', 'sweep.png');
var tauntaun = new Display('tauntaun', 'tauntaun.jpg');
var unicorn = new Display('unicorn', 'unicorn.jpg');
var usb = new Display('usb', 'usb.gif');
var waterCan = new Display('waterCan', 'water-can.png');
var wineGlass = new Display('wineGlass', 'wine-glass.jpg');

