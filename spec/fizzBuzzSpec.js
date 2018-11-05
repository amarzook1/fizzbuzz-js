describe('Javabuzz', function() {

  var javabuzz;

  describe('knows when a number is', function() {
    it('divisable by 3', function() {
      javabuzz = new Javabuzz();
      expect(isDivisibleByThree(3)).toBe(true);
    });
  });
});
