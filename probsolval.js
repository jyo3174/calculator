function add() {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var res= parseFloat(n1) + parseFloat(n2);
    document.getElementById('res').value = res;
    }
    function sub() {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var res = parseFloat(n1) - parseFloat(n2);
    document.getElementById('res').value = res;
    }
    function mul() {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var res = parseFloat(n1)*parseFloat(n2);
    document.getElementById('res').value = res;
    }
    function div() {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var res = parseFloat(n1)/parseFloat(n2);
    document.getElementById('res').value = res;
    }
    