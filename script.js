$(document).ready(function(){

  $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/freecodecamp",function(data){
    if(data.stream===null){
      $(".status").html("Free Code Camp is OFFLINE")
    }
    else{
      $(".status").html("Free Code Camp is ONLINE")
    }
  });

  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404"];

  for(var i=0; i<users.length; i++){
    $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+users[i],function(res){
      if(res.stream===null){

      }
      else{
      var logo =res.stream.channel.logo;
      var name= res.stream.channel.display_name;
      var status = res.stream.channel.status;
        $("#followerInfo").prepend("<div class='row line'>"+ '<div class="col-md-4">'+ "<img class='img-responsive' src=" + logo+ ">"+ "</div>" + '<div class="col-md-4">'+ name + '</div>' +'<div class="col-md-4">' + status +'</div> </div>');
      };
      console.log(name);


    });
  };
});
