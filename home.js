let feetInput = document.getElementById("feetInput")
let minsInput = document.getElementById("minsInput")
let celsiusInput = document.getElementById("celsiusInput")


function convertToInches() {
  inchesParagraph.innerHTML = feetInput.value * 12 + " inches"
}

function convertToSeconds() {
  secondsParagraph.innerHTML = minsInput.value * 60 + " seconds"
}

function convertToFahrenheit() {
  fahrenheitParagraph.innerHTML = (celsiusInput.value * 9 / 5) + 32 + " fahrenheit"
}