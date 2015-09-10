describe('romanate', function() {
  it("converts a single-digit number to its roman numeral form", function() {
    expect(romanate(5)).to.equal("V");
  });
});
