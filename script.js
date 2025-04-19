//your JS code here. If required.
// let num1=document.querySelector("#num1").value;
// let num2=document.querySelector("#num2").value;
let btn=document.querySelector("#calculate");
let output=document.querySelector("#result");

btn.addEventListener("click",()=>{
let result=0;
let num1=document.querySelector("#num1").value;
let num2=document.querySelector("#num2").value;
let operator=document.querySelector("#operator");	

	switch(operator){
		case '+':
			result=num1+num2;
		case '-':
			result=num1-num2;
		case '*':
			result=num1*num2;
		case '/':
			result=num1/num2;
	}
})