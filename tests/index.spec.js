const requestMutlipleUrls = require("../index");

const fsi = require("./test-data/ftse-fsi.json");
const hkd = require("./test-data/gbp-hkd.json");
const usd = require("./test-data/gbp-usd.json");
const testData = [fsi, hkd, usd];

const urls = [
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json",
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json",
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json",
];

const parseResults = (result) =>
  result.map((item) =>
    item.status === "fulfilled" ? JSON.parse(item.value) : item
  );

test("Fetches an array of URLs which contain JSON data ", async () => {
  const result = await requestMutlipleUrls(urls);
  const parsed = parseResults(result);
  expect(parsed).toStrictEqual(testData);
});

test("Returns a Promise", () => {
  requestMutlipleUrls(urls).then((result) => {
    const parsed = parseResults(result);
    expect(parsed[0]).toStrictEqual(testData[0]);
  });
});

test("Returns the data when there is only one URL", async () => {
  const result = await requestMutlipleUrls([urls[0]]);
  const parsed = parseResults(result);
  expect(parsed[0]).toStrictEqual(testData[0]);
});

test("Will return the correct status and relevant Error if a non HTTP(s) protocol is passed", async () => {
  const request = ["asdf://asdfads/asdf.json"];
  const result = await requestMutlipleUrls(request);
  expect(result[0].status).toStrictEqual("rejected");
  expect(result[0].reason.message).toStrictEqual(
    "Only HTTP(S) protocols are supported"
  );
});

test("Returns available data when a passed URL doesn't return data", async () => {
  const request = [...urls, "asdf://asdfads/asdf.json"];
  const result = await requestMutlipleUrls(request);
  const parsed = parseResults(result);
  expect(parsed.slice(0, -1)).toStrictEqual(testData);
});
