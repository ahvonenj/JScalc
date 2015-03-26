test("Testing the tester", function (assert) 
{
	var expected = 10;
	
	expect(expected);
	
    for(var i = 0; i < expected; i++)
	{
		var actual = Math.random() * 100;
		calculator.setVal(actual);
		assert.equal(calculator.simulatedResult, actual, "Testing calculator setVal()"); 
	}
});
