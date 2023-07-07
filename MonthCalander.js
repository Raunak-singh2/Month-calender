console.log("hellow.....");
const monthsEl = document.querySelector(".date h1");
const dateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

const monthIndex = new Date().getMonth();
const daysIndex = new Date().toDateString();
const lastDate = new Date(
  new Date().getFullYear(),
  monthIndex + 1,
  0
).getDate();
const currentDay =
  new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;
console.log(currentDay);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
monthsEl.innerText = months[monthIndex];
dateEl.innerText = daysIndex;

let days = "";

for (let i = currentDay; i > 0; i--) {
  days = `
    <div class="empty"></div>
    <div class="empty"></div>
      `;
}

for (let i = 1; i <= lastDate; i++) {
  if (i == new Date().getDate()) {
    days += `
        <div class="todays">${i}</div>
          `;
  } else {
    days += `
        <div>${i}</div>
          `;
  }
}

daysEl.innerHTML = days;
