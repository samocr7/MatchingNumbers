var numbersArray=[];
var score=0+0;
window.onload=music();
window.onload= getNumbers();

function music(){
    var audio = new Audio('music/music.mp3');
    audio.play();
}

function getNumbers(){
    numbersArray=[];
        var p1 = Promise.resolve($.getJSON("http://www.pppaul.blunus.com/process.php").then(
          function(data){
            return data;
 }
));

        var p2 = Promise.resolve($.getJSON("http://www.pppaul.blunus.com/process.php").then(
          function(data){
            return data;
 }
 ));


        var p3 = Promise.resolve($.getJSON("http://www.pppaul.blunus.com/process.php").then(
          function(data){
            return data;
  }
    ));
         var p4 = Promise.resolve($.getJSON("http://www.pppaul.blunus.com/process.php").then(
          function(data){
            return data;
          }
             ));
    var p5 = Promise.resolve($.getJSON("http://www.pppaul.blunus.com/process.php").then(
          function(data){
            return data;
          }
             ));
    var p6 = Promise.resolve($.getJSON("http://www.pppaul.blunus.com/process.php").then(
          function(data){
            return data;
          }
             ));


        Promise.all([p1, p2, p3, p4, p5, p6]).then(function(data) { 
          console.log(data);
 });

        Promise.all([p1, p2, p3, p4, p5, p6]).then(function(data) { 
          console.log(data);
            

            for(var x=0; x<data.length; x++){
                var roll = data[x].Roll;
                
                    for(var y=0; y<roll.length; y++){
                    numbersArray.push(roll[y].value);
                        if (numbersArray.length==39){
                            break;
                      }
              }
     }
        
            StartGame();
        
        });
    }
    


