const requestMutliple = require("../index");
// var fs = require("fs");

// fs.readFile("temp.txt", function(err, buf) {
//   console.log(buf.toString());
// });

const urls = [
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json",
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json",
];

test("hello", async () => {
  const result = await requestMutliple(urls);
  console.log(result);
  expect(result).toBe(2);
});
