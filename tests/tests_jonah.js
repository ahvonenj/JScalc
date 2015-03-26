test("setVal()", function (assert) 
{
	var expectedAssertions = 10;
	
	expect(expectedAssertions);
	
    for(var i = 0; i < expectedAssertions; i++)
	{
		var expectedValue = Math.random() * 100;
		calculator.setVal(expectedValue);
		assert.equal(calculator.simulatedResult, expectedValue, "setVal(" + expectedValue + ")"); 
	}
});

test("getVal()", function (assert) 
{
	var expectedAssertions = 10;
	
	expect(expectedAssertions);
	
    for(var i = 0; i < expectedAssertions; i++)
	{
		var expectedValue = Math.random() * 100;
		calculator.simulatedResult = expectedValue;
		assert.equal(calculator.getVal(), expectedValue, "Testing calculator getVal(" + expectedValue + ")"); 
	}
});
