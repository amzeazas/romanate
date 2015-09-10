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
    var counter = 7;
    for (; counter > 0; counter--) {
      if (number >= key[counter]) {
        output = output + hashRomanNumerals[key[counter]];
        number = number - key[counter];
        counter = 7;
      }
    }
  }
  output = output.replace("DCCCC", "CM");
  output = output.replace("CCCC", "CD");
  output = output.replace("LXXXX", "XC");
  output = output.replace("XXXX", "XL");
  output = output.replace("VIIII","IX");
  output = output.replace("IIII","IV");
  return output;
};
