/* Data set has to be > 3 for most accurate results
   1) Attempts divisibility first for precedence in simple patterns
   2) If not, it tries a different form via (y = kx)
   3) If the constant of k cannot be found, attempt to find relationship via difference
   
   This covers all potential multiplicative/divisible and additive/subtraction relationships.
   It cannot find obscure patterns as they would require more specific instructions.

   Things to complete
   1) Simplify difference function to use reduce to determine the result
   2) If none of the functions found a pattern, relay this to the console (might log garbage result)
   3) Refactor code
   4) Add checking for other potential pattern, such as... if pi is the relationship

Conner Alegre 5/10/2015
*/
var tryMultiplicative = function (seq) {
  var i = 0;
  var checkConstant = [];
  var nextNum = 0;
  while (i <= seq.length) {
    var x = i + 1;
    var y = seq[i];
    var k = y / x;

    checkConstant.push(k);

    if (trackK === false || isNaN(k)) {
      return tryDifference(seq);
    }

    var trackK = k % 1 === 0;

    i++;
  }
  if (checkConstant[0] === checkConstant[checkConstant.length - 2]) {
    nextNum = seq[seq.length - 1] + checkConstant[0];
  }
  console.log(nextNum);
};


var tryDifference = function (seq) {
  var bottomLevel = [];
  var difference = seq.slice(0);
  for (var i = 0; i < seq.length - 1; ++i) {
    for (var j = 0; j < difference.length - i - 1; ++j) {
      difference[j] = difference[j + 1] - difference[j];
    }
    bottomLevel.push(difference[j]);
  }
  var result = bottomLevel.reduce(function (a, b) {
    return a + b;
  });
  console.log(result);
};

var findGreatestDivisor = function (seq) {
  var currentDivisor = 0;
  for (var i = 0; i < seq.length; i++) {
    if (seq[i + 1] !== undefined) {
      currentDivisor = seq[i + 1] / seq[i];
    } else {
      return currentDivisor;
    }
  }
};

var findSequence = function (seq) {
  var divisibilityScore = 0;
  for (var i = 0; i < seq.length; i++) {
    if (seq[i + 1] % seq[i] === 0) {
      divisibilityScore++;
    } else {
      divisibilityScore--;
    }
  }
  if (divisibilityScore >= 1) {
    var divisor = findGreatestDivisor(seq);
    console.log((seq.slice(-1).pop()) * divisor);
  } else {
    tryMultiplicative(seq);
  }
};


findSequence([3, 6, 9]);
findSequence([1, 2, 4, 8, 16, 32]);
findSequence([5, 25, 100, 500]);
findSequence([3, 12, 48, 192]);
findSequence([6, 36, 216, 1296]);
