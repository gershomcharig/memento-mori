"use strict";

// Global variables
const dateOfBirth = new Date(1988, 7, 22);
const lifeExpectancy = 90;
const now = new Date();

const msPerMinute = 60 * 1000;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;
const msPerMonth = msPerDay * 30;
const msPerYear = msPerDay * 365;

const yearsLived = (now - dateOfBirth) / msPerYear;
const yearsRemaining = lifeExpectancy - yearsLived;
const yearsLivedPerc = (yearsLived / lifeExpectancy) * 100;
const yearsRemainingPerc = (yearsRemaining / lifeExpectancy) * 100;

// UI classes
const labelDateOfBirth = document.querySelector(".dateOfBirth");
const labelYearsLived = document.querySelector(".yearsLived");
const labelYearsRemaining = document.querySelector(".yearsRemaining");

const calendar = document.querySelector(".calendar");
const calendarCell = document.querySelector(".calendar--cell");

// Build the UI
labelDateOfBirth.textContent = `${new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(dateOfBirth)}`;
labelYearsLived.textContent = `${yearsLived.toFixed(1)} (${yearsLivedPerc.toFixed(1)}%)`;
labelYearsRemaining.textContent = `${yearsRemaining.toFixed(1)} (${yearsRemainingPerc.toFixed(1)}%)`;

for (let i = 0; i < 52 * lifeExpectancy; i++) {
  i <= yearsLived * 52
    ? calendar.insertAdjacentHTML("beforeend", `<div class="calendar--cell filled"></div>`)
    : calendar.insertAdjacentHTML("beforeend", `<div class="calendar--cell"></div>`);
}
