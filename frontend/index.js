const url =
  "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f39440bbd537c7c2d8d8de2917899ed3&text=cat&per_page=12&page=1&format=json&nojsoncallback=1";

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

getData();
