

  function convertFunction() {

    
    
    var str = +document.getElementById("demoInput").value;
    var a = str / 3281;
    var b = str / 3.281;
    
    var c = str * 30.48;
    var d = str * 305;
;
    var e = "Kilometers:  " + a + "  Km" + "<br>" + "Meters:  " + b + "  m" + "<br>" + "Centimeters:  " +  c + "  cm" + "<br>" + "Millimeters:  " +  d + "  mm";
    document.getElementById("demo").innerHTML=e;

    
  }

