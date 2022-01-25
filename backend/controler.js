const axios = require("axios");

const url =
  "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f39440bbd537c7c2d8d8de2917899ed3&text=cat&per_page=12&page=1&format=json&nojsoncallback=1";

const getDataByInput = async (req, res) => {
  console.log("is something happening");

  try {
    let result = await axios.get(url);

    console.log(result.data.photos);

    res.json({ msg: "response ok", data: result.data.photos });
  } catch (error) {
    console.log("something went wrong", error);
  }
};

module.exports = {
  getDataByInput,
};
