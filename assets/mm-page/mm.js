

  function convertFunction() {

    
    
    var str = +document.getElementById("demoInput").value;
    var a = str / 305;
    var b = str /1000000;
    
    var c = str / 1000;
    var d = str / 10
;
    var e = "Feet:  " + a + "  ft" + "<br>" + "Kilometers:  " + b + "  Km" + "<br>" + "Meters:  " +  c + "  m" + "<br>" + "Centimeters:  " +  d + "  cm";
    document.getElementById("demo").innerHTML=e;

    
  }

