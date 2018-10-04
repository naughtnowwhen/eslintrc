var set = [];
var trialStorage = [];

function QnA (information, question, answer) {
this.information = information;
this.question = question;
this.answer = answer;
}



var firstSet = new QnA ('apples are good', 'do you want an apple?', '1');

var secondSet = new QnA ('bananas are elliptical', 'do you want a banana?', '2');

var thirdSet = new QnA ('grapes taste sweet now, and but if you wait, they can be wine', 'do you want a grape', '3');


set.push(firstSet);
set.push(secondSet);
set.push(thirdSet);


// alert(Object.values(set[0]));
console.log(Object.values(firstSet).length);
//results in 3


// interesting, Object.values/keys/entries requires you pass it the object to it, for the next nested loops I didn't know how to pass the object to Object.values, because what's it called? QnA? No, that's a function, I'm looking for something general, because I know that the array 'set' is an array of objects, but each object is uniquely named, so hard coding won't work. But I realized that in a for loop set[i] is each object, so for a generalized syntax it would be Object.values(set[i])

// so here is an example of that...
// for (i = 0; i < set.length; i ++) {
//     console.log(Object.values(set[i])[1]); 
// }

// and so a nested for loop that iterates through the set array, and then iterates through the object's values for each set[i]


//Sweet! I got a nested for loop that works with just a bit of trying! 

var globalStorage = [];

//ok interesting, I kept trying to push from nestedStorage into innerstorage, and then would inquire about innerStorage in Dev Tools, finding only the last value entered. I assume now it's because innerStorage is in the for loop it gets overwritten each time. So the solution is to push into global storage. 

for (i = 0; i < set.length; i ++) {

    for (j = 0; j < Object.values(set[i]).length; j ++){
        var nestedStorage = [];
        if (j === 0){
            alert(Object.values(set[i])[j]);

        }
        else if (j === 1){
        var x = prompt(Object.values(set[i])[j]);    
        nestedStorage.push(x);
        globalStorage.push(nestedStorage)[j];

        }
        else if (j === 2) {
            alert('your answer has been recorded, thank you ' + x);

        }
    }
}


// ok, interesting, I was hoping that I could pass in info through prompts, and yes you can and the following way is the way to do it, but maybe there's better ways.

function Obj (a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
    }
    var x  = prompt('say something');
    var y = prompt('say more');
    var z = prompt('say a little more');

    var firstObj = new Obj (x, y, z);
