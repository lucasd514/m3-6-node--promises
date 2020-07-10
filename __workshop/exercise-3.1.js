// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");
// Returns the current position of the ISS
const getIssPosition = (coord) => {
  return request(" http://api.open-notify.org/iss-now.json")
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      // return parsedResponse.iss_position;
      let newKeyVars = parsedResponse.iss_position;
      let newObject = { lat: newKeyVars.latitude };
      newObject.lat = newKeyVars.latitude;
      newObject.lng = newKeyVars.longitude;
      return newObject;
    })

    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
};
getIssPosition("coord").then((result) => console.log(result));
