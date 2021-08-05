// Kilometer to Meter converter

function kilometerToMeter(kilometer){
    if(kilometer <= 0){
        return "Distance can't be a negative number.";
    }
    else{
        var meter = kilometer * 1000;
        return meter;
    }
}

var meters = kilometerToMeter(87);
console.log(meters," Meters");

// Budget Calculator
function budgetCalculator(watch, phone, laptop){
    var totalOfWatch = watch * 50;
    var totalOfPhone = phone * 100;
    var totalOfLaptop = laptop * 500;
    var totalBudget = totalOfWatch + totalOfPhone + totalOfLaptop;
    return totalBudget;
}

var budgetOfItems = budgetCalculator(2,3,1);
console.log("Total Cost", budgetOfItems);

//Hotel Total Cost 
function hotelCost(day){
    var cost = 0;
    if(day <= 10){
        cost = day * 100;
    }
    else if(day <= 20){
        var firstDay = 10 * 100;
        var remainingDays = day - 10;
        var secondDay = remainingDays * 80;
        cost = firstDay + secondDay;
    }
    else{
        var firstDay = 10 * 100;
        var secondDay = 10 * 80;
        var remainingDays = day - 20;
        var thirdDay = remainingDays * 50;
        cost = firstDay + secondDay + thirdDay;
    }
          
    return cost;
}

var costTotal = hotelCost(15);
console.log("cost",costTotal);

//Mega Friend
function megaFriend(friend) {
    var largest = "";

    for (let i = 0; i < friend.length; i++) {
        var name = friend[i];
        if(largest.length < name.length){
            largest = name;
        }
    }
    return largest;
}
var friendName = megaFriend(["Akib","Faysal", "Noman","Jubayer", "Saad", "Mau"]);
console.log("Largest Name",friendName);

