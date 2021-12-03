const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
        return;
      }

      const data = JSON.parse(body);
      const cat = data[0];
      if (!cat) {
        callback(`Breed is not found.`, null);
        return;
      }

      callback(null, cat.description);
    }
  );
};

module.exports = { fetchBreedDescription };
