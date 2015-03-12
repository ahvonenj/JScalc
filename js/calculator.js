var calculator = 
{
	operation: '',
	mem: null,
	
	bindKeys: function()
	{
		$(document).on('click', '#calculator_table tr:not(:first-child) td', function(event) { calculator.keyPadPress(event); });
	},
	
	getVal: function()
	{
		return $('#calc_result').val();
	},
	setVal: function(value)
	{
		$('#calc_result').val(value);
	},
	clearVal: function()
	{
		$('#calc_result').val('0');
	},
	setOp: function(op, textop)
	{
		this.operation = op;
		$('#operation_icon').text(textop);
		this.clearOnOperation = true;
	},
	clearOp: function()
	{
		this.operation = '';
		$('#operation_icon').text('NOP');
		this.clearOnOperation = false;
	},
	
	keyPadPress: function(event)
	{
		var that = this;
		var key = $(event.target).data('key');

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
				if(that.operation == '')
				{
					that.mem = that.getVal();
					that.setOp('divide', '/');
				}
				else
				{
					that.operations.equals();
				}
				break;
			case "sqrt":

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
				}
				break;
			case "pow":
				
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
				}
				break;
			case 0:
				that.input(0);
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
			return (calculator.mem / calculator.getVal());
		},
		sqrt: function()
		{
			
		},
		mult: function()
		{
			
		},
		pow: function()
		{
			
		},
		minus: function()
		{
			
		},
		clear: function()
		{
			calculator.clearVal();
			calculator.clearOp();
		},
		equals: function()
		{
			if(calculator.operation != null)
			{
				if(typeof calculator.operations[calculator.operation] != 'undefined')
				{
					calculator.setVal(calculator.operations[calculator.operation]());
				}
			}
			calculator.clearOp();
		},
		plus: function()
		{
			
		}	
	},
	
	clearOnOperation: true,
	
	input: function(num)
	{
		var oldval = this.getVal();
		var newval = (oldval == 0 || this.clearOnOperation) ? num.toString() : oldval.toString() + num.toString();
		
		this.clearOnOperation = false;
		
		this.setVal(newval);
	}
	
};