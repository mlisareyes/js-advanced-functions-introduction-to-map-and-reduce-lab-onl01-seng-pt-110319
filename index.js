// Your code here
function mapToNegativize(numArray) {
  return numArray.map(num => num * -1)
}

function mapToNoChange(numArray) {
  return numArray
}

function mapToDouble(numArray) {
  return numArray.map(num => num * 2)
}

function mapToSquare(numArray) {
  return numArray.map(num => num ** 2)
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint

  sourceArray.forEach(function(source) {
    total += source;
  });
  return total
}

function reduceToAllTrue(sourceArray) {
  return sourceArray.every(Boolean)
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i])
      return true
  };
  return false;
};
