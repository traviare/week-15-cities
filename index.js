const cities = ["Cанкт-Петербург", "Томск", "Астана", "Новосибирск", "Ташкент"];
const temperatures = [];
const findBody = document.querySelector("body");
const celsius = new Intl.NumberFormat("en-US", {
  style: "unit",
  unit: "celsius",
});

//функция для выведения максимальной и минимальной температуры
function a() {
  temperatures.sort(function (a, b) {
    return a - b;
  });
  let max = temperatures.pop();
  let min = temperatures.shift();
  let newElementOne = document.createElement("p");
  findBody.append(newElementOne);
  newElementOne.textContent = `Максимальная температура ${celsius.format(max)}`;
  let newElementTwo = document.createElement("p");
  findBody.append(newElementTwo);
  newElementTwo.textContent = `Минимальная температура ${celsius.format(min)}`;
}

// функция для выведения температуры в разных городах
function b() {
  for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите температуру для города ${cities[i]}`);
    temperatures.push(Number(temperature));
  }
  for (let i = 0; i < temperatures.length; i++) {
    let newElement = document.createElement("p");
    findBody.append(newElement);
    newElement.textContent = `Температура для города ${
      cities[i]
    } ${celsius.format(temperatures[i])}`;
  }
  a();
}

b();
