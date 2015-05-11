var listFib = function(num) {
  var nextNum = 0;
  var initPos = 0;
  var nextPos = 1;
  for (var i = 3; i < num; i++) {
    nextNum = initPos + nextPos;
    console.log(nextNum);
    initPos = nextPos;
    nextPos = nextNum;
    if (nextNum === num) {
      break;
    }
  }
};
listFib(610);
