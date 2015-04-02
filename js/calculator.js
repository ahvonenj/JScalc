// Server side jquery hack because we basically want to 
// forcefully test a client side script with a server side qunit
if(typeof exports !== 'undefined')
{
	var jsdom = require("jsdom").jsdom;
	var markup = '<html><body></body></html>';
	var doc = jsdom(markup);
	var window = doc.parentWindow;
	var $ = require('jquery')(window)
}

var calculator = 
{
	// Calculator variables
	operation: '', // Current operation
	mem: null, // Saved value (so that we can, i.e. sum 2 values)
	operationSign: '',
	result: 0,
	
	bindKeys: function()
	{
		// Bind calculator keys
		$(document).on('click', '#calculator_table tr:not(:first-child) td', function(event) { calculator.keyPadPress($(event.target).data('key')); });
	},
	
	getVal: function() // Get current visible value
	{
		return this.result;
	},
	setVal: function(value) // Set current visible value
	{
		$('#calc_result').val(value);
		this.result = value;
	},
	clearVal: function() // Clear current visible value
	{
		$('#calc_result').val('0');
		this.result = 0;
	},
	setOp: function(op, textop) // Set current math operation
	{
		this.operation = op;
		
		if(textop == "pow") // Pow and Sqrt need special html character
		{
			$('#operation_icon').html('x&sup2;');
			this.operationSign = 'x&sup2;';
		}
		else if(textop == "sqrt")
		{
			$('#operation_icon').html('&radic;');
			this.operationSign = '&radic;';
		}
		else
		{
			$('#operation_icon').text(textop);
			this.operationSign = textop;
		}
		
		// Inform the input function that the visible value needs to be cleared
		this.clearOnOperation = true;
	},
	clearOp: function() // Clear all ongoing operations
	{
		this.operation = '';
		$('#operation_icon').text('');
		this.operationSign = '';
		this.clearOnOperation = false;
	},
	
	keyPadPress: function(key)
	{
		var that = this;

		console.log(key);
		
		// :)
		switch(key)
		{
			case 7:
				that.input(7);
				break;
			case 8:
				that.input(8);
				break;
			case 9:
				that.input(9);
				break;
			case "divide":
				/* 
					These ifs are for 'comboing' operations.
					With these the user is able to spam something like 7+7*7/7-7 without pressing equals every time
				*/
				if(that.operation == '')
				{
					that.mem = that.getVal();
					that.setOp('divide', '/');
				}
				else
				{
					that.operations.equals();
					that.mem = that.getVal();
					that.setOp('divide', '/');
				}
				break;
			case "sqrt":
				that.operations.sqrt();
				break;
			case 4:
				that.input(4);
				break;
			case 5:
				that.input(5);
				break;
			case 6:
				that.input(6);
				break;
			case "mult":
				if(that.operation == '')
				{
					that.mem = that.getVal();
					that.setOp('mult', '*');
				}
				else
				{
					that.operations.equals();
					that.mem = that.getVal();
					that.setOp('mult', '*');
				}
				break;
			case "pow":
				that.operations.pow();
				break;
			case 1:
				that.input(1);
				break;
			case 2:
				that.input(2);
				break;
			case 3:
				that.input(3);
				break;
			case "minus":
				if(that.operation == '')
				{
					that.mem = that.getVal();
					that.setOp('minus', '-');
				}
				else
				{
					that.operations.equals();
					that.mem = that.getVal();
					that.setOp('minus', '-');
					
				}
				break;
			case "plus":
				if(that.operation == '')
				{
					that.mem = that.getVal();
					that.setOp('plus', '+');
				}
				else
				{
					that.operations.equals();
					that.mem = that.getVal();
					that.setOp('plus', '+');
				}
				break;
			case 0:
				that.input(0);
				break;
			case "dot":
				that.input(".");
				break;
			case "CE":
				that.operations.clear();
				break;
			case "equals":
				that.operations.equals();
				break;

			default:
				console.log('Invalid key');
				break;
		}
	},
	
	operations:
	{
		divide: function()
		{
			return (parseFloat(calculator.mem) / parseFloat(calculator.getVal()));
		},
		sqrt: function()
		{
			if(calculator.getVal() > 0)
				calculator.setVal(Math.sqrt(parseFloat(calculator.getVal())));
		},
		mult: function()
		{
			return (parseFloat(calculator.mem) * parseFloat(calculator.getVal()));
		},
		pow: function()
		{
			var f = parseFloat(calculator.getVal());
			calculator.setVal((f * f));
		},
		minus: function()
		{
			return (parseFloat(calculator.mem) - parseFloat(calculator.getVal()));
		},
		clear: function()
		{
			calculator.clearVal();
			calculator.clearOp();
		},
		equals: function()
		{
			// Check if we need to do some operation
			if(calculator.operation != null)
			{
				// See if we can do the selected operation
				if(typeof calculator.operations[calculator.operation] != 'undefined')
				{
					if(calculator.mem)
					// Perform the selected operation
					calculator.setVal(calculator.operations[calculator.operation]());
				}
			}
			
			// Clear operations
			calculator.clearOp();
		},
		plus: function()
		{
			return (parseFloat(calculator.mem) + parseFloat(calculator.getVal()));
		}	
	},
	
	clearOnOperation: true,
	
	input: function(input) // Function for calculator inputs
	{
		var oldval = this.getVal();
		
		// We need to know if the input is numeric or a decimal point
		if(input != ".")
		{
			if(oldval.toString().indexOf('.') > -1) // Calculator input has a decimal point
			{
				if(this.clearOnOperation)
				{
					var newval = input.toString();
				}
				else
				{
					var newval = oldval.toString() + input.toString();
				}
			}
			else // Calculator input does not have a decimal point
			{
				if(oldval == 0 || this.clearOnOperation) // Does the calculator say "0" ?
				{
					var newval = input.toString();
				}
				else
				{
					var newval = oldval.toString() + input.toString();
				}
			}
			
			this.clearOnOperation = false;			
			this.setVal(newval);
		}
		else
		{
			if(oldval.toString().indexOf('.') == -1)
			{
				var newval = oldval.toString() + ".";			
				this.setVal(newval);
			}
		}
	}
	
};

if(typeof exports !== 'undefined')
{
	exports.calculator = calculator;
}