var calculator = 
{
	bindKeys: function()
	{
		$(document).on('click', '#calculator_table tr:not(:first-child) td', function(event) { calculator.keyPadPress(event); });
	},
	
	keyPadPress: function(event)
	{
		var key = $(event.target).data('key');

		// :)
		switch(key)
		{
			case 7:
			
				break;
			case 8:
			
				break;
			case 9:
			
				break;
			case "divide":
			
				break;
			case "sqrt":
			
				break;
			case 4:
			
				break;
			case 5:
			
				break;
			case 6:
			
				break;
			case "mult":
			
				break;
			case "pow":
			
				break;
			case 1:
			
				break;
			case 2:
			
				break;
			case 3:
			
				break;
			case "minus":
			
				break;
			case "equals":
			
				break;
			case 0:
			
				break;
			case "plus":
			
				break;

			default:
				console.log('Invalid key');
				break;
		}
	}
	
};