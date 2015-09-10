var hashRomanNumerals = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
};

var key = {
  1: 1,
  2: 5,
  3: 10,
  4: 50,
  5: 100,
  6: 500,
  7: 1000
};

var romanate = function(number) {
  var output = "";
  while (number > 0) {
    for (var counter = 7; counter > 0; counter--) {
      if (number >= key[counter]) {
        output = output + hashRomanNumerals[key[counter]];
        number = number - key[counter];
      }
    }
  }
  return output;
};
