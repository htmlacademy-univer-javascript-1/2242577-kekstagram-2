const PFHOTOS_COUNT = 25;
const NAMES = ['Александр', 'Олежа', 'Дмитрий', 'Паша', 'Арсений'];
const DESCRIPTION = Array.from({length: PFHOTOS_COUNT},(_, i) =>`Описание ${i}`);
const COMMENT =['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const COMMENT_IDS= [];

function checkStringLength (string, length) {
  return string.length <= length;
}

const getRandomLikes = () => getRandoInt(15,200);
const getRandomElement = (arr) => arr[getRandoInt(0, arr.length-1)];


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

const getId = (()=>{
  let id =1;
  return() => id++;
})();

function getCommentId(){
  let id = getRandoInt(1,1000);
  while (COMMENT_IDS.includes(id)){
    id = getRandoInt(1, 1000);
  }
  return id;
}
function generateComment(){
  const commentText =[];
  for (let i=0; i< getRandoInt(1,2); i++){
    commentText.push(getRandomElement(COMMENT));}
  return {
    id: getCommentId(),
    avatar: `img/avatar-${getRandoInt(1,6)}.svg`,
    massage: commentText.join(''),
    name: getRandomElement(NAMES)};
}

function generateDescription(){
  const comments = Array.from({length: getRandoInt(0,3)},generateComment);
  const id = getId();
  return{
    id: id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTION[id-1],
    likes: getRandomLikes(),
    comments: comments
  };
}

const descriptions = Array.from({length: PFHOTOS_COUNT}, generateDescription);

checkStringLength(descriptions, PFHOTOS_COUNT);
