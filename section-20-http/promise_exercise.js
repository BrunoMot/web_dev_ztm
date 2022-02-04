// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});
// #2) Run the above promise and make it console.log "success"

console.log("first call");
promise.then((result) => {
  console.log(result);
});

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const test_function = (result) => {
  console.log(result + "!!!");
};

console.log("second call");
promise.then(test_function);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject("failed").catch((error) =>
  console.log(`something went wrong: ${error}`)
);

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  "http://swapi.dev/api/people/1",
  "http://swapi.dev/api/people/2",
  "http://swapi.dev/api/people/3",
  "http://swapi.dev/api/people/4",
];

Promise.all(
  urls.map((url) => {
    return fetch(url)
      .then((people) => people.json())
      .then(console.log)
      .catch((error) => `whoops, something went wrong. ${error}`);
  })
);

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
