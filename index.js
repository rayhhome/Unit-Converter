/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthFactor = 3.281;
const volumeFactor = 0.264;
const massFactor = 2.204;

const inputValue = document.getElementById("input-value");
const convertButton = document.getElementById("convert-button");

const lengthFeet = document.getElementById("length-feet");
const lengthMeters = document.getElementById("length-meters");
const volumeGallon = document.getElementById("volume-gallon");
const volumeLiters = document.getElementById("volume-liters");
const massPounds = document.getElementById("mass-pounds");
const massKilograms = document.getElementById("mass-kilograms");

inputValue.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent form submission if inside a form
    convertButton.click(); // Trigger the conversion when Enter pressed
  }
});

convertButton.addEventListener("click", () => {
  const value = parseFloat(inputValue.value);
  if (isNaN(value)) {
    alert("Please enter a valid number.");
    return;
  }

  lengthFeet.textContent = `${value} meters = ${(value * lengthFactor).toFixed(3)} feet`;
  lengthMeters.textContent = `${value} feet = ${(value / lengthFactor).toFixed(3)} meters`;

  volumeGallon.textContent = `${value} liters = ${(value * volumeFactor).toFixed(3)} gallons`;
  volumeLiters.textContent = `${value} gallons = ${(value / volumeFactor).toFixed(3)} liters`;

  massPounds.textContent = `${value} kilograms = ${(value * massFactor).toFixed(3)} pounds`;
  massKilograms.textContent = `${value} pounds = ${(value / massFactor).toFixed(3)} kilograms`;
})

// const widthValue = document.querySelector(".width-container");
// var onresize = function () {
//   widthValue.innerText = document.body.clientWidth + "px";
//   widthValue.classList.add('width-value');
//   setTimeout(() => {
//     widthValue.classList.remove('width-value');
//   }, 2000)
// }
// window.addEventListener("resize", onresize);