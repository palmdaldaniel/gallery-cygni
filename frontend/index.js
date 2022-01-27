const form = document.querySelector("#form");
const input = document.querySelector("#search-input");
const galleryWrapper = document.querySelector(".gallery-wrapper");
const url = "http://localhost:3000/api/v1/search";

//  output welcome message when app fires upp 🔥
(function () {
  console.log('hello');
  galleryWrapper.innerHTML = 
  `<div>
    hello
  </div>`
})();



let loader = false;

const getData = async (value) => {
  try {
    loader = true;

    let result = await fetch(`${url}?search=${value}`);
    result = await result.json();
    loader = false;

    console.log("result", result);
    buildHtmlOutput(result.data);
  } catch (error) {
    console.log(error);
  }
};

const buildHtmlOutput = ({ photo }) => {
  const content = photo.map((item, i) => {
    return `
      <div class="galler-item">
        <figure>
          <img src="https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg" alt></img>
          <figcaption>${item.title}<figcaption>
        </figure>
      </div>`;
  });

  galleryWrapper.innerHTML = content.join(" ");
};

const handleSubmit = () => {};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = form.search.value.trim();
  getData(inputText);
  form.reset();
});
