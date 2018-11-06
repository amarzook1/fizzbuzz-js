var  Javabuzz = function(){};

Javabuzz.prototype.says = function (number) {
  if (this.isDivisibleByFifteen(number)) {
    return "FizzBuzz";
  }
  if (this.isDivisibleByThree(number)) {
    return "Fizz";
  }
  if (this.isDivisibleByFive(number)) {
    return "Buzz";
  }
  return number;
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleByFifteen = function (number) {
  return this._isDivisibleBy(number, 15);
};

//Divisable function
Javabuzz.prototype._isDivisibleBy = function (number, divisor) {
  return (number % divisor === 0);
};

var fizzBuzz = new Javabuzz();

for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz.says(i));
}
