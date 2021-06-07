function en_gen_click() 
{
 var index = 0;
 var key = document.getElementById("e_key").value;

 var e0 = document.getElementById("en_0").value.charCodeAt(index)*key;
 var e1 = document.getElementById("en_1").value.charCodeAt(index)*key;
 var e2 = document.getElementById("en_2").value.charCodeAt(index)*key;
 var e3 = document.getElementById("en_3").value.charCodeAt(index)*key;
 var e4 = document.getElementById("en_4").value.charCodeAt(index)*key;
 var e5 = document.getElementById("en_5").value.charCodeAt(index)*key;
 var e6 = document.getElementById("en_6").value.charCodeAt(index)*key;
 var e7 = document.getElementById("en_7").value.charCodeAt(index)*key;
 var e8 = document.getElementById("en_8").value.charCodeAt(index)*key;
 var e9 = document.getElementById("en_9").value.charCodeAt(index)*key;
 var e10 = document.getElementById("en_10").value.charCodeAt(index)*key;
 var e11 = document.getElementById("en_11").value.charCodeAt(index)*key;
 var e12 = document.getElementById("en_12").value.charCodeAt(index)*key;
 var e13 = document.getElementById("en_13").value.charCodeAt(index)*key;
 var e14 = document.getElementById("en_14").value.charCodeAt(index)*key;
 var e15 = document.getElementById("en_15").value.charCodeAt(index)*key;
 var e16 = document.getElementById("en_16").value.charCodeAt(index)*key;
 var e17 = document.getElementById("en_17").value.charCodeAt(index)*key;
 var e18 = document.getElementById("en_18").value.charCodeAt(index)*key;
 var e19 = document.getElementById("en_19").value.charCodeAt(index)*key;

 var data = [e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,e16,e17,e18,e19];
 let e = "<hr/>"; 

 for (var y=0; y<data.length; y++)
 {
 	if(isNaN(data[y]))
 	{
 	  break;
 	}
 	else
      e +=  + data[y] + " ";		
 }
 document.getElementById("e_code").innerHTML = e;
 
}

function de_gen_click() 
{
 var index = 0;
 var key = document.getElementById("d_key").value;

 var d0 = document.getElementById("de_0").value/key;
 var de0 = String.fromCharCode(d0);
 var d1 = document.getElementById("de_1").value/key;
 var de1 = String.fromCharCode(d1);
 var d2 = document.getElementById("de_2").value/key;
 var de2 = String.fromCharCode(d2);
 var d3 = document.getElementById("de_3").value/key;
 var de3 = String.fromCharCode(d3);
 var d4 = document.getElementById("de_4").value/key;
 var de4 = String.fromCharCode(d4);
 var d5 = document.getElementById("de_5").value/key;
 var de5 = String.fromCharCode(d5);
 var d6 = document.getElementById("de_6").value/key;
 var de6 = String.fromCharCode(d6);
 var d7 = document.getElementById("de_7").value/key;
 var de7 = String.fromCharCode(d7);
 var d8 = document.getElementById("de_8").value/key;
 var de8 = String.fromCharCode(d8);
 var d9 = document.getElementById("de_9").value/key;
 var de9 = String.fromCharCode(d9);
 var d10 = document.getElementById("de_10").value/key;
 var de10 = String.fromCharCode(d10);
 var d11 = document.getElementById("de_11").value/key;
 var de11 = String.fromCharCode(d11);
 var d12 = document.getElementById("de_12").value/key;
 var de12 = String.fromCharCode(d12);
 var d13 = document.getElementById("de_13").value/key;
 var de13 = String.fromCharCode(d13);
 var d14 = document.getElementById("de_14").value/key;
 var de14 = String.fromCharCode(d14);
 var d15 = document.getElementById("de_15").value/key;
 var de15 = String.fromCharCode(d15);
 var d16 = document.getElementById("de_16").value/key;
 var de16 = String.fromCharCode(d16);
 var d17 = document.getElementById("de_17").value/key;
 var de17 = String.fromCharCode(d17);
 var d18 = document.getElementById("de_18").value/key;
 var de18 = String.fromCharCode(d18);
 var d19 = document.getElementById("de_19").value/key;
 var de19 = String.fromCharCode(d19);

 var data = [de0,de1,de2,de3,de4,de5,de6,de7,de8,de9,de10,de11,de12,de13,de14,de15,de16,de17,de18,de19];
 let e = "<hr/>"; 

 for (var y=0; y<data.length; y++)
 {
 	//alert(data[y]);
 	if(data[y] == "NaN")
 	{
 		alert();
 	  break;
 	}
 	else
 	  //alert(data[y]);
      e += data[y];		
 }
 document.getElementById("d_code").innerHTML = e;
 
}

$(document).ready(function () 
{
  
var currentBoxNumber = 0;
$("#encod_div").keypress(function (event) 
{
    if (event.keyCode == 13) 
    {
        textboxes = $("input.encod");
        currentBoxNumber = textboxes.index(event.target);
        if (textboxes[currentBoxNumber + 1] != null) 
        {
            nextBox = textboxes[currentBoxNumber + 1];
            nextBox.focus();
            nextBox.select();
            event.preventDefault();
            return false;
        }
    }
});

});
