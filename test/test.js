describe("My whatCanIDrink function", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    
    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    
    describe("Check age", function() {
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });
        
        
        it("should be unabl to return drink when called as whatCanIDrink(-2)", function() {
            var result = whatCanIDrink(-2)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });
        it("should return drink coke when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });
        it("should return drink beer when called as whatCanIDrink(18)", function() {
            var result = whatCanIDrink(18)
            expect(result).toBe("Drink Beer");
        });    
        it("should return drink beer when called as whatCanIDrink(20)", function() {
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        });    
        it("should return drink whisky when called as whatCanIDrink(31)", function() {
            var result = whatCanIDrink(31)
            expect(result).toBe("Drink Whisky");
        });    
        it("should return drink whisky when called as whatCanIDrink(99)", function() {
            var result = whatCanIDrink(99)
            expect(result).toBe("Drink Whisky");
        });    
        it("should bw unable to return what to drink when called as whatCanIDrink(140)", function() {
            var result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    })
});
