var n1, n2, result=null;
 
 /*function calc(n) {
	n1=parseInt(document.getElementById("num1").value);
	n2=parseInt(document.getElementById("num2").value);
	
	 switch(n) {
		 case 0:
	 }
 };*/

 
function add(){
	n1=parseInt(document.getElementById("num1").value);
	n2=parseInt(document.getElementById("num2").value);
	console.log(n1);
	console.log(n2);
 
	if(isNaN(n1)){
		alert("Please enter the first number");		
	}
	else if(isNaN(n2)){
		alert("Please enter the second number");		
	}	
	else{	
    result=n1+n2;
	}
	document.getElementById("result").value = result;
}

function subtract(){
	
    n1=parseInt(document.getElementById("num1").value);
	n2=parseInt(document.getElementById("num2").value);
	console.log(n1);
	console.log(n2);
	if(isNaN(n1)){
		alert("Please enter the first number");		
	}
	else if(isNaN(n2)){
		alert("Please enter the second number");		
	}	
	else{
    result=n1-n2;
	}
	document.getElementById("result").value = result;
	
}

function multiply(){
    n1=parseInt(document.getElementById("num1").value);
	n2=parseInt(document.getElementById("num2").value);
	console.log(n1);
	console.log(n2);
	if(isNaN(n1)){
		alert("Please enter the first number");		
	}
	else if(isNaN(n2)){
		alert("Please enter the second number");		
	}	
	else{
    result=n1*n2;
	}
	document.getElementById("result").value = result;
}

function divide(){
    n1=parseInt(document.getElementById("num1").value);
	n2=parseInt(document.getElementById("num2").value);
	console.log(n1);
	console.log(n2);
	if(isNaN(n1)){
		alert("Please enter the first number");		
	}
	else if(isNaN(n2)){
		alert("Please enter the second number");		
	}	
	else if(n2===0){
		alert("Division by zero is not possible.Please enter a valid number.");}
	else{	
    result=n1/n2;
	}
	document.getElementById("result").value = result;
}