function StartGame(){
    console.log(numbersArray);
    var y=0;
        for(var x=1; x<=6; x++,y++){
        var test = document.getElementById("ga6r1"+x);
            if($(test).hasClass("hide")){
                
            }
            else{
        test.innerHTML=(numbersArray[y]);
            //console.log("EQUALS"+test.innerHTML);
            setImages("ga6r1"+x);
            }
            }
        
    
    for(var x=1; x<=6; x++,y++){
        var test = document.getElementById("ga6r2"+x);
        if($(test).hasClass("hide")){
                
            }
            else{
        test.innerHTML=(numbersArray[y]);
        setImages("ga6r2"+x);
    }
    }
    
    for(var x=1; x<=6; x++, y++){
        var test = document.getElementById("ga6r3"+x);
        if($(test).hasClass("hide")){
                
            }
            else{
        test.innerHTML = (numbersArray[y]);
        setImages("ga6r3"+x);
            }
    }
    for(var x=1; x<=6; x++, y++){
        var test = document.getElementById("ga6r4"+x);
        if($(test).hasClass("hide")){
                
            }
            else{
        test.innerHTML = (numbersArray[y]);
        setImages("ga6r4"+x);
            }
    }
    for(var x=1; x<=6; x++, y++){
        var test = document.getElementById("ga6r5"+x);
        if($(test).hasClass("hide")){
                
            }
            else{
        test.innerHTML = (numbersArray[y]);
        setImages("ga6r5"+x);
            }
    }
    for(var x=1; x<=6; x++, y++){
        var test = document.getElementById("ga6r6"+x);
        if($(test).hasClass("hide")){
            
        }
        else{
            test.innerHTML=(numbersArray[y]);
            setImages("ga6r6"+x);
        }
    }
    for(var x=1; x<=3; x++, y++){
        var test = document.getElementById("num"+x);
        if($(test).hasClass("hide")){
                
            }
            else{
        test.innerHTML = (numbersArray[y]);
        setImages("num"+x);
            }
    }
}

    

    
function setImages(id){
    var setNumber = document.getElementById(id);
    if (setNumber.innerHTML==1){
        setNumber.style.backgroundImage="url(images/Star1.jpg)";
                setNumber.style.width="50px";
                 setNumber.style.height="50px";
                 setNumber.style.backgroundSize="50px 50px";
                setNumber.style.margin="2px";
                 setNumber.style.border= "2px solid orange";
                 setNumber.style.borderRadius="5px";
                
         setNumber.style.pointerEvents="auto";
        setNumber.style.opacity="1.0";
    }
    if (setNumber.innerHTML==2){
        setNumber.style.backgroundImage="url(images/Star2.jpg)";
                setNumber.style.width="50px";
                 setNumber.style.height="50px";
                 setNumber.style.backgroundSize="50px 50px";
                setNumber.style.margin="2px";
                 setNumber.style.border= "2px solid orange";
                 setNumber.style.borderRadius="5px";
                
                setNumber.style.pointerEvents="auto";
        setNumber.style.opacity="1.0";
    
}
     if (setNumber.innerHTML==3){
        setNumber.style.backgroundImage="url(images/Star3.jpg)";
                setNumber.style.width="50px";
                 setNumber.style.height="50px";
                 setNumber.style.backgroundSize="50px 50px";
                setNumber.style.margin="2px";
                 setNumber.style.border= "2px solid orange";
                 setNumber.style.borderRadius="5px";
                    setNumber.style.visibility="visible";
          setNumber.style.pointerEvents="auto";
         setNumber.style.opacity="1.0";
    
    
}
     if (setNumber.innerHTML==4){
        setNumber.style.backgroundImage="url(images/Star4.jpg)";
                setNumber.style.width="50px";
                 setNumber.style.height="50px";
                 setNumber.style.backgroundSize="50px 50px";
                setNumber.style.margin="2px";
                 setNumber.style.border= "2px solid orange";
                 setNumber.style.borderRadius="5px";
         setNumber.style.pointerEvents="auto";
                    
          setNumber.style.opacity="1.0";
    
    
}
     if (setNumber.innerHTML==5){
        setNumber.style.backgroundImage="url(images/Star5.jpg)";
                setNumber.style.width="50px";
                 setNumber.style.height="50px";
                 setNumber.style.backgroundSize="50px 50px";
                setNumber.style.margin="2px";
                 setNumber.style.border= "2px solid orange";
                 setNumber.style.borderRadius="5px";
                    
          setNumber.style.pointerEvents="auto";
         setNumber.style.opacity="1.0";
    
    
}
     if (setNumber.innerHTML==6){
        setNumber.style.backgroundImage="url(images/Star6.jpg)";
                setNumber.style.width="50px";
                 setNumber.style.height="50px";
                 setNumber.style.backgroundSize="50px 50px";
                setNumber.style.margin="2px";
                 setNumber.style.border= "2px solid orange";
                 setNumber.style.borderRadius="5px";
                setNumber.style.visibility="visible";
          setNumber.style.pointerEvents="auto";
         setNumber.style.opacity="1.0";
    
    
}
     if (setNumber.innerHTML==7){
        setNumber.style.backgroundImage="url(images/Star7.jpg)";
                setNumber.style.width="50px";
                 setNumber.style.height="50px";
                 setNumber.style.backgroundSize="50px 50px";
                setNumber.style.margin="2px";
                 setNumber.style.border= "2px solid orange";
                 setNumber.style.borderRadius="5px";
                
          setNumber.style.pointerEvents="auto";
         setNumber.style.opacity="1.0";
    
    
}
     if (setNumber.innerHTML==8){
        setNumber.style.backgroundImage="url(images/Star8.jpg)";
                setNumber.style.width="50px";
                 setNumber.style.height="50px";
                 setNumber.style.backgroundSize="50px 50px";
                setNumber.style.margin="2px";
                 setNumber.style.border= "2px solid orange";
                 setNumber.style.borderRadius="5px";
         setNumber.style.pointerEvents="auto";
                
         setNumber.style.opacity="1.0";
    
    
}
     if (setNumber.innerHTML==9){
        setNumber.style.backgroundImage="url(images/Star9.jpg)";
                setNumber.style.width="50px";
                 setNumber.style.height="50px";
                 setNumber.style.backgroundSize="50px 50px";
                setNumber.style.margin="2px";
                 setNumber.style.border= "2px solid orange";
                 setNumber.style.borderRadius="5px";
               
          setNumber.style.pointerEvents="auto";
         setNumber.style.opacity="1.0";
    
    
}
}
                                                                            
