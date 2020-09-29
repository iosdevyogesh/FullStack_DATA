console.log("Hello World");

function addNumbers(x,y)
{
    console.log("Addition of ",x," And ",y," is: ",x+y);
}
function substractNumbers(x,y)
{
    console.log("Substraction of ",x," And ",y," is: ",x-y);
}
function multiplyNumbers(x,y)
{
    console.log("Multiplicatuion of ",x," And ",y," is: ",x*y);
}
function devideNumbers(x,y)
{
    console.log("Div of ",x," And ",y," is: ",x/y);
}


addNumbers(100,200);
substractNumbers(340,90);
multiplyNumbers(10,20);
devideNumbers(100,10);

function checkNumber()
{
            var someArray = [12,22,33,40,"Hello",32];
            var out = 0;
            for (i in someArray){
                if(!(isNaN( someArray[i]))){
                    out = out + someArray[i];
                }
                console.log("Output:: " + out)
}  
}

checkNumber()

func value(){
	checkTeoNumbers = 10 + 20 = 3000
	checkFOirNumbers = 10 + 20 = 4000
	checkFIveNumbers = 10+ 29 = 3000
}




var output;
function add(x,y) {
     if (isNaN(x))
         x=0;
     if (isNaN(y))
         y=0;
    output=x+y;
    console.log("result "+output);
}
function subtract(x,y) {
     if (isNaN(x))
         x=0;
     if (isNaN(y))
         y=0;
    output=x-y;
    
    console.log("result "+output);
}
function multiply(x,y) {
    if (isNaN(x))
         x=1;
     if (isNaN(y))
         y=1;
    output=x*y;
    
    console.log("result "+resoutputult);
}
function divide(x,y) {
if (isNaN(x))
         x=1;
     if (isNaN(y))
         y=1;
    result=x/y;
    
    console.log("result "+result);
}

 

add(5,10);
subtract(5,"hello");
multiply(10,"hello");
divide(10,5);