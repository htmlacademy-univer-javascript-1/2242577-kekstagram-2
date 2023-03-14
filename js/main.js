// eslint-disable-next-line no-unused-vars
function getRandoInt(min, max){
  if(min < 0 || max < 0){
    throw new RangeError('Числа должны быть положительными');
  }
  if (min === max){
    return min;
  }
  if (min > max){
    [min, max] = [max, min];
  }
  return Math.round(Math.random()*(max-min)+min);
}

// eslint-disable-next-line no-unused-vars
const isCorrectLength = (line, maxLenght) => {
  if (typeof line !== 'string'){
    throw new RangeError('Значение line должно быть строкой');
  }
  return line.length <= maxLenght;
};