function getDraw(){
     var newD =  new Audio('music/refresh.wav');
    newD.play();
    var draw1=0;
    var draw2=0;
    var draw3=0;
        while(draw1 ==0 || draw1 ==10|| draw2==0 ||draw2==10 || draw3==0 || draw3==10){
        draw1 =Math.round(Math.random()*9);
        draw2 =Math.round(Math.random()*9);
        draw3 =Math.round(Math.random()*9);
        }
        var test = document.getElementById("num1");
        test.innerHTML = (draw1);
    setImages("num1");
        var test = document.getElementById("num2");
        test.innerHTML = (draw2);
    setImages("num2");
        var test = document.getElementById("num3");
        test.innerHTML = (draw3);
    setImages("num3");
    updateScore(-15);
        
    }
    


function getNewBoard(){
     var newB =  new Audio('music/refresh.wav');
    newB.play();
    updateScore(-30);
    getNumbers();    
}

function updateScore(points){
    if (points==0){
        score=0;
        changeScore=document.getElementById("scoreval");
        changeScore.innerHTML=score;
    }
    score+=points;
    changeScore = document.getElementById("scoreval");
    changeScore.innerHTML=score;
}
function resetScore(){
     var reset = new Audio('music/refresh.wav');
    reset.play();
    getNumbers();
 
    for(var x=1; x<=6; x++){
        var vis = document.getElementById("ga6r1"+x);
            if($(vis).hasClass("hide")){
                $(vis).toggleClass("hide");     
            } 
            }
        
    for(var x=1; x<=6; x++){
        var vis = document.getElementById("ga6r2"+x);
            if($(vis).hasClass("hide")){
                $(vis).toggleClass("hide");     
            } 
            }
    for(var x=1; x<=6; x++){
        var vis = document.getElementById("ga6r3"+x);
            if($(vis).hasClass("hide")){
                $(vis).toggleClass("hide");     
            } 
            }
    for(var x=1; x<=6; x++){
        var vis = document.getElementById("ga6r4"+x);
            if($(vis).hasClass("hide")){
                $(vis).toggleClass("hide");     
            } 
            }
    for(var x=1; x<=6;x++){
        var vis = document.getElementById("ga6r5"+x);
            if($(vis).hasClass("hide")){
                $(vis).toggleClass("hide");
            }
    }
    for(var x=1; x<=6;x++){
        var vis = document.getElementById("ga6r6"+x);
        if($(vis).hasClass("hide")){
            $(vis).toggleClass("hide");
        }
    }
    updateScore(0);
    
}

function ImageOnClick(id){
   var clicked = document.getElementById(id);
    clicked= clicked.innerHTML;
    var chosen = document.getElementById("num1");
    var chosen2 = document.getElementById("num2");
    var chosen3 = document.getElementById("num3");
    var chosen = chosen.innerHTML;
    console.log(chosen);
    var chosen2 = chosen2.innerHTML;
    console.log(chosen2);
    var chosen3 = chosen3.innerHTML;
    console.log(chosen3);
    
    if(clicked==chosen||clicked==chosen2||clicked==chosen3){
        var correct = new Audio('music/correct.mp3');
        correct.play();
        var pointGain= clicked;
        pointGain= parseInt(pointGain);
        updateScore(pointGain);
        var right = document.getElementById(id);
        $("#"+id).addClass("hide");
    }
    else{
        var incorrect = new Audio('music/wrong.wav');
        incorrect.play();
        var wrong = document.getElementById(id);
        wrong.style.opacity="0.4";
        wrong.style.pointerEvents="none";
        wrong= wrong.innerHTML;
        var pointLost = 0-wrong;
        updateScore(pointLost);
    }
    }

function ImageOnHover(id){
    $("#"+id).toggleClass("animate");
}
    
function ImageOnOut(id){
    $("#"+id).toggleClass("animate");
    
}
    

$(document).ready(function(){
    
    $("#newboard").click(function(){

    });
    $("startgame").click(function(){
        
    });
    $("newdraw").click(function(){
        
    });
});
