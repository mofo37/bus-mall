'use strict';

var stringImages = localStorage.getItem('storageImages');
  // console.log('stringImages', stringImages);
var storageImages1 = JSON.parse(stringImages);
  // console.log('storageImages1', storageImages1);


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

var randomNumber = function(arr) {
  return Math.floor(Math.random() * (arr.length));
};

var displayedImages = [];

var nonDuplicate = function() {
  var adjustedArray = [];
  console.log(displayedImages);
  for (var i = 0; i < images.length; i++) {

    if (displayedImages.includes(images[i])) {
    } else {
      adjustedArray.push(images[i]);
    }
  }
  console.log(adjustedArray);
  return [adjustedArray[randomNumber(adjustedArray)], adjustedArray[randomNumber(adjustedArray)], adjustedArray[randomNumber(adjustedArray)]];
};


var clickCounter = function(clickedImage) {
  var id = clickedImage.getAttribute('id');

  if (id === 'first') {
    var image = displayedImages[0];
  } else if (id === 'second') {
    var image = displayedImages[1];
  } else {
    var image = displayedImages[2];
  }

  image.clicked++;
};

var pageSwitch = function() {
  var imageTrio = nonDuplicate();
  displayedImages = imageTrio;

  for (var i = 0; i < imageTrio.length; i++) {
    imageTrio[i].displayed++;
  };

  var storageImages = images;
  JSON.stringify(storageImages);
  localStorage.setItem('storageImages', JSON.stringify(storageImages));

  document.getElementById('first').setAttribute('src', imageTrio[0].filepath);
  document.getElementById('second').setAttribute('src', imageTrio[1].filepath);
  document.getElementById('third').setAttribute('src', imageTrio[2].filepath);
};

var clickReceiver = function() {
  clickCounter(this);
  pageSwitch();
};

document.getElementById('first').addEventListener('click', clickReceiver);
document.getElementById('second').addEventListener('click', clickReceiver);
document.getElementById('third').addEventListener('click', clickReceiver);


pageSwitch();

var ctx = document.getElementById('myChart');

var chartConfig = {
  type: 'bar',
  data: {
    labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
    datasets: [{
      label: 'Number of Clicks Per Image',
      data: [5, 2, 5, 7, 3, 6, 1, 4, 5, 6, 7, 1, 2, 4, 3, 3, 7, 6, 4, 1],
      backgroundColor: ['red','blue','black','grey','red','blue','black','grey','red','blue','black','grey','red','blue','black','grey','red','blue','black','grey'],
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
