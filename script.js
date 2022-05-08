"use strict";

// Global variables
const dateOfBirth = new Date(1988, 7, 22);
const now = new Date();

const msPerMinute = 60 * 1000;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;
const msPerMonth = msPerDay * 30;
const msPerYear = msPerDay * 365;

const yearsLived = (now - dateOfBirth) / msPerYear;
const yearsRemaining = 90 - yearsLived;
const yearsLivedPerc = (yearsLived / 90) * 100;
const yearsRemainingPerc = (yearsRemaining / 90) * 100;

// UI
const labelDateOfBirth = document.querySelector(".dateOfBirth");
const labelYearsLived = document.querySelector(".yearsLived");
const labelYearsRemaining = document.querySelector(".yearsRemaining");

// Build the UI
labelDateOfBirth.textContent = `${new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(dateOfBirth)}`;
labelYearsLived.textContent = `${yearsLived.toFixed(1)} (${yearsLivedPerc.toFixed(1)}%)`;
labelYearsRemaining.textContent = `${yearsRemaining.toFixed(1)} (${yearsRemainingPerc.toFixed(1)}%)`;
