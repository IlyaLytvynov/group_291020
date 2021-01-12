const numbers = [];

for(let input; input === undefined || input;) {
  input = prompt('Enter number!');
  if (input === null || input === '') {
    continue;
  }

  const maybeNumber = Number(input);

  if (isNaN(maybeNumber)) {
    continue;
  }

  numbers.push(maybeNumber);
}

let total = 0;
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  total = total + numbers[i];
}

alert(total/numbers.length);