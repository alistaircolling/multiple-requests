const fetch = require("node-fetch");

const requestOne = async (urls) => {
  return fetch(urls[0])
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => console.log("fetch failed", err));
};

const requestMutliple = async (urls) => {
  const promises = urls.map((url) => {
    return fetch(url);
  });
  console.log(promises);

  return Promise.allSettled(promises)
    .then((response) => {
      console.log(response);
      response.forEach((respons) => console.log(respons));
      return response;
    })
    .catch((err) => console.log(err));
};

module.exports = requestMutliple;
