const fetch = require("node-fetch");

/**
 * Fetches an array of URLs that contain JSON data
 *
 * @param   {[string]}  url  An array of URLs that contain JSON data
 *
 * @return  {[Promise]}      A pending Promise that will be asynchronously
 *                           fulfilled. Once resovled this is an iterable
 *                           object containing the outcome of each request
 *                           This is the same return value as Promise.allSettled`
 *                           please check official docs for more detail.
 */
const fetchAndParse = async (url) => {
  const result = await fetch(url).then((data) => {
    const { status } = data;
    switch (status) {
      case 200:
        return data.text().then((parsed) => parsed);
        break;
      default:
        return new Promise((resolve, reject) => {
          reject(`${status} ${data.statusText}`);
        });
    }
  });
  return result;
};

const requestMutlipleUrls = async (urls) => {
  return Promise.allSettled(urls.map((url) => fetchAndParse(url)));
};

module.exports = requestMutlipleUrls;
