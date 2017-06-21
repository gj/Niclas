$(document).ready(function() {
     if($(window).width() > 515) {
         $("#vid").attr("src", "./media/Mute.mp4");
     } else {
         $("#vid").attr("src", "./media/MuteSD.mp4");
     }
}); 
