// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  myPromise = new Promise((resolve, reject) => {
    if (
      array.every((element) => {
        return typeof element === "string";
      })
    ) {
      const newArray = array.map((element) => {
        return element.toUpperCase();
      });
      console.log(newArray);
      resolve(newArray);
    } else {
      reject("they arent all strings, no dice!");
    }
  });
  return myPromise;
};

const sortWords = (array) => {
  sortPromise = new Promise((resolve, reject) => {
    const inOrder = array.sort();
    resolve(inOrder);
  });
  return sortPromise;
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// makeAllCaps(arrayOfWords)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
