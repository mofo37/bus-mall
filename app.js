'use strict';


var image = ['images/bag.jpg', 'images/banana.jpg', 'images/bathroom.jpg', 'images/boots.jpg', 'images/breakfast.jpg', 'images/bubblegum.jpg', 'images/chair.jpg', 'images/cthulu.jpg', 'images/dog-duck.jpg', 'images/dragon.jpg', 'images/pen.jpg', 'images/pet-sweep.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/tauntaun.jpg', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.png', 'images/wine-glass.jpg'];

var minDisplayed = 0;
var maxDisplayed = image.length;

function Display (imageName, path) {
  this.displayed = 0;
  this.clicked = 0;
  this.filepath = 'images/' + path;
  this.name = imageName;

}

var number = Math.random()*(maxDisplayed - minDisplayed) + minDisplayed;
