function analysis(array) {
  
  const average = getAverage(array);
  const min = getMin(array);
  const max = getMax(array);

  return {
    average,
    min,
    max,
    length: array.length
  }
}

function getAverage(array) {
  return array.reduce((total, element) => total + element, 0) / array.length;
}

function getMin(array) {
  return array.reduce((min, element) => element < min ? element : min, array[0]);
}

function getMax(array) {
  return array.reduce((max, element) => element > max ? element : max, array[0]);
}

module.exports = analysis;