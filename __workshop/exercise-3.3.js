// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressFromPosition(lat, lng) {
  const test1 = `${lat}, ${lng}`;
  console.log(test1);
  const requestObj = {
    key: "",
    q: test1,
  };
  return opencage
    .geocode(requestObj)
    .then((response) => response.results[0].formatted)
    .catch((error) => {
      console.log("error", error.message);
    });
}
// return ...

getAddressFromPosition("45.5580", "-73.5519").then((response) =>
  console.log(response)
);
