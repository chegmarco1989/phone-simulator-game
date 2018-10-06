var receive = document.createElement('audio');
    receive.setAttribute('src', 'sound/receive.mp3');
var bemvindo = document.createElement('audio');
    bemvindo.setAttribute('src', 'sound/quest/bemvindo.mp3');
var key = document.createElement('audio');
    key.setAttribute('src', 'sound/key.mp3');
var power = document.createElement('audio');
    power.setAttribute('src', 'sound/power.mp3');
var notfound = document.createElement('audio');
    notfound.setAttribute('src', 'sound/notfound.mp3');
var music1 = document.createElement('audio');
    music1.setAttribute('src', 'sound/music/1.mp3');

var bg = 'false';

receive.loop = true;

var ligacao = '0';

var flag = false;
var splash = "false";
var ligado = "false";
var user = {
   'name' : 'Stranger',
    'level' : '0',
    'exp' : '0',
    'money': '10'
}

var quest = {
  'what': '1',
  'name' : 'Quest inicial',
  'addxp' : '10',
  'money' : '100'
}


setInterval(function() {
var light = document.getElementById("phone-notification-light")
  if (flag) {
    light.style.background = "none";
    light.style.boxShadow = "none";
  } else {
    light.style.background = "#0FFF35";
    light.style.boxShadow = "0px 0px 5px #0FFF35";
    light.style.transition = "all 0.5s";
  }
  flag = !flag;
}, 2000);

    $( "#home" ).click(function() {
      if(splash == "false"){
        splash = "true";
        power.play();
      }
      if(splash == "true"){
        $( "#anotacao" ).css( "opacity", "0" );
        $( "#anotacao" ).css( "z-index", "0" );
        $( "#anotacao" ).css( "transform", "scale(0.2)" );
        $( "#chamada" ).css( "opacity", "0" );
        $( "#chamada" ).css( "z-index", "0" );
        $( "#chamada" ).css( "transform", "scale(0.2)" );
        $( "#chrome" ).css( "opacity", "0" );
        $( "#chrome" ).css( "z-index", "0" );
        $( "#chrome" ).css( "transform", "scale(0.2)" );
        $( "#music" ).css( "opacity", "0" );
        $( "#music" ).css( "z-index", "0" );
        $( "#music" ).css( "transform", "scale(0.2)" );
      }
  });

//Splash
setInterval(function() {
 if(ligado == "false"){
  if(splash == "true"){
   $( "#splash" ).css( "opacity", "1" );
   setTimeout(  function() {
   $( "#splash" ).css( "display", "none" );
   $( "#ligado" ).css( "opacity", "1" );
    ligado = "true";
    power.volume = 0;
   }, 5000);
  }
 }
 }, 500);


//Ligacao
setInterval(function() {
  if(ligado == "true"){
    if(quest.what == '1'){
       setTimeout(  function() {
         $( "#ligacao" ).css( "opacity", "1" );
         $( "#ligacao" ).css( "transform", "scale(1)" );
         ligacao = "onet";
         receive.play();
       }, 200);

    }
  }
 }, 500);

// Quest

$( ".atender" ).click(function() {
        receive.volume = 0;
        setTimeout(  function() {
          $("#ligacao").css( "transform" , "scale(0.2)");
          $("#ligacao").css( "opacity" , "0");
          $("#ligacao2").css( "opacity" , "1");
          $("#ligacao2").css( "transform" , "scale(1)");
          bemvindo.play();
          quest.what = '2';
        }, 1000);
        setTimeout(  function() {
            bemvindo.volume = 0;
            $("#ligacao2").css( "transform" , "scale(0.2)");
            $("#ligacao2").css( "opacity" , "0");
            $("#ligacao").css( "transform" , "scale(0.2)");
            $("#ligacao").css( "opacity" , "0");
            $(".questli").html("Faça uma ligação para 4002");
        }, 12000);
      });


$( ".one" ).click(function() {
  var num= $(".numeros").val() + 1;
  $(".numeros").val(num);
  key.play();
});

$( ".two" ).click(function() {
  var num= $(".numeros").val() + 2;
  $(".numeros").val(num);
  key.play();
});

$( ".thre" ).click(function() {
  var num= $(".numeros").val() + 3;
  $(".numeros").val(num);
  key.play();
});

$( ".four" ).click(function() {
  var num= $(".numeros").val() + 4;
  $(".numeros").val(num);
  key.play();
});

$( ".five" ).click(function() {
  var num= $(".numeros").val() + 5;
  $(".numeros").val(num);
  key.play();
});

$( ".six" ).click(function() {
  var num= $(".numeros").val() + 6;
  $(".numeros").val(num);
  key.play();
});

$( ".seven" ).click(function() {
  var num= $(".numeros").val() + 7;
  $(".numeros").val(num);
  key.play();
});

$( ".eit" ).click(function() {
  var num= $(".numeros").val() + 8;
  $(".numeros").val(num);
  key.play();
});

$( ".nine" ).click(function() {
  var num= $(".numeros").val() + 9;
  $(".numeros").val(num);
  key.play();
});

$( ".zero" ).click(function() {
  var num= $(".numeros").val() + 0;
  $(".numeros").val(num);
  key.play();
});

$(".limpar").click(function() {
  $(".numeros").val("");
  key.play();
});


//Aplicativos clicks

$( ".bloco" ).click(function() {
  $("#anotacao").css( "transform" , "scale(1)");
  $("#anotacao").css( "opacity" , "1");
  $("#anotacao").css( "z-index" , "200");
});

$( ".tele" ).click(function() {
  $("#chamada").css( "transform" , "scale(1)");
  $("#chamada").css( "opacity" , "1");
  $("#chamada").css( "z-index" , "200");
});

$( ".chrome" ).click(function() {
  $("#chrome").css( "transform" , "scale(1)");
  $("#chrome").css( "opacity" , "1");
  $("#chrome").css( "z-index" , "200");
});

$( ".musicas" ).click(function() {
  $("#music").css( "transform" , "scale(1)");
  $("#music").css( "opacity" , "1");
  $("#music").css( "z-index" , "200");
});

$( ".ligars" ).click(function() {
  var number= $(".numeros").val();
  if(number == "4002"){
    receive.volume = 1;
    receive.play();
    $("#ligando").css( "transform" , "scale(1)");
    $("#ligando").css( "opacity" , "1");
    $("#ligando").css( "z-index" , "200");
  }
  else{
    notfound.play();
  }
});

$( ".playmusic" ).click(function() {
if(bg == "false"){
  music1.play();
  music1.volume = 1;
  bg = "true";
  $(".playmusic").text("Pausar");
}
else{
  $(".playmusic").text("Play");
   music1.volume = 0;
   bg = "false";
}
});