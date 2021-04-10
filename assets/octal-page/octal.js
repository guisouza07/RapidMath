function convertFunction() {
  var x = document.getElementById("demoInput").value;
  document.getElementById("demo").innerHTML = x;
}

function convertFunction() {
  
  var str = document.getElementById("demoInput").value;
  let str2 = str;
  a = parseInt(str, 8).toString(10);
  
  var c = parseInt(a).toString(2);
  var d = parseInt(a).toString(16);
  var d2 = d.toUpperCase();
  var e = "Octal Base:  " + str2 + "<br>" + "Decimal:  " + a + "<br>" + "Binary:  " +  c + "<br>" + "Hexadecimal:  " +  d2;
  document.getElementById("demo").innerHTML=e;

  
}

