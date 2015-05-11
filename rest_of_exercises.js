var logAll = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

var sum = function (arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  });
};

var subtract = function (arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result = result - arr[i];
  }
  return result;
};

var largest = function (arr) {
  return arr.sort(function (a, b) {
    return a - b;
  }).pop();
};

var smallest = function (arr) {
  return arr.sort(function (a, b) {
    return b - a;
  }).pop();
};

var average = function (arr) {
  return sum(arr) / arr.length;
};

logAll([1, 2, 3, 4, 5]);
console.log("\n");
console.log("Sum is: " + sum([1, 2, 3]));
console.log("\n");
console.log("Difference is: " + subtract([10, 10, 10]));
console.log("\n");
console.log("Largest is: " + largest([3, 6, 21, 5]));
console.log("\n");
console.log("Smallest is: " + smallest([3, 6, 21, 5]));
console.log("\n");
console.log("Average is: " + average([10, 20, 30, 45, 66]));
