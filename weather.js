const weather = document.querySelector(".js-weather");

const API_KEY = "464383482a8b0aece4b6285686b65997";
//API_KEY를 통해서 사용자가 많은 정보를 요구하여 서버에 무리를 주고 있지는 않은지 확인

const COORDS = "coords";

function getWeather(lat, long) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
  )
//우리가 데이터를 가져오고자 하는 url을 매개변수로 받아온 lat와 long을 사용하여 만듦

    .then(function(response) {
      return response.json();
			//network에 존재하는 json 객체를 가져오는 코드
			//개발자도구에서 이 json 객체에 우리가 원하는 데이터가 담긴 것을 확인할 수 있다.
    })
    .then(function(json) {
			//위에서 가져온 json파일에 들어있는 데이터를 활용하여 HTML에 이 데이터를 삽입하기
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature}℃ @ ${place}`;

    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Cannot access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();