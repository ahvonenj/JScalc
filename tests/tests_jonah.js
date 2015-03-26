test("Testing the tester", function (assert) 
{
    var isthisok = false;
    
    $('#calc_result').val('1');
    
    if(calculator.getVal == '1')
    {
        isthisok = true;
    }
    
    ok(isthisok, "I hope that was ok?");
});
