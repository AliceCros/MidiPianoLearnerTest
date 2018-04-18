/**
 * IMPORT
 */
$("#button_import").on("change", function(e){
    let files = $(this)[0].files;

    if(files){
        window.location = "learnmap.html";
    }
});

/**
 * PLAY/PAUSE VIDEO
 */

 var start = document.getElementById("start");
 //var start_msg = document.getElementsByClassName("start_msg");
 var video = document.getElementById("learning_map");
 var pause = 0;

 var message_pause = "Play?";

 /*
 function appear(message){
    start_msg.innerHTML = "Do you want to...";
    action.innerHTML = message;
    start.style.display = "block";
 }
 */

 function disappear(){
     //start.style.display = "none";
     video.play();
 }

 video.addEventListener("click", function(){
    if(pause % 2 == 0){
        video.pause();
        //appear(message_pause);
        pause += 1;
    } else {
        video.play();
        pause -= 1;
    }
 });