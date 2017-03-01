$(document).ready(function(){
  $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/freecodecamp",function(data){
    if(data.stream===null){
      $(".status").html("Free Code Camp is OFFLINE")
    }
    else{
      $(".status").html("Free Code Camp is ONLINE")
    }
  })









})
