function updateTime() {
  // Jakarta
  let jakartaElement = document.querySelector("#jakarta");
  if (jakartaElement) {
    let jakartaDateElement = jakartaElement.querySelector(".date");
    let jakartaTimeElement = jakartaElement.querySelector(".time");
    let jakartaTime = moment().tz("Asia/Jakarta");

    jakartaDateElement.innerHTML = jakartaTime.format("MMMM Do YYYY");
    jakartaTimeElement.innerHTML = jakartaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Brussels
  let brusselsElement = document.querySelector("#brussels");
  if (brusselsElement) {
    let brusselsDateElement = brusselsElement.querySelector(".date");
    let brusselsTimeElement = brusselsElement.querySelector(".time");
    let brusselsTime = moment().tz("Europe/Brussels");

    brusselsDateElement.innerHTML = brusselsTime.format("MMMM Do YYYY");
    brusselsTimeElement.innerHTML = brusselsTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/" class="home">Back to all cities</a>
  
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
