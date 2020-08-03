# Request Multiple URLS

## Description

Fetches an array of URLS that contain JSON data

## Usage

Basic usage:

```
const requestMutlipleUrls = require("../index");

// Example parsing
const parseResults = (result) =>
  result.map((item) =>
    item.status === "fulfilled" ? JSON.parse(item.value) : item
  );

requestMutlipleUrls(urls).then((result) => {
  const parsed = parseResults(result);
  // use the returned data!
});
```

Also check `tests/index.spec.js` for examples of error handling.

## Error States

- The package will try to return valid data even when errors are thrown (e.g. an invalid URL)
- Errors are returned at the same index as the passed url that has caused them
- If the Promise `status` is `"rejected"` then the returned `reason` will contain the Error

## Testing

To run tests `npm test`

## Assumptions

- The user would like to receive all available data even if some passed URLs don't return data or throw errors

## Choice of Dependencies

This package uses `node-fetch` because it is lightweight and gives access to `window.fetch` which is widely implemented across browsers.

## Next Steps

- Research errors that may be thrown that I haven't thought of
- Include option in the package to parse the JSON before returning the data (basically put the `parseResults` function from `index.spec.js`in the package so it can be used)
- Handle lack of network connection better for tests
- Add an option to force an error to be thrown if one url doesn't return data
