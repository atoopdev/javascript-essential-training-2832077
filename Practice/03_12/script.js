/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

// create a peloton object

import Peloton from "./Peloton.js";

const KatiesPeloton = new Peloton(
  "Katie's Peloton",
  17,
  "B",
  "M",
  true,
  "September 28, 2021 15:00:00 PST"
);
console.log("The peloton object: ", KatiesPeloton);
console.log("Purchase date: ", KatiesPeloton.purchaseDate);
console.log("Days since purchase: ", KatiesPeloton.pelotonAge());
