const cups = document.querySelector(".cups");
const checkIcon = document.querySelectorAll(".check-icon");
const waterCheck = document.querySelectorAll(".water_check");
console.log(checkIcon, waterCheck);
const max = waterCheck.length;
var waterCount = 0;
var topp = 80;
const bottle = document.querySelector(".bottle_waves");
console.log(bottle);

cups.onclick = function (e) {
  var target = e.target;
  if (
    target.classList.contains("check-icon") &&
    !target.classList.contains("active")
  ) {
    target.classList.add("active");
    /*waterCount+=1;
        topp = topp-11.6;
        bottle.style.top = `${topp}%`;
        console.log(waterCount, 'top -', topp);*/
  } else {
    target.classList.remove("active");
    waterCount -= 1;
    /*topp = topp+11.6;
        bottle.style.top = `${topp}%`;
        console.log(waterCount, 'top -', topp);*/
  }

  for (let i = max - 1; i >= 0; i--) {
    if (checkIcon[i].classList.contains("all")) {
      if (waterCheck[i].classList.contains("animated")) {
        topp = topp + 11.6;
        bottle.style.top = `${topp}%`;
        console.log(i, "top -", topp);
      }
      console.log(i);
      checkIcon[i].classList.remove("active");
      checkIcon[i].classList.remove("all");
    }
  }

  for (let i = max - 1; i >= 0; i--) {
    console.log(i);
    if (checkIcon[i].classList.contains("active")) {
      for (i; i >= 0; i--) {
        if (!waterCheck[i].classList.contains("animated")) {
          topp = topp - 11.6;
          bottle.style.top = `${topp}%`;
          console.log(i, i, "top -", topp);
          checkIcon[i].classList.add("active");
          checkIcon[i].classList.add("all");
        } else {
          topp = topp - 11.6;
          bottle.style.top = `${topp}%`;
          console.log(i, i, "top -", topp);
          checkIcon[i].classList.add("active");
          checkIcon[i].classList.add("all");
        }
      }
    }
  }
  for (let i = 0; i < max; i++) {
    if (checkIcon[i].classList.contains("active")) {
      waterCheck[i].classList.add("animated");
    } else {
      waterCheck[i].classList.remove("animated");
    }
  }
};

function updateCurrentDate() {
  const currentDateElement = document.getElementById("currentDate");

  const currentDate = new Date().toLocaleDateString("en-GB");
  const currentTime = new Date().toLocaleTimeString();

  const formattedDate = `Today: ${currentDate} ${currentTime}`;

  currentDateElement.textContent = formattedDate;
}

setInterval(updateCurrentDate, 1000);
updateCurrentDate();
