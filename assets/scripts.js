/** Funções relacionadas a fibonacci */

function Fibro(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  } else {
    return Fibro(n - 1) + Fibro(n - 2);
  }
}

function fibonacciRec() {
  const value = document.getElementById('fibo-rec-value').value;
  const spanFibRecResult = document.getElementById('fibo-rec-result');

  if (value < 0) {
    return (spanFibRecResult.textContent =
      'O número que você digitou é inválido, tente um número maior ou igual a 0.');
  }

  if (value == 0 || value == 1) {
    return (spanFibRecResult.textContent = `Seu resultado é: ${value}`);
  }

  return (spanFibRecResult.textContent = `Seu resultado é: ${Fibro(value)}`);
}

function fibonacciLin() {
  const value = document.getElementById('fibo-lin-value').value;
  const spanFibRecResult = document.getElementById('fibo-lin-result');

  if (value < 0) {
    return (spanFibRecResult.textContent =
      'O número que você digitou é inválido, tente um número maior ou igual a 0.');
  }

  if (value == 0 || value == 1) {
    return (spanFibRecResult.textContent = `Seu resultado é: ${value}`);
  }

  const arrayFibonacci = [];
  for (let i = 0; i < value; i++) {
    if (i == 0) {
      arrayFibonacci.push(0);
    } else if (i == 1) {
      arrayFibonacci.push(1);
    } else {
      arrayFibonacci.push(arrayFibonacci[i - 1] + arrayFibonacci[i - 2]);
    }
  }

  return (spanFibRecResult.textContent = `Seu resultado é: ${
    arrayFibonacci[value - 1] + arrayFibonacci[value - 2]
  }`);
}

/** Funções relacionadas a número primo */

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function primoRec() {
  const value = document.getElementById('primo-rec-value').value;
  const spanResult = document.getElementById('primo-rec-result');

  if (value <= 1) {
    return (spanResult.textContent =
      'O número que você digitou é inválido, tente um número maior que 1.');
  }

  const result = [];
  for (let i = 2; i <= value; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }

  return (spanResult.textContent = `Seu resultado é: [ ${result} ]`);
}

function primoLin() {
  const value = document.getElementById('primo-lin-value').value;
  const spanResult = document.getElementById('primo-lin-result');

  if (value <= 1) {
    return (spanResult.textContent =
      'O número que você digitou é inválido, tente um número maior que 1.');
  }

  const arrayLinear = [];
  for (let i = 2; i <= value; i++) {
    arrayLinear.push(i);
  }

  const result = arrayLinear.filter(num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });

  return (spanResult.textContent = `Seu resultado é: [ ${result} ]`);
}
