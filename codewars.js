// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
function removeChar(str) {
  let text = str.substring(1, str.length - 1);

  return text;
}
// https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript

function litres(time) {
  let liters = time * 0.5;
  let result = Math.floor(liters);
  
  return result;
}

// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript
function dutyFree(normPrice, discount, hol){
  let procent = normPrice * (discount / 100);
  let result = Math.floor(hol / procent);
  
  return result;
}
// https://www.codewars.com/kata/51f9d93b4095e0a7200001b8/train/javascript
function howManyLightsabersDoYouOwn(name) {
  let names = name;
  if(names === "Zach") {
    return 18;
  }
  return 0;
}
//or 
function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach'? 18 : 0;
}
//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
function findNeedle(haystack) {
  let array = haystack.indexOf('needle');

  return "found the needle at position " + array;
} 

// https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript

function position(letter){
  let index = letter.charCodeAt();
  let result = index - "a".charCodeAt(0) + 1;
  
  return "Position of alphabet: " + result;
}
