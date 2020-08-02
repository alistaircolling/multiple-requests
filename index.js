const fetch = require("node-fetch");

const requestPromises = (promises) => {
  const promise = promises.shift();
  promise.then;
};

const requestMutliple = async (urls) => {
  const result = await fetch(urls[0]).then((result) => result.text());
  return result;
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
