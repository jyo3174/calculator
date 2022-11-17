function calculate() 
{
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;

    if (id = "add")
    {
        var res= parseFloat(n1)+parseFloat(n2);
    }

    
    else if (id = "sub")
    {
        var res= parsefloat(n1)-parseFloat(n2);
    }
    
    else if (id = "mul")
    {
        var res = parseFloat(n1)*parseFloat(n2);
    }
    else if (id = "div")
    {
        var res = parseFloat(n1)/parseFloat(n2);
    }
    document.getElementById('res').value = res;
}