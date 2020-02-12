const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const userInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

let cities = [];

fetch(endpoint)
  .then(response => response.json())
  .then(data => (cities = data))
  .catch(err => {
    console.log("err: ", err);
  });

function searchInput(input, cities) {
  const regex = new RegExp(input, "gi"); // global, insensitive
  return cities.filter(
    place => place.city.match(regex) || place.state.match(regex)
  );
}

function displayData() {
  const filteredData = searchInput(this.value, cities);
  const html = filteredData
    .map(place => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );

      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.population}</span>
      </li>
      `;
    })
    .join("");

  suggestions.innerHTML = html;
}

// userInput.addEventListener("change", displayData);
userInput.addEventListener("keyup", displayData);
