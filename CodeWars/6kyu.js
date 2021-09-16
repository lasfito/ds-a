// k01 - Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

// Example
//   deleteNth ([1,1,1,1],2) // return [1,1]

function deleteNth(arr, n) {
  // ...
  const newArr = [];
  const listado = {};
  arr.forEach((numero) => {
    if (listado[numero]) {
      listado[numero] += 1;
    } else if (!listado[numero]) {
      listado[numero] = 1;
    }

    if (listado[numero] <= n) {
      newArr.push(numero);
    }
  });

  console.log(newArr, listado);
  return newArr;
}

function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

function deleteNth(arr, x) {
  var count = {};
  return arr.filter(function (a) {
    count[a] = ~~count[a] + 1;
    return count[a] <= x;
  });
} //BITWISE NOT OPERATOR - So when you call ~undefined you get -1, and he wants 0, so its ~~.

// // k02 - Tribonacci Sequence
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array.

function tribonacci(signature, n) {
  // condicion inicial
  if (n == 0) return [];
  if (n == 1) return [signature[0]];
  if (n == 2) return signature[0] + signature[1];
  if (n == 3)
    return signature.reduce((accumulator, curr) => accumulator + curr);

  //variables
  let contador = 0;
  const newArr = [...signature];

  while (contador < n - 3) {
    //sumar 3 originales
    let tripleSuma = signature.reduce(
      (accumulator, curr) => accumulator + curr
    );
    //actualizar nuevo array
    newArr.push(tripleSuma);
    // actualizar base 3
    signature.push(tripleSuma);
    signature.shift();
    // actualizar contador while
    contador += 1;
  }
  return newArr;
}

function tribonacci(s, n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(i < 3 ? s[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }
  return arr;
}

// Complete the solution so that the function will break up camel casing, using a space between words.

/* Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

function solution(string) {
  let newStr = "";
  [...string].forEach((letra) => {
    if (letra === letra.toUpperCase()) {
      newStr += ` ${letra}`;
    } else {
      newStr += letra;
    }
  });

  return newStr;
}

// complete the function
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

//The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
/* 
Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the r */

function tickets(peopleInLine) {
  let cash = 0;
  let boleto = 25;
  let sinCambio = false;

  for (let index = 0; index < peopleInLine.length; index++) {
    let pago = peopleInLine[index];
    console.log("tengo", cash, "cash y vino un men con", pago);
    if (pago > boleto) {
      cash -= pago - boleto;
      console.log("le di", pago - boleto, "de cambio y me quedan", cash);
    }
    if (cash < 0) {
      sinCambio = true;
    }
    if (sinCambio == true) {
      console.log(" por lo tanto me quede sin cambio");
    }
    cash += pago;
  }

  if (sinCambio == true) return "NO";

  return "YES";
}

function tickets(peopleInLine){
  let [c25,c50,c100] = [0,0,0];
  for(let v of peopleInLine) {
    if(v===25) c25++;
    if(v===50) {c50++; c25--;}
    if(v===100) {c25--; c50>0?c50--:c25-=2;}
    if(c25<0||c50<0) return 'NO'
  }
  return 'YES'
}


// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
/* 
Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361] */

function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

function comp(a, b) {
  return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}

function comp(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  return a.map(x => x * x).sort().toString() === b.sort().toString();
}