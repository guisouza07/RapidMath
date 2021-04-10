function convertFunction() {
  var x = document.getElementById("demoInput").value;
  document.getElementById("demo").innerHTML = x;
}

function convertFunction() {
  
  var str = document.getElementById("demoInput").value;
  let str2 = str;
  a = parseInt(str, 16).toString(10);
  
  var c = parseInt(a).toString(2);
  var d = parseInt(a).toString(8);
  var d2 = d.toUpperCase();
  var e = "Hex Base:  " + str2 + "<br>" + "Decimal:  " + a + "<br>" + "Binary:  " +  c + "<br>" + "Octal:  " +  d2;
  document.getElementById("demo").innerHTML=e;

  
}

