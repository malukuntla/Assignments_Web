var myObject1 = {
      question : 'what is national animal',
	  options : ['tiger', 'elephant', 'monkey', 'dog'],
	  answer : 'tiger'
               };
var myObject2 = {
      question : 'what is national bird',
	  options : ['tiger', 'crow', 'peacock', 'eagle'],
	  answer : 'peacock'
        	  };
var myObject3 = {
      question : 'what is national game',
	  options : ['basket ball', 'hockey', 'kabaddi', 'cricket'],
	  answer : 'hockey'
               };
var myObject4 = {
      question : 'how many colours are there in national flag',
	  options : ['3', '6', '2', '5'],
	  answer : '3'
              };
var myObject5 = {
      question : 'how many overs are there in t20',
	  options : ['10', '50', '40', '20'],
	  answer : '20'
              };
//console.log(myObject1);
 function callQuestion(){
		document.getElementById("qtn").innerHTML=myObject1.question;
		document.getElementById("1").value=myObject1.options[0];
		document.getElementById("2").value=myObject1.options[1];
		document.getElementById("3").value=myObject1.options[2];
		document.getElementById("4").value=myObject1.options[3];
 }
 function checkAnswer(index){
	 
	 var answeredByUser=document.getElementById(index).value;
	 if(answeredByUser === myObject1.answer){
		  alert("You answered correct");
			callQuestion();
	 }
	 else{
		 alert("You answered wrong");
		 callQuestion();
	 }
 }
