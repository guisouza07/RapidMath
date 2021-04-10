function convertFunction() {
    var x = document.getElementById("demoInput").value;
    document.getElementById("demo").innerHTML = x;
  }

  function convertFunction() {
    
    var str = +document.getElementById("demoInput").value;
    var str2 = str;
    a = parseInt(str, 2).toString(10);
    
    var c = parseInt(a).toString(8);
    var d = parseInt(a).toString(16);
    var d2 = d.toUpperCase();
    var e = "Binary Number:  " + str2 + "<br>" + "Decimal:  " + a + "<br>" + "Octal:  " +  c + "<br>" + "Hexadecimal:  " +  d2;
    document.getElementById("demo").innerHTML=e;

    
  }

