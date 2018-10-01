//loop for title(changing variable)
function titleInfoChange(){
    var aboutMeArray = ["is getting into web development!", "is bored...", "is hungry"];
    var aboutMeArrayLen = aboutMeArray.length;

    // var info = aboutMeArray[0];
    // document.getElementById("title-span").innerHTML = "info";


    // for(var i = 0; i < aboutMeArrayLen; i++) {
    //     var info = aboutMeArray[i];
    //     document.getElementsById('title-span').innerHTML = info;
        
    // }
    var i = 0;
    while(i < aboutMeArrayLen) {
        document.getElementsById('title-span').innerHTML = aboutMeArray[i];
        i++;
    }
}


function myFunction() {
    document.getElementById("title-span").innerHTML = "Paragraph changed.";
}