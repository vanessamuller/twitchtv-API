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
      if(res.stream!=null){
        var logo =res.stream.channel.logo;
        var name= res.stream.channel.display_name;
        var status = res.stream.channel.status;
        $("#followerInfo").prepend("<div class='row line'>"+ '<div class="col-md-4">'+ "<img class='img-responsive' src=" + logo+ ">"+ "</div>" + '<div class="col-md-4">'+ name + '</div>' +'<div class="col-md-4">' + status +'</div> </div>');
      };

      if(res.stream===null){
        var name=res._links.channel.substr(38);
        $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/"+name,function(rest){
          if(rest.error){
            var status3=rest.message;
            $("#followerInfo").prepend("<div class='row line'>"+ '<div class="col-md-4">'+ "<img class='img-responsive' src='http://i0.kym-cdn.com/profiles/icons/big/000/071/040/404%20is%20not%20found.jpg' >"+ "</div>" + '<div class="col-md-4">'+ name + '</div>' +'<div class="col-md-4">' + status3 +'</div> </div>');
          }
          else{
            var logo2= rest.logo;
            $("#followerInfo").prepend("<div class='row line'>"+ '<div class="col-md-4">'+ "<img class='img-responsive' src=" + logo2+ ">"+ "</div>" + '<div class="col-md-4">'+ name + '</div>' +'<div class="col-md-4">OFFLINE</div> </div>');
          };
        });
      };
    });
  };



});
