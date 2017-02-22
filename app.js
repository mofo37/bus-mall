'use strict';

var ctx = document.getElementById('myChart');

var chartConfig = {
  type: 'bar',
  data: {
    labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
    datasets: [{
      label: 'Number of Clicks Per Image',
      data: [5, 2, 5, 7, 3, 6, 1, 4, 5, 6, 7, 1, 2, 4, 3, 3, 7, 6, 4, 1],
      backgroundColor: ['red'],
      borderColor: ['black'],
      borderWidth: 1,
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};

var renderedChart = new Chart(ctx, chartConfig);



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
  return [[images[randomNumber()].filepath], [images[randomNumber()].filepath], [images[randomNumber()].filepath]];
};

console.log(currentImages());

var pageSwitch = function() {
  document.getElementById('first').setAttribute('src', currentImages()[0]);
  document.getElementById('second').setAttribute('src', currentImages()[1]);
  document.getElementById('third').setAttribute('src', currentImages()[2]);
};

document.getElementById('first').addEventListener('click', pageSwitch);
document.getElementById('second').addEventListener('click', pageSwitch);
document.getElementById('third').addEventListener('click', pageSwitch);

// for (i = 0; i < images.length; i++) {
//   images[randomNumber(i)[1].filepath];
// };

pageSwitch();