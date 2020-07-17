
// FEET_ TO_MILE
function feetToMile(feet){
    var mile = 0.000189*feet;
    var resultMile = mile.toFixed(3);
    return resultMile;

}
//console.log("Mile: ",feetToMile(10000));

// WOOD CALCULATOR

function woodCalculator(chair, table , khat){
    var needLogForChair = chair * 1;
    var needLogForTable = table * 3;
    var needLogForKhat = khat * 5;

    var totalwood = needLogForChair + needLogForTable + needLogForKhat;

    return totalwood;
}

//console.log("Amount of Wood: ",woodCalculator(14,4,3));

// BRICK CALCULATOR

function brickCalculator(floor){
      var oneToTen = 15;
      var elevenTotwenty = 12;
      var twentyUp = 10;
      var bricksPerFeet = 1000;

    if (floor<0){
        return undefined;
    } else if ( floor <= 10){
        return oneToTen*bricksPerFeet;
    }else if (floor>10 && floor <=20){
        return elevenTotwenty*bricksPerFeet;
    }else if(floor>20){
        return twentyUp*bricksPerFeet;
    }
}

//console.log("Total amount of Brick: ",brickCalculator(-7))

// TINY FRIEND

function tinyFriend(name){
    var smallFriendName = name[0];
    
    for (var i = 0;i<name.size; i++){
        var currentFriendName = name[i];
        if (currentFriendName < smallFriendName){
            smallFriendName = currentFriendName;
        }
    }
    return smallFriendName;
}

var friendArray =tinyFriend(["Jamil","Mujahidin","Nasirul","Muhibulislam","lutfu"]);
console.log(friendArray);