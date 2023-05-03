// получаем элементы

const elPower = document.getElementById('power').value;
const elEnter = document.getElementById('enters').value;

const setDisplay5 = document.querySelector('.setDisplay5');
const setDisplay7 = document.querySelector('.setDisplay7');
const setDisplay9 = document.querySelector('.setDisplay9');

// объекты с значениями

const allValue = {
  power: null,
  voltage: null,
  metal: null,
  enter: null,
  transformerW: null,
  voltageInput: null,
  voltageExit: null,
  wishes: null,
  schemeNumber5: null,
  schemeNumber7: null,
  schemeNumber9: null,
};

// функция добавления элементов в объект

const addItemToObj = (id, groupName) => {
  document.getElementById(id).addEventListener(
    'change', () => {
      allValue[groupName] = document.getElementById(id).value;
      console.log(allValue)
    }
  )
}

// после изменения в select отрабатывает функция и кидает в объект, если надо переопределяет

elPower.onchange = addItemToObj('power', 'power');

document.getElementById('voltage').onchange = addItemToObj( 'voltage', 'voltage');

document.getElementById('metals').onchange = addItemToObj( 'metals', 'metal');

elEnter.onchange = addItemToObj( 'enters', 'enter');

// получаем src картинок

let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
let image4 = document.getElementById('image4');
let image5 = document.getElementById('image5');
let image6 = document.getElementById('image6');
let image7 = document.getElementById('image7');
let image8 = document.getElementById('image8');
let image9 = document.getElementById('image9');
let image10 = document.getElementById('image10');
let image11 = document.getElementById('image11');

// отображаем сами картинки по условию

setInterval(() => {
  if (Number(allValue.power) <= 630 && allValue.enter === 'KK/KV') { // в () условие для отображения
    setDisplay5.style.display = 'flex';  //по дефолту у нас diplay none у всех картинок (сделано чтобы не было голых изображений на пейдже, так как они уже у нас инициализированы)
    image1.src = `./src/img/5.1/110.5.png`;  //добавляем к каждой картинке src картинки
    image2.src = `./src/img/5.1/110.6.png`;
    image3.src = `./src/img/5.1/110.10.png`;
    image4.src = `./src/img/5.1/110.12.png`;
    image5.src = `#`; //пятого элемента нет, ставим diplay none чтобы не было отсутствия картинки на странице
    image5.style.display = 'none';

  }
  else if (1000 >= Number(allValue.power) <= 2500 && allValue.enter === 'KK/KV') {
    setDisplay5.style.display = 'flex';
    image1.src = `./src/img/5.2/110.7.png`;
    image2.src = `./src/img/5.2/110.8.png`;
    image3.src = `./src/img/5.2/110.14.png`;
    image4.src = `./src/img/5.2/110.16.png`;
    image5.src = `#`;
    image5.style.display = 'none';
  }
  else if (Number(allValue.power) <= 630 && allValue.enter === 'VK/VV') {
    setDisplay5.style.display = 'flex';
    image1.src = `./src/img/5.3/111.1.png`;
    image2.src = `./src/img/5.3/111.3.png`;
    image3.src = `./src/img/5.3/111.4.png`;
    image4.src = `./src/img/5.3/111.9.png`;
    image5.src = `./src/img/5.3/111.11.png`;
  }
  else if (1000 >= Number(allValue.power) <= 2500 && allValue.enter === 'VK/VV') {
    setDisplay5.style.display = 'flex';
    image1.src = `./src/img/5.4/111.13.png`;
    image2.src = `./src/img/5.4/111.15.png`;
    image3.src = `./src/img/5.4/111.25.png`;
    image4.src = `./src/img/5.4/111.26.png`;
    image5.src = `#`;
    image5.style.display = 'none';
  }

  if (allValue.power !== null && allValue.voltage !== null && allValue.metal !== null && allValue.enter !== null) {
    document.querySelector('.inputTransformer').style.display = 'flex';
    document.querySelector('.voltageInput').style.display = 'flex';
    document.querySelector('.lastQuestions').style.display = 'flex';
  }
}, 1000) //таймер в мс, можем изменять для скорости отображения (приемлемая скорость 1000мс)


const transformerValue = document.getElementById('transformer') // получаем инпуты
const voltageInputValue = document.getElementById('VInput') // получаем инпуты

transformerValue.onchange = () => { //при изменении инпута мы добавляем в src картинок путь
  allValue.transformerW = transformerValue.value; // закидываем в объект значения инпута
  setInterval(() => { //будет проверять изменения 1 и 4 select'a, в ином случае у нас будет работать от onchange
    if (Number(allValue.power) <= 1250) {
      setDisplay7.style.display = 'flex';
      image6.src = `./src/img/7.1/210.1.png`;
      image7.src = `./src/img/7.1/210.3.png`;
      image8.src = `./src/img/7.1/210.4.png`;
    }
    else if (Number(allValue.power) >= 1600) {
      setDisplay7.style.display = 'flex';
      image6.src = `./src/img/7.2/210.4.png`;
      image7.src = `#`;
      image8.src = `#`;
      image7.style.display = 'none'
      image8.style.display = 'none'
    }
  }, 1000)
}

voltageInputValue.onchange = () => {
  allValue.voltageInput = voltageInputValue.value
  setInterval(() => {
    if (Number(allValue.power) <= 1250) {
      setDisplay9.style.display = 'flex';
      image9.src = `./src/img/9.1/211.5.png`;
      image10.src = `./src/img/9.1/211.6.png`;
      image11.src = `./src/img/9.1/211.7.png`;
    }
    else if (Number(allValue.power) >= 1600) {
      setDisplay9.style.display = 'flex';
      image9.src = `./src/img/9.2/211.5.png`;
      image10.src = `./src/img/9.2/211.6.png`;
      image11.src = `#`;
      image11.style.display = 'none'
    }
  },1000)
}

//получаем инпуты с последних двух вопросов

const voltExit = document.getElementById('question10Input');
const userWishes = document.getElementById('question11Input');

// добавляем значения двух последних инпутов в объект

voltExit.onchange = () => {
  allValue.voltageExit = voltExit.value;
}

userWishes.onchange = () => {
  allValue.wishes = userWishes.value
}

function addSchemeNumber(id, groupName) {
  document.getElementById(id).addEventListener(
    'click', (from, length) => {
      const defoltImage = document.getElementById(id).src //убираем лишнее с ссылки
      const splitImage = defoltImage.substring(42, defoltImage.length)
      const splitPng = splitImage.substring(0, splitImage.length - 4)
      allValue[groupName] = splitPng;
      console.log(allValue)
    }
  )
}

// забиваем по клику src картинки в object и в функции отрезаем не нужные куски

image1.onclick = addSchemeNumber('image1', 'schemeNumber5');
image2.onclick = addSchemeNumber('image2', 'schemeNumber5');
image3.onclick = addSchemeNumber('image3', 'schemeNumber5');
image4.onclick = addSchemeNumber('image4', 'schemeNumber5');
image5.onclick = addSchemeNumber('image5', 'schemeNumber5');

image6.onclick = addSchemeNumber('image6', 'schemeNumber7');
image7.onclick = addSchemeNumber('image7', 'schemeNumber7');
image8.onclick = addSchemeNumber('image8', 'schemeNumber7');

image9.onclick = addSchemeNumber('image9', 'schemeNumber9');
image10.onclick = addSchemeNumber('image10', 'schemeNumber9');
image11.onclick = addSchemeNumber('image11', 'schemeNumber9');

// находим форму
let form = document.querySelector('#result_form')
let link = document.querySelector('#result_link')

document.getElementById('js_send').onclick = (e) => {
  document.getElementById('answer1').innerHTML = `Мощность ТП: ${allValue.power}кВА`
  document.getElementById('answer2').innerHTML = `Напряжение ВН/НН: ${allValue.voltage}кВ`
  document.getElementById('answer3').innerHTML = `Материал корпуса: ${allValue.metal}`
  document.getElementById('answer4').innerHTML = `Ввод/вывод РУВН/РУНН: ${allValue.enter}`
  document.getElementById('answer5').innerHTML = `Выбор схемы в 5 пункте: ${allValue.schemeNumber5}`
  document.getElementById('answer6').innerHTML = `Мощность силового трансформатора: ${allValue.transformerW}`
  document.getElementById('answer7').innerHTML = `Выбор схемы в 7 пункте: ${allValue.schemeNumber7}`
  document.getElementById('answer8').innerHTML = `Номинальный ток вводного коммутационного аппарата: ${allValue.voltageInput}`
  document.getElementById('answer9').innerHTML = `Выбор схемы в 9 пункте: ${allValue.schemeNumber9}`
  document.getElementById('answer10').innerHTML = `Номинальный ток коммутационных аппаратов на отходящих линиях : ${allValue.voltageExit}`
  document.getElementById('answer11').innerHTML = `Пожелания клиента : ${allValue.wishes}`
  form.style.display = 'flex'
  createLinkToSchema()
}

function createLinkToSchema(){
  if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.5' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.1.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.6' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.2.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.10' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.3.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.12' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.4.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.5' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.5.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.6' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.6.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.10' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.7.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.12' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.8.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.5' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.9.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.6' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.10.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.10' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.11.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.12' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.12.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.5' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.13.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.6' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.14.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.10' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.15.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.12' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.16.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.5' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.17.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.6' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.18.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.10' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.19.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.12' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.20.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.5' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.21.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.6' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.22.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.10' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.23.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.12' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.24.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.5' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.25.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.6' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.26.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.10' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.27.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.12' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.28.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.5' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.29.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.6' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.30.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.10' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.31.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.12' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.32.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.5' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.33.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.6' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.34.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.10' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.35.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '110.12' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.36.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.7' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.37.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.8' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.38.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.14' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.39.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.16' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.40.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.7' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.41.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.8' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.42.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.14' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.43.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.16' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.44.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.7' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.45.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.8' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.46.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.14' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.47.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.16' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.48.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.7' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.49.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.8' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.50.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.14' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.51.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.16' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.52.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.7' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.53.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.8' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.54.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.14' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.55.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.16' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.56.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.7' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.57.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.8' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.58.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.14' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.59.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.16' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.60.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.7' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.61.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.8' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.62.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.14' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.63.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.16' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.64.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.7' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.65.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.8' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.66.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.14' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.67.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.16' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.68.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.7' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.69.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.8' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.70.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.14' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.71.pdf`)
  } else if (Number(allValue.power) >= 1000 && Number(allValue.power) <= 1250 && allValue.schemeNumber5 === '110.16' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.7'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.72.pdf`)
  } else if (Number(allValue.power) >= 1600 && Number(allValue.power) <= 2500 && allValue.schemeNumber5 === '110.7' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.73.pdf`)
  } else if (Number(allValue.power) >= 1600 && Number(allValue.power) <= 2500 && allValue.schemeNumber5 === '110.8' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.74.pdf`)
  } else if (Number(allValue.power) >= 1600 && Number(allValue.power) <= 2500 && allValue.schemeNumber5 === '110.14' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.75.pdf`)
  } else if (Number(allValue.power) >= 1600 && Number(allValue.power) <= 2500 && allValue.schemeNumber5 === '110.16' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.76.pdf`)
  } else if (Number(allValue.power) >= 1600 && Number(allValue.power) <= 2500 && allValue.schemeNumber5 === '110.7' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.77.pdf`)
  } else if (Number(allValue.power) >= 1600 && Number(allValue.power) <= 2500 && allValue.schemeNumber5 === '110.8' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.78.pdf`)
  } else if (Number(allValue.power) >= 1600 && Number(allValue.power) <= 2500 && allValue.schemeNumber5 === '110.14' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.79.pdf`)
  } else if (Number(allValue.power) >= 1600 && Number(allValue.power) <= 2500 && allValue.schemeNumber5 === '110.16' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.80.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.1' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.81.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.3' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.82.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.4' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.83.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.9' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.84.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.11' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.85.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.11' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.86.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.3' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.87.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.4' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.88.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.9' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.89.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.11' && allValue.schemeNumber7 === '210.3' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.90.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.1' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.91.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.3' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.92.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.4' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.93.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.9' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.94.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.11' && allValue.schemeNumber7 === '210.4' && allValue.schemeNumber9 === '211.5'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.95.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.1' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.96.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.3' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.97.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.4' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.98.pdf`)
  } else if (Number(allValue.power) <= 630 && allValue.schemeNumber5 === '111.9' && allValue.schemeNumber7 === '210.1' && allValue.schemeNumber9 === '211.6'){
    link.setAttribute("href", `https://xn--80aaefjbqfsdyj4agz4o7a.xn--p1ai/upload/configurator1/schemes/1.1/1.99.pdf`)
  }
}

  // data_js['subject'] = 'Сюда вбиваем заголовок :)';  // сюда забиваем название письма
  // data_js['text'] = `
  // 1. Мощность ТП: ${allValue.power}кВА
  // 2. Напряжение ВН/НН: ${allValue.voltage}кВ
  // 3. Материал корпуса: ${allValue.metal}
  // 4. Ввод/вывод РУВН/РУНН: ${allValue.enter}
  // 5. Выбор схемы в 5 пункте: ${allValue.schemeNumber5}
  // 6. Мощность силового трансформатора: ${allValue.transformerW}
  // 7. Выбор схемы в 7 пункте: ${allValue.schemeNumber7}
  // 8. Номинальный ток вводного коммутационного аппарата: ${allValue.voltageInput}
  // 9. Выбор схемы в 9 пункте: ${allValue.schemeNumber9}
  // 10. Номинальный ток коммутационных аппаратов на отходящих линиях : ${allValue.voltageExit}
  // 11. Пожелания клиента : ${allValue.wishes}
  // `; // сюда мы передаем значения с объекта
