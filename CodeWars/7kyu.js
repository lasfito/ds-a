// k01 - Find the calculation type
// You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).

// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.

// The possible return strings are: "addition", "subtraction", "multiplication", "division".

// Example:
// calcType(1, 2, 3) -->   1 ? 2 = 3   --> "addition"

function calcType(a, b, res) {
  // your code here
  if (a * b == res) {
    return "multiplication";
  }
  if (a + b == res) {
    return "addition";
  }
  if (a - b == res) {
    return "subtraction";
  }
  if (a / b == res) {
    return "division";
  }
}

const calcType = (a, b, res) =>
  a + b === res
    ? "addition"
    : a - b === res
    ? "subtraction"
    : a * b === res
    ? "multiplication"
    : a / b === res
    ? "division"
    : null;

// k02 - Friend or foe
//   Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends) {
  const amigos = [];
  friends.forEach((persona) => {
    persona.length == 4 && amigos.push(persona);
  });

  return amigos;
}

function friend(friends) {
  return friends.filter((n) => n.length === 4);
}

// k03 - accum no time for story xd
//   This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

let accum = (s) => {
  let arr = [];

  [...s].forEach((letra, index) => {
    for (let i = -1; i < index; i++) {
      i == -1 ? arr.push(letra.toUpperCase()) : arr.push(letra.toLowerCase());
    }
    index < s.length - 1 && arr.push("-");
  });

  const str = arr.join("");

  return str;
};

function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
/* 
Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321 */

function descendingOrder(n) {
  if (n === undefined || null || NaN) return;
  let num = [...n.toString()].sort((a, b) => b - a);
  return Number(num.join(""));
}

// checar array from en lugar de split

function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}
