/*=======================================
GLOBALS 
========================================*/
var sections = [
    {	sentence: " is a passionate developer based in the UK",
    },
    {	sentence: " is a lover of learning new things",
    },
    {	sentence: " is studying at University of Bristol",
    },
    {	sentence: " is looking for internships",
    },
    {	sentence: " is complaining about stuff",
    },
    {	sentence: " is interested to be a game developer someday",
    },
    {	sentence: " likes making web applications",
    },
    {	sentence: " is thinking what to write next",
    },
    {	sentence: " is trying to build up his portfolio",
    },
];

var i = 0;
var j = 0;
var k = 0;
var lengthSentence = 0;
var lengthArray = sections.length;
var forward = true;
var beginning = "Gowtham <br>Ravindrathas";
var currentPart = "";
var interval = 50;
var opening = false;

/*=======================================
TYPING 
========================================*/
function writing(text){
    lengthSentence = sections[i].sentence.length;
    var body = $("body");

    if(!opening){ // first part
        setTimeout(function(){	
            if(k < beginning.length){
                if(beginning[k] === "<"){
                    currentPart += ' <br id="brName">';
                    k=k+4;
                }
                currentPart += beginning[k];
                text.html(currentPart);
                k++;
                writing(text);			
            }

            else if(k === (beginning.length)){
                currentPart += " <br>";
                text.html(currentPart);
                opening = true;
                writing(text);
            }
        },interval);
    }

    else if(opening){ // sentences
        setTimeout(function(){
            interval = 50;
            if(j === lengthSentence){
                forward = false;
            }

            // if(j === lengthSentence-2){
            //     $(".afterTyping").one().addClass("onScreen");
            // }

            if( j === lengthSentence-1 && forward){
                interval = 2000;
            }

            if(j < lengthSentence && forward ){
                if(sections[i].sentence[j] === "&"){
                    currentPart += "<strong>";
                }
                
                else if(sections[i].sentence[j] === "%"){
                    currentPart += "</strong>";
                }

                else{
                    currentPart += sections[i].sentence[j];
                }
                text.html(currentPart);
                j++;
            }

            else if(j > 0 && !forward){
                if(sections[i].sentence[j] === "&"){
                    currentPart = currentPart.slice(0, - 8);
                }
                else if(sections[i].sentence[j] === "%"){
                    currentPart = currentPart.slice(0, - 9);
                }
                else{
                    currentPart = currentPart.slice(0, - 1); 
                }
                text.html(currentPart);
                j--;
            }
            else if(j === 0){
                forward = true;
                i++; // loop fra sezioni
            }
            if(i === lengthArray){
                i = 0;
            }
            writing(text);
        }, interval);
    }
}

/*=======================================
 BACKGROUND STUFF
========================================*/
$(document).ready(function(){

    var firstTimer = 2000;
    var text = $(".jstext");

    setTimeout(function(){
        writing(text);
    }, firstTimer);

});



