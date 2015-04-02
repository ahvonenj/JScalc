test("setVal()", function(assert) 
{
	var expectedAssertions = 10;
	
	expect(expectedAssertions);
	
    for(var i = 0; i < expectedAssertions; i++)
	{
		var expectedValue = Math.floor(Math.random() * 100);
		calculator.setVal(expectedValue);
		assert.equal(calculator.result, expectedValue, "setVal(" + expectedValue + ")"); 
	}
});

test("getVal()", function(assert) 
{
	var expectedAssertions = 10;
	
	expect(expectedAssertions);
	
    for(var i = 0; i < expectedAssertions; i++)
	{
		var expectedValue = Math.floor(Math.random() * 100);
		calculator.result = expectedValue;
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
		calculator.result = Math.floor(Math.random() * 100);
		calculator.clearVal();
		assert.equal(calculator.result, expectedValue, "Testing calculator clearVal(" + expectedValue + ")"); 
	}
});

test("keyPadPress(0-9)", function(assert) 
{
    for(var i = 0; i < 10; i++)
	{
		calculator.result = 0;
		
		calculator.keyPadPress(i);
		assert.equal(calculator.result, i, "Testing calculator keypad number: " + i); 
		assert.equal(calculator.clearOnOperation, false, "Asserting calculator clearOnOperation boolean: " + i); 
	}
});

test("keyPadPress(divide)", function(assert) 
{
	var expectedValue = Math.floor(Math.random() * 1000);
	
	calculator.result = expectedValue;
	
	calculator.keyPadPress('divide');
	assert.equal(calculator.mem, calculator.result, "Testing calculator keypad memory"); 
	assert.equal(calculator.operation, 'divide', "Asserting calculator current operation"); 
	assert.equal(calculator.operationSign, '/', "Asserting calculator current operation sign"); 
	assert.equal(calculator.clearOnOperation, true, "Asserting calculator clearOnOperation boolean"); 
	
	calculator.result = 0;
	calculator.operation = '';
	calculator.operationSign = '';
	calculator.clearOnOperation = false;
});

test("keyPadPress(mult)", function(assert) 
{
	var expectedValue = Math.floor(Math.random() * 1000);
	
	calculator.result = expectedValue;
	
	calculator.keyPadPress('mult');
	assert.equal(calculator.mem, calculator.result, "Testing calculator keypad memory"); 
	assert.equal(calculator.operation, 'mult', "Asserting calculator current operation"); 
	assert.equal(calculator.operationSign, '*', "Asserting calculator current operation sign"); 
	assert.equal(calculator.clearOnOperation, true, "Asserting calculator clearOnOperation boolean"); 
	
});

test("keyPadPress(minus)", function(assert) 
{
	var expectedValue = Math.floor(Math.random() * 1000);
	
	calculator.result = expectedValue;
	
	calculator.keyPadPress('minus');
	assert.equal(calculator.mem, calculator.result, "Testing calculator keypad memory"); 
	assert.equal(calculator.operation, 'minus', "Asserting calculator current operation"); 
	assert.equal(calculator.operationSign, '-', "Asserting calculator current operation sign"); 
	assert.equal(calculator.clearOnOperation, true, "Asserting calculator clearOnOperation boolean"); 
	
});

test("keyPadPress(plus)", function(assert) 
{
	var expectedValue = Math.floor(Math.random() * 1000);
	
	calculator.result = expectedValue;
	
	calculator.keyPadPress('plus');
	assert.equal(calculator.mem, calculator.result, "Testing calculator keypad memory"); 
	assert.equal(calculator.operation, 'plus', "Asserting calculator current operation"); 
	assert.equal(calculator.operationSign, '+', "Asserting calculator current operation sign"); 
	assert.equal(calculator.clearOnOperation, true, "Asserting calculator clearOnOperation boolean"); 
	
});

test("keyPadPress(CE)", function(assert) 
{
	calculator.operation = 'mult';
	calculator.operationSign = '*';
	calculator.clearOnOperation = true;
	calculator.result = 10;

	calculator.keyPadPress('CE');
	
	assert.equal(calculator.operation, '', "Testing CE operation (1)"); 
	assert.equal(calculator.operationSign, '', "Testing CE operation sign (1)"); 
	assert.equal(calculator.clearOnOperation, false, "Testing CE clear (1)"); 
	assert.equal(calculator.result, 0, "Testing CE result (1)"); 
	
	calculator.operation = 'divide';
	calculator.operationSign = '/';
	calculator.clearOnOperation = true;
	calculator.result = 50;

	calculator.keyPadPress('CE');
	
	assert.equal(calculator.operation, '', "Testing CE operation (2)"); 
	assert.equal(calculator.operationSign, '', "Testing CE operation sign (2)"); 
	assert.equal(calculator.clearOnOperation, false, "Testing CE clear (2)"); 
	assert.equal(calculator.result, 0, "Testing CE result (2)"); 
});

test("keyPadPress() - with invalid key", function(assert) 
{
	var randomKeys = ['', 'ZZ', 'XX', 'AA', -1, 99, '&', '[', '_'];
	
    for(var i = 0; i < randomKeys.length; i++)
	{
		var keyToTest = randomKeys[i];
		calculator.keyPadPress(keyToTest);
		assert.equal(calculator.operation, '', "Testing invalid key: " + keyToTest); 
	}
});

test("Testing INT_MAX + 1 operation", function(assert) 
{
	expect(0);
	
	calculator.result = Number.MAX_VALUE;
	calculator.mem = 10;
	calculator.setOp('plus', '+');
	calculator.operations.equals();
	console.log(calculator.result+1);
	
	//assert.equal(calculator.result, '', "Testing INT_MAX + 1 operation" + keyToTest); 
});

