const url = "http://localhost:3000/api/v1/search"

let loader = false;

const getData = async () => {
  try {
    loader = true;
    console.log(loader);

    let result = await fetch(url);
    result = await result.json();
    loader = false;
    console.log(loader);
    console.log('result', result);
  } catch (error) {
      console.log(error);
  }
};


const button  = document.querySelector('button')
button.addEventListener('click', () => {

  console.log('clicking');

  getData();
})