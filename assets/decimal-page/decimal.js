function convertFunction() {
    var x = document.getElementById("demoInput").value;
    document.getElementById("demo").innerHTML = x;
  }

  function convertFunction() {
    
    var str = +document.getElementById("demoInput").value;
    var a = str.toString();
    var b = str.toString(2);
    var c = str.toString(8);
    var d = str.toString(16);
    var e = "Decimal number:  " + a + "<br>" + "Binary:  " + b + "<br>" + "Octal:  " +  c + "<br>" + "Hexadecimal:  " +  d;
    document.getElementById("demo").innerHTML=e;
  }

