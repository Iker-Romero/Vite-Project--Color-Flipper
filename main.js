import "./style.css";

const COLOR_PALETTE = {
  "#ED254E": "Red Crayola",
  "#F9DC5C": "Naples Yellow",
  "#F4FFFD": "Mint Cream",
  "#011936": "Oxford Blue",
  "#465362": "Black Coral",
};

const addOptionsToColorPicker = () => {
  Object.keys(COLOR_PALETTE).forEach((key) => {
    document.querySelector("#color-picker").innerHTML += `
    <option value="${key}">${COLOR_PALETTE[key]}</option>
    `;
  });
};

const addEventListenerToColorPicker = () => {
  document
    .querySelector("#color-picker")
    .addEventListener("change", (event) => {
      document.body.style.backgroundColor = event.target.value;
      document.querySelector("#color-name").innerHTML = COLOR_PALETTE[
        event.target.value
      ]
        ? event.target.value
        : "-";
    });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
