

  function convertFunction() {

    
    
    var str = +document.getElementById("demoInput").value;
    var a = str / 30.48;
    var b = str /100000;
    
    var c = str / 100;
    var d = str * 10
;
    var e = "Feet:  " + a + "  ft" + "<br>" + "Kilometers:  " + b + "  Km" + "<br>" + "Meters:  " +  c + "  m" + "<br>" + "Millimeters:  " +  d + "  mm";
    document.getElementById("demo").innerHTML=e;

    
  }

