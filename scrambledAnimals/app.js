
var scrambledAnimals = [
  ['d', 'c', 'p', 'c'],
  ['o', 'a', 'i', 'o'],
  ['g', 't', 'g', 'w']
];
var unscramble = function() {
  animalsGetPushed = [];
  for (let slow = 0; slow < scrambledAnimals[0].length; slow ++){
    for (let fast = 0; fast < scrambledAnimals.length; fast ++){
      let animalAppender = '';
      // animalAppender += scrambledAnimals[fast][slow];
      for(let a = 0; a < 3; a++){

        animalAppender.concat(scrambledAnimals[fast][slow]);
        animalsGetPushed.push(animalAppender);
      }

      // if(animalAppender.length === 2){
      // animalsGetPushed.push(animalAppender);
      // }


    }
  }
};

unscramble();
