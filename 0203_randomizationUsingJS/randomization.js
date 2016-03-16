function generateRandomNumber(){
    var max = 5;
    
    for(var i = 0;i<max ; i++){
        var temp = Math.floor(Math.random()*max);
      
        if(randomArray.indexOf(temp) == -1){
            randomArray.push(temp);
        }
        else{
         i--;
        }
    }
    length=randomArray.length;
};

generateRandomNumber();