var arrayOfURL = [
  'images/bag.jpg',
  'images/banana.jpg',
  'images/bathroom.jpg',
  'images/boots.jpg',
  'images/.jpg',
  'images/breakfast.jpg',
//   'images/bubblegum.jpg',
//   'images/chair.jpg',
//   'images/cthulu.jpg',
//   'images/dog-duck.jpg',
//   'images/dragon.jpg',
//   'images/pen.jpg',
//   'images/pet-sweetp.jpg',
//   'images/scissors.jpg',
//   'images/shark.jpg',
//   'images/sweep.png',
//   'images/tauntaun.jpg',
//   'images/unicorn.jpg',
//   'images/usb.gif',
//   'images/water-can.jpg',
//   'images/wine-glass.jpg',
];

var constructedProducts = [];

function Image(imageUrl) {
  this.url = imageUrl;
  this.name = imageUrl.slice(7, -4);
  constructedProducts.push(this);
}

// new Image(arrayOfURL[0]);

(function () {
  for (var i in arrayOfURL) {
    new Image(arrayOfURL[i]);
  }
})();


//get random imags...
// random index is function

var randomThree = function(){
  var forReturning = [];
  var firstRandom = Math.floor(Math.random() * constructedProducts.length);
  var secondRandom = Math.floor(Math.random() * constructedProducts.length);

  var thirdRandom = Math.floor(Math.random() * constructedProducts.length);

  while(secondRandom === firstRandom || secondRandom === thirdRandom){
    secondRandom = Math.floor(Math.random() * constructedProducts.length);
  }
  while(thirdRandom === firstRandom || thirdRandom === secondRandom){
    thirdRandom = Math.floor(Math.random() * constructedProducts.length);
  }
  forReturning.push(firstRandom);
  forReturning.push(secondRandom);
  forReturning.push(thirdRandom);
  return forReturning;
};

randomThree();




// DOM manipulate whatever was randomly selected
// in that function change the src to index of arraryOfURL
// handle duplicates in this function...
// it would be a bunch of extra steps to separate into two functions

var dommy = function(){
  var firstVolley = randomThree();
  var firstGetter = document.getElementById('first');
  var secondGetter = document.getElementById('second');
  var thirdGetter = document.getElementById('third');

  firstGetter.src = constructedProducts[firstVolley[0]].url;
  secondGetter.src = constructedProducts[firstVolley[1]].url;
  thirdGetter.src = constructedProducts[firstVolley[2]].url;
  var protectAgainstDuplicates = false;

  protectAgainstDuplicates = function() {
    var secondVolley = randomThree();
    for(var i = 0; i < firstVolley.length; i ++){
      for(var j = 0; j < secondVolley.length; j++){
        if (firstVolley[i] === secondVolley[j]){
          console.log('found a dup');
          console.log(secondVolley);
          return false;
        }
        else return true;

      }
    }

    console.log(firstVolley);
    console.log(secondVolley);
  };

  while (protectAgainstDuplicates() === false){
    protectAgainstDuplicates();
    console.log('and again');
  }






};

dommy();


