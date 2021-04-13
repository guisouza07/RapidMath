

  function convertFunction() {

    
    
    var str = +document.getElementById("demoInput").value;
    var a = str.toString();
    var b = str.toString(2);
    
    var c = str.toString(8);
    var d = str.toString(16);
    var d2 = d.toUpperCase();
    var e = "Decimal Number:  " + a + "<br>" + "Binary:  " + b + "<br>" + "Octal:  " +  c + "<br>" + "Hexadecimal:  " +  d2;
    document.getElementById("demo").innerHTML=e;

    
  }

