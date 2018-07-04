function makeArray() {
  const array=[];
  for (let i=0;i<26;i++) {
    array.push(`I am ${i} strange loops.`);
  }
  return array;
}

function whileLoop(number) {
  let countdown=number;
  while (number > 0) {
    console.log(number--);
  }
}