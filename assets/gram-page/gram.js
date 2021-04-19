

  function convertFunction() {

    
    
    var str = +document.getElementById("demoInput").value;
    var a = str / 1000;
    var b = str * 1000;
    
  
;
    var e = "Kilogram:  " + a + "  kg" + "<br>" + "Milligram:  " + b + "  mg";
    document.getElementById("demo").innerHTML=e;

    
  }

