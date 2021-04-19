

  function convertFunction() {

    
    
    var str = +document.getElementById("demoInput").value;
    var a = str * 1000;
    var b = str * 1000000;
    
  
;
    var e = "Gram:  " + a + "  g" + "<br>" + "Milligram:  " + b + "  mg";
    document.getElementById("demo").innerHTML=e;

    
  }

