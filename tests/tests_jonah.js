test("setVal()", function (assert) 
{
	var expectedAssertions = 10;
	
	expect(expectedAssertions);
	
    for(var i = 0; i < expectedAssertions; i++)
	{
		var expectedValue = Math.floor(Math.random() * 100);
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
		var expectedValue = Math.floor(Math.random() * 100);
		calculator.simulatedResult = expectedValue;
		assert.equal(calculator.getVal(), expectedValue, "Testing calculator getVal(" + expectedValue + ")"); 
	}
});

test("clearVal()", function (assert) 
{
	var expectedAssertions = 5;
	
	expect(expectedAssertions);
	
    for(var i = 0; i < expectedAssertions; i++)
	{
		var expectedValue = 0;
		calculator.simulatedResult = Math.floor(Math.random() * 100);
		calculator.clearVal();
		assert.equal(calculator.simulatedResult, expectedValue, "Testing calculator clearVal(" + expectedValue + ")"); 
	}
});

test("keyPadPress()", function (assert) 
{
    for(var i = 0; i < 10; i++)
	{
		calculator.keyPadPress(i);
		assert.equal(calculator.simulatedResult, i, "Testing calculator keypad number: " + i); 
		assert.equal(calculator.clearOnOperation, false, "Asserting calculator clearOnOperation boolean: " + i); 
	}
});
