// k01 - Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

// Example
//   deleteNth ([1,1,1,1],2) // return [1,1]

function deleteNth(arr,n){
    // ...
    const newArr = [];
    const listado = {};
    arr.forEach(numero => {
        if (listado[numero]) { listado[numero] += 1
        } else if (!listado[numero]) {listado[numero] = 1}

        if (listado[numero] <= n) {
            newArr.push(numero);
        }
    });

    console.log(newArr, listado)
    return newArr
  }

  function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
  }

  function deleteNth(arr,x){
    var count = {};
    return arr.filter(function(a){
      count[a] = ~~count[a]+1;
      return count[a]<=x;
    })
  } //BITWISE NOT OPERATOR - So when you call ~undefined you get -1, and he wants 0, so its ~~. 


  // // k02 - Tribonacci Sequence
  // So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

  // [1, 1 ,1, 3, 5, 9, 17, 31, ...]
  // But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
  
  // [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
  // Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
  
  // Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array.

  function tribonacci(signature,n){
    // condicion inicial
    if (n == 0) return [];
    if (n == 1) return [signature[0]];
    if (n == 2) return signature[0] + signature[1];
    if (n == 3) return signature.reduce((accumulator, curr) => accumulator + curr);
    
    //variables
    let contador = 0;
    const newArr = [...signature];
    
    while ( contador < n -3) {
   
    //sumar 3 originales
    let tripleSuma = signature.reduce((accumulator, curr) => accumulator + curr);
    //actualizar nuevo array
    newArr.push(tripleSuma)
    // actualizar base 3
    signature.push(tripleSuma);
    signature.shift()
    // actualizar contador while  
    contador += 1;  
    
      
    
    }
   return newArr;
  }

  function tribonacci(s,n){
    var arr = [];
    for(var i=0; i<n; i++) {
      arr.push((i<3) ? s[i] : arr[i-1]+arr[i-2]+arr[i-3]);
    }
    return arr;
  }