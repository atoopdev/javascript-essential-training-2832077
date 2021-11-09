/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// dot notation
console.log("The backpack object:", backpack);
console.log("The pocketNum value: ", backpack.pocketNum);

// bracket notation
var query = "pocketNum";
// note passing variable in only works in bracket notation
console.log("The pocketNum value: ", backpack[query]);
