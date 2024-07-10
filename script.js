function calculate()
{
    let input = document.getElementById('input').value;
    let match = input.match(/^(\d+)\s*([\+\-\*\/])\s*(\d+)$/);
    let op1,op,op2,result;
    if(match)
        {
            op1=parseInt(match[1]);
            op=match[2];
            op2=parseInt(match[3]);
            switch(op)
            {
                case '+':
                    result=op1+op2;
                    break;
                case '-':
                    result=op1-op2;
                    break; 
                case '*':
                    result=op1*op2;
                    break; 
                case '/':
                    if(op2!==0)
                        {
                            result=op1/op2;
                        }
                    else
                    {
                        result='Division by zero';
                    }
                    break;
                default:
                {
                    result='Invalid Operator';
                    break;
                }
            }
            let res = document.getElementById('result');
            res.innerHTML = "Result: "+result;
        }
        else{
            let res = document.getElementById('result');
            res.innerHTML = "Invalid Expression";
        }
    
}
