

  function convertFunction() {

    
    
    var str = +document.getElementById("demoInput").value;
    var a = str / 30.48;
    var b = str /100000;
    
    var c = str / 100;
    var d = str * 10
;
    var d2 = d.toUpperCase();
    var e = "Feet:  " + a + "<br>" + "Kilometers:  " + b + "<br>" + "Meters:  " +  c + "<br>" + "Milimeters:  " +  d2;
    document.getElementById("demo").innerHTML=e;

    
  }

