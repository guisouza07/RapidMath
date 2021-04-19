

  function convertFunction() {

    
    
    var str = +document.getElementById("demoInput").value;
    var a = str * 3281;
    var b = str *1000;
    
    var c = str *100000;
    var d = str * 1000000;
;
    var e = "Feet:  " + a + "  ft" + "<br>" + "Meters:  " + b + "  m" + "<br>" + "Centimeters:  " +  c + "  cm" + "<br>" + "Millimeters:  " +  d + "  mm";
    document.getElementById("demo").innerHTML=e;

    
  }

