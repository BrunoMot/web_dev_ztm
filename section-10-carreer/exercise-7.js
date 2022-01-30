// Create an object and an array which we will use in our facebook exercise.
console.log("Exercise 7 - attempt");

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
const user = {
  username: "name",
  password: "pass",
};

// 2. Create an array which contains the object you have made above and name the array "database".
const database = [
  user,
  {
    username: "sally",
    password: "123",
  },
  {
    username: "bob",
    password: "1234",
  },
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
const newsfeed = [
  {
    username: "sally",
    timeline: "text1",
  },
  {
    username: "name",
    timeline: "text2",
  },
  {
    username: "bob",
    timeline: "text3",
  },
];

const usernamePrompt = prompt("Whats your username?");
const passwordPrompt = prompt("Whats your password?");

const sign_in = (username, password) => {
  var found = false;
  database.forEach((user) => {
    if (user.username == username && user.password == password) {
      found = true;
    }
  });
  return found;
};

const signed = sign_in(usernamePrompt, passwordPrompt);
console.log(signed);

if (signed) {
  console.log("Signed in");
  newsfeed.forEach((element) => {
    if (element.username == usernamePrompt) {
      console.log(element.timeline);
    }
  });
} else {
  console.log("Sign in failed.");
}
