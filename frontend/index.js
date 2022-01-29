// get element the user will interact with.
const form = document.querySelector("#form");
const formButton = document.querySelector("button");
const imageGrid = document.querySelector(".wrapper-gallery-grid");
const input = document.querySelector("#search-input");
const spinner = document.querySelector(".loading");
const userFeedBack = document.querySelector(".user-feedback")
const wrapperGallery = document.querySelector(".wrapper-gallery");

const url = "http://localhost:3000/api/v1/search";

let cache = [];

const getData = async (value) => {
  try {
    formButton.disabled = true;
    spinner.classList.add("show");

    let result = await fetch(`${url}?search=${value}`);
    result = await result.json();

    formButton.disabled = false;
    spinner.classList.remove("show");

    if (result.data.photo.length === 0) {
      buildUserFeedbackOutput("no data");
      return;
    }
    buildGalleryOutPut(result.data);

    //  add data to cache
    if (!checkCache(value)) {
      cache.push({
        [`${value}`]: result.data,
      });
    }
  } catch (error) {
    buildUserFeedbackOutput();
  }
};

const buildGalleryOutPut = ({ photo }) => {
 
  const content = photo.map((item) => {
    const url = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`;

    return `
        <figure>
          <img src="${url}"></img>
        </figure>
      `;
  });

  // add spacing to the background of the grid.
  wrapperGallery.classList.add("spacer");

  imageGrid.innerHTML = content.join(" ");
};

const buildUserFeedbackOutput = (value) => {
  let content;
  if (value === "no data") {
    content = `<p>Sorry, we found nothing that matched your search!<p>`;
  } else {
    content = `Something went wrong, try refresh the page!</p>`;
  }

  userFeedBack.innerHTML = content;


 
};


form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  imageGrid.innerHTML = "";
  userFeedBack.innerHTML = ""
  wrapperGallery.classList.remove("spacer");

  const inputText = form.search.value.trim();


  // check if same data is in cache already 
  const hasCache = checkCache(inputText);

  if (hasCache) {
    buildGalleryOutPut(hasCache);
    return;
  }

  getData(inputText);
});

const checkCache = (input) => {
  let isChached = false;
  cache.forEach((item) => {
    if (item.hasOwnProperty(input)) {
      return (isChached = item[input]);
    }
  });

  return isChached;
};
