// get element the user will interact with.
const form = document.querySelector("#form");
const input = document.querySelector("#search-input");
const galleryWrapper = document.querySelector(".gallery-wrapper");
const imageGrid = document.querySelector(".image-grid")

const spinner = document.querySelector(".loading");
const formButton = document.querySelector("button");

const url = "http://localhost:3000/api/v1/search";

let cache;

const getData = async (value) => {
  try {
    formButton.disabled = true
    spinner.classList.add("show");

    let result = await fetch(`${url}?search=${value}`);
    result = await result.json();

    formButton.disabled = false
    spinner.classList.remove("show");
    buildHtmlOutput(result.data);

    // cache = {
    //   [`${value}`]: result.data,
    // };
  } catch (error) {
    console.log(error);
  }
};

const buildHtmlOutput = ({ photo }) => {
  const content = photo.map((item, i) => {
    const url = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`;

    return `
        <figure>
          <img src="${url}"></img>
        </figure>
      `;
  });

  imageGrid.innerHTML = content.join(" ");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  imageGrid.innerHTML = ''


  //console.log('cache', cache );
  const inputText = form.search.value.trim();
  getData(inputText);
});
