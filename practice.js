const input = "alchemy ROCKS goLD";

function titleCase(sentence) {
  const words = sentence.split(" ");
  const letters = words.map((word) => {
    const firstLetter = word[0].toUpperCase();
    const rest = word.slice(1).toLowerCase();
    return firstLetter + rest;
  });
  // slice to take just the first letter
  // capitalize first
  // lowercase all the rest

  return letters.join(" ");
}

// console.log("titleCase", titleCase(input));

const sampleArray = ["a", "b", "c", "d", "e"];

function at(arr, index) {
  if (index >= 0) {
    return arr[index];
  } else {
    const length = arr.length;
    const newIndex = length + index;
    return arr[newIndex];
  }
}

// console.log("at 1", at(sampleArray, 1));
// console.log("at 0", at(sampleArray, 0));
// console.log("at -1", at(sampleArray, -1));

function fizzBuzz(number) {
  const arr = Array(number).fill(1);
  console.log("arr", arr);
  const newArr = arr.map((element, index) => {
    const indexAdj = index + 1;
    if (indexAdj % 3 === 0 && indexAdj % 5 === 0) {
      return "FizzBuzz";
    } else if (indexAdj % 3 === 0) {
      return "Fizz";
    } else if (indexAdj % 5 === 0) {
      return "Buzz";
    } else {
      return indexAdj;
    }
  });

  // console.log('newArr', newArr);
}

const array = fizzBuzz(16);
// console.log('array', array);

const input1 = "superintended";
const input2 = "unpredestined";
const input3 = "pictorialness";
const input4 = "documentarily";

// split words
// sort arrays
// compare arrays
// if same return true
// else return false

function anagram(firstWord, secondWord) {
  const firstArr = firstWord.split("").sort().join();
  const secondArr = secondWord.split("").sort().join();
  return firstArr === secondArr;
}

console.log("superintended", "unpredestined", anagram(input1, input2));
console.log("pictorialness", "documentarily", anagram(input3, input4));
