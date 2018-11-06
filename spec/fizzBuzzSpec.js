describe('Javabuzz', function() {

  var javabuzz;

  describe('knows when a number is', function() {
    it('divisable by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
  describe('Knows when a number is NOT', function() {
    it('divisable by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
  });
});
