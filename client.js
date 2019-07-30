let pantryContents  = {
  pancakeMixBags: 1,
  chocolateChips: 20
};

let refrigeratorContents  = {
  eggs: 4,
  baconStrips: 8,
  chocolateChips: 200,
  cheeseSlices: 6,
  tomatoes: 1,
  onions: 1,
};

// You shouldn't need to change anything above this line initially
// You may change it to test different scenarios, but it should work as is

function breakfastChecker(contents, guest) {
  // Your code goes here
let breakfastGuest = 4;
const eggsPerPerson = 2;
const baconPerPerson = 3;
const pancakesPerPerson = 3;
const chocolateChipsPerPancake = 15;
let eggQuantity = contents.eggs;
let baconQuantity = contents.bacon;
let pancakeQuanity = contents.pancakeMixBags * 10;
let chocolateChipsQuantity = contents.chocolateChips;

breakfastGuest = guest + breakfastGuest;


if (eggQuantity >= (breakfastGuest * eggsPerPerson) && 
  baconQuantity >= (breakfastGuest * baconPerPerson)){
  return 'yes';
}
else if (pancakeQuanity >= (breakfastGuest * pancakesPerPerson) 
  && contents.chocolateChips >= (breakfastGuest * pancakesPerPerson * chocolateChipsPerPancake)){
  return 'yes';
}
else{
  return 'no';
}


}

// Your function should return 'yes' or 'no'
console.log('Does the pantry have enough food for breakfast?', breakfastChecker(pantryContents));
console.log('Does the refrigerator have enough food for breakfast?', breakfastChecker(refrigeratorContents));
