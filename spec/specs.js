describe('romanate', function() {
  it("converts a single-digit number to its roman numeral form", function() {
    expect(romanate(5)).to.equal("V");
  });

  it("converts a double-digit number to its roman numeral form", function() {
    expect(romanate(13)).to.equal("XIII");
  });

  it("converts a triple-digit number to its roman numeral form", function() {
    expect(romanate(112)).to.equal("CXII");
  });

  it("converts a quadruple-digit number to its roman numeral form", function() {
    expect(romanate(1667)).to.equal("MDCLXVII");
  });

  it("converts a number ending in 9 to its roman numeral form", function() {
    expect(romanate(1929)).to.equal("MCMXXIX");
  });
});
