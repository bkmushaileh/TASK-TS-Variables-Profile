/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

let fullName: string;
let yearOfBirth: number;
let hobby: string;
let funFact: string;
let image: string;

fullName = "Bashaier Khaled AlMeshaile";
yearOfBirth = 1996;
hobby = "Learning New Staff";
funFact =
  "Now, my brain has 100000 tabs open, and none of them are loading....";
image = "My-image";
/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it: "My name is {fullName}""
 * 2. ageString           -> assign it: "I am {YOUR_AGE}"", and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it: "My hobby is {YOUR_HOBBY}""
 */

let fullNameString: string;
let ageString: string;
let hobbyString: string;
const myAge = 2025 - yearOfBirth;

fullNameString = `My name is ${fullName}`;
ageString = `I am ${myAge}`;
hobbyString = `My hobby is ${hobby}`;
console.log(`${fullNameString}.\nI am ${myAge}.\n${hobbyString}. `);

/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let hackerScore = 0;

function incrementBy1() {
  // Increment hackerScore by 1 👇🏻
  hackerScore++;
}
function decrementBy1() {
  // decrement hackerScore by 1 👇🏻
  hackerScore--;
}

function incrementBy2() {
  // Increment hackerScore by 2 👇🏻
  hackerScore = hackerScore + 2;
}
function decrementBy2() {
  // decrement hackerScore by 2 👇🏻
  hackerScore = hackerScore - 2;
}

// Ignore this part (:
export {
  fullName,
  yearOfBirth,
  hobby,
  funFact,
  image,
  fullNameString,
  ageString,
  hobbyString,
  incrementBy1,
  incrementBy2,
  decrementBy1,
  decrementBy2,
};
