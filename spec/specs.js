describe('romanate', function() {
  it("converts a single-digit number to its roman numeral form", function() {
    expect(romanate(5)).to.equal("V");
  });

  it("converts a double-digit number to its roman numeral form", function() {
    expect(romanate(13)).to.equal("XIII");
  });
});
