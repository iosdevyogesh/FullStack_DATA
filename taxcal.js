function validateForm() {
  var x = document.forms["myForm"]["EmpId"].value;
      if (x == "") 
  {
    alert("Employee Id must be filled out");
}
   if (x.length<5) 
   {
   	alert("Employee Id must be atleast 5 Characters");
  }
  } 



function myexptype(ExpType,ExpAmt)
{
	if(ExpType==="MedicalExpense")
	{
		if(ExpAmt<=1000)
		{
			var tc=ExpAmt*(15/100);
			alert("tax amount is:+ ${tc}");
		}
		else if(ExpAmtx >=1001|| x < 10000)
		{
			var tc=ExpAmt*(20/100);
			alert("tax amount is:+ ${tc}");
		}
		else 
		{
			var tc=ExpAmt*(25/100);
			alert("tax amount is:+ ${tc}");
		}
	}
	else if(ExpType==="TravelExpense")
	{
		if(ExpAmt<=1000)
		{
			var tc=ExpAmt*(10/100);
			alert("tax amount is:+ ${tc}");
		}
		else if(ExpAmtx >=1001|| x < 10000)
		{
			var tc=ExpAmt*(15/100);
			alert("tax amount is:+ ${tc}");
		}
		else 
		{
			var tc=ExpAmt*(20/100);
			alert("tax amount is:+ ${tc}");
		}
	}
	else
	{
		if(ExpAmt<=1000)
		{
			var tc=ExpAmt*(5/100);
			alert("tax amount is:+ ${tc}");
		}
		else if(ExpAmtx >=1001|| x < 10000)
		{
			var tc=ExpAmt*(10/100);
			alert("tax amount is:+ ${tc}");
		}
		else 
		{
			var tc=ExpAmt*(15/100);
			alert("tax amount is:+ ${tc}");
		}
	}
}