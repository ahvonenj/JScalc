test("setVal()", function(assert) 
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

test("getVal()", function(assert) 
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

test("clearVal()", function(assert) 
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

test("keyPadPress(0-9)", function(assert) 
{
    for(var i = 0; i < 10; i++)
	{
		calculator.keyPadPress(i);
		assert.equal(calculator.simulatedResult, i, "Testing calculator keypad number: " + i); 
		assert.equal(calculator.clearOnOperation, false, "Asserting calculator clearOnOperation boolean: " + i); 
	}
});

test("keyPadPress(divide)", function(assert) 
{
	var expectedValue = Math.floor(Math.random() * 1000);
	
	calculator.simulatedResult = expectedValue
	
	calculator.keyPadPress('divide');
	assert.equal(calculator.mem, expectedValue, "Testing calculator keypad memory"); 
	assert.equal(calculator.operation, 'divide', "Asserting calculator current operation"); 
	assert.equal(calculator.simulatedOperationSign, '/', "Asserting calculator current operation sign"); 
	assert.equal(calculator.clearOnOperation, true, "Asserting calculator clearOnOperation boolean"); 
	
	this.simulatedResult = 0;
	this.operation = '';
	this.simulatedOperationSign = '';
	this.clearOnOperation = false;
});

test("keyPadPress(mult)", function(assert) 
{
	var expectedValue = Math.floor(Math.random() * 1000);
	
	calculator.simulatedResult = expectedValue
	
	calculator.keyPadPress('mult');
	assert.equal(calculator.mem, expectedValue, "Testing calculator keypad memory"); 
	assert.equal(calculator.operation, 'mult', "Asserting calculator current operation"); 
	assert.equal(calculator.simulatedOperationSign, '*', "Asserting calculator current operation sign"); 
	assert.equal(calculator.clearOnOperation, true, "Asserting calculator clearOnOperation boolean"); 
	
	this.simulatedResult = 0;
	this.operation = '';
	this.simulatedOperationSign = '';
	this.clearOnOperation = false;
});

test("keyPadPress(minus)", function(assert) 
{
	var expectedValue = Math.floor(Math.random() * 1000);
	
	calculator.simulatedResult = expectedValue
	
	calculator.keyPadPress('minus');
	assert.equal(calculator.mem, expectedValue, "Testing calculator keypad memory"); 
	assert.equal(calculator.operation, 'minus', "Asserting calculator current operation"); 
	assert.equal(calculator.simulatedOperationSign, '-', "Asserting calculator current operation sign"); 
	assert.equal(calculator.clearOnOperation, true, "Asserting calculator clearOnOperation boolean"); 
	
	this.simulatedResult = 0;
	this.operation = '';
	this.simulatedOperationSign = '';
	this.clearOnOperation = false;
});

test("keyPadPress(plus)", function(assert) 
{
	var expectedValue = Math.floor(Math.random() * 1000);
	
	calculator.simulatedResult = expectedValue
	
	calculator.keyPadPress('plus');
	assert.equal(calculator.mem, expectedValue, "Testing calculator keypad memory"); 
	assert.equal(calculator.operation, 'plus', "Asserting calculator current operation"); 
	assert.equal(calculator.simulatedOperationSign, '+', "Asserting calculator current operation sign"); 
	assert.equal(calculator.clearOnOperation, true, "Asserting calculator clearOnOperation boolean"); 
	
	this.simulatedResult = 0;
	this.operation = '';
	this.simulatedOperationSign = '';
	this.clearOnOperation = false;
});

test("keyPadPress(CE)", function(assert) 
{
	calculator.operation = 'mult';
	calculator.simulatedOperationSign = '*';
	calculator.clearOnOperation = true;
	calculator.simulatedResult = 10;

	calculator.keyPadPress('CE');
	
	assert.equal(calculator.operation, '', "Testing CE operation:"); 
	assert.equal(calculator.simulatedOperationSign, '', "Testing CE operation sign"); 
	assert.equal(calculator.clearOnOperation, false, "Testing CE clear"); 
	assert.equal(calculator.simulatedResult, 0, "Testing CE result"); 
	
	calculator.operation = 'divide';
	calculator.simulatedOperationSign = '/';
	calculator.clearOnOperation = true;
	calculator.simulatedResult = 10;

	calculator.keyPadPress('CE');
	
	assert.equal(calculator.operation, '', "Testing CE operation:"); 
	assert.equal(calculator.simulatedOperationSign, '', "Testing CE operation sign"); 
	assert.equal(calculator.clearOnOperation, false, "Testing CE clear"); 
	assert.equal(calculator.simulatedResult, 0, "Testing CE result"); 
});

test("keyPadPress() - with invalid key", function(assert) 
{
	var randomKeys = ['', 'ZZ', 'XX', 'AA', -1, 99, '&', '[', '_'];
	
    for(var i = 0; i < 10; i++)
	{
		var keyToTest = randomKeys[Math.floor(Math.random() * (randomKeys.length - 1) + 1];
		calculator.keyPadPress(keyToTest);
		assert.equal(calculator.operation, '', "Testing invalid key A: " + keyToTest); 
		assert.equal(calculator.mem, null, "Testing invalid key B: " + keyToTest); 
	}
});


