const requestMutliple = require("../index");

const urls = [
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json",
];

test("hello", () => {
  return requestMutliple(urls).then((data) => {
    console.log(data);
    expect(data).toBe(3);
  });
});
