describe("fizzBuzz", function () {
    describe("fizzBuzz", function () {

        it("should return Fizz Buzz as 15 is divisible by 3 and 5", function () {
            expect(number(15).toBe("Fizz Buzz"));
        });
        it("should return Fizz as 9 is divisible by 3", function () {
            expect(number(3).toBe("Fizz"));
        });
        it("should return Buzz as 10 is divisible by 5", function () {
            expect(number(10).toBe("Buzz"));
        });
        it("should return the number if the number is not divisible by 3 or 5", function () {

        });
        it("should return an error if we don't supply a number");
        spyOn(window, "alert");
        fizzbuzz("Hello", "Sophie");
        expect(window.alert).toHaveBeenCalledWith("Error!");
    });
});