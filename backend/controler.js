const axios = require("axios");
const apiKey = "f39440bbd537c7c2d8d8de2917899ed3";
const baseUrl =
  "https://www.flickr.com/services/rest/?method=flickr.photos.search";

const getDataByInput = async (req, res) => {
  const searchstring = req.query.search;
  try {
    let result = await axios.get(
      `${baseUrl}&api_key=${apiKey}&text=${searchstring}&per_page=12&page=1&format=json&nojsoncallback=1`
    );

    res.status(200).json({ msg: "response ok", data: result.data.photos });
  } catch (error) {
    res.status(500).json({ msg: "bad request" });
  }
};

module.exports = {
  getDataByInput,
};
