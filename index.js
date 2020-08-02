const fetch = require("node-fetch");

const anAsyncFunction = async (url) => {
  const result = await fetch(url)
    .then((data) => data.text())
    .then((parsed) => parsed);
  return result;
};

const requestMutliple = async (urls) => {
  return Promise.all(urls.map((url) => anAsyncFunction(url)));
};
//   const promises = urls.map((url) => {
//     return fetch(url);
//   });
//   //Promise.allSettled(promises).then((result) => console.log(result));

//   // return promises
//   //   .reduce((promiseChain, currentTask) => {
//   //     return promiseChain.then((chainResults) =>
//   //       currentTask.then((currentResult) => {
//   //         console.log("current", currentResult.json());
//   //         return [...chainResults, currentResult];
//   //       })
//   //     );
//   //   }, Promise.resolve([]))
//   //   .then((arrayOfResults) => {
//   //     // Do something with all results
//   //     arrayOfResults.map((result) => console.log(result.));
//   //   });

//   return Promise.all(promises)
//     .then((response) => {
//       const results = [];
//       response.map((item) =>
//         item
//           .text()
//           .then((parsed) => results.push(parsed))
//           .then((results) => {
//             console.log(results);
//             return Promise.resolve(results);
//           })
//       );
//     })
//     .catch((err) => console.log(err));
// };

module.exports = requestMutliple;

// return Promise.all(promises)
//   .then((response) => {
//     return response[0].text();
//   })
//   .then((parsed) => console.log(parsed))
//   .catch((err) => console.log(err));
