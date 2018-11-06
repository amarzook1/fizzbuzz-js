describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz
  });

  describe('knows when a number is', function() {
    it('divisable by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('Knows when a number is NOT', function() {
    it('divisable by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe('knows when a number is', function() {
    it('divisable by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });
  });

  describe('Knows when a number is NOT', function() {
    it('divisable by 5', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });
  });

  describe('Knows when a number is', function() {
    it('divisable by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('Knows when a number is NOT', function() {
    it('divisable by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(16)).toBe(false);
    });
  });

  describe('When playing, says', function() {
    it('"Fizz" when a number is divisable by 3', function() {
      expect(javabuzz.says(3)).toEqual("Fizz")
    });
  });

  describe('When playing, says', function() {
    it('"Buzz" when a number is divisable by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz")
    });
  });

  describe('When playing, says', function() {
    it('"FizzBuzz" when a number is divisable by 15', function() {
      expect(javabuzz.says(15)).toEqual("FizzBuzz")
    });
  });

  describe('When playing, says', function() {
    it('"number" when number not divisable by either 3 or 5', function() {
      expect(javabuzz.says(16)).toEqual(16)
    });
  });
});
