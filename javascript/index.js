function updateTime() {
  // Jakarta
  let jakartaElement = document.querySelector("#jakarta");
  let jakartaDateElement = jakartaElement.querySelector(".date");
  let jakartaTimeElement = jakartaElement.querySelector(".time");
  let jakartaTime = moment().tz("Asia/Jakarta");

  jakartaDateElement.innerHTML = jakartaTime.format("MMMM Do YYYY");
  jakartaTimeElement.innerHTML = jakartaTime.format(
    "h:mm:ss:SS [<small>]A[</small>]"
  );

  // Brussels
  let brusselsElement = document.querySelector("#brussels");
  let brusselsDateElement = brusselsElement.querySelector(".date");
  let brusselsTimeElement = brusselsElement.querySelector(".time");
  let brusselsTime = moment().tz("Europe/Brussels");

  brusselsDateElement.innerHTML = brusselsTime.format("MMMM Do YYYY");
  brusselsTimeElement.innerHTML = brusselsTime.format(
    "h:mm:ss:SS [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1);
