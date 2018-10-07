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
var gota = document.createElement('audio');
    gota.setAttribute('src', 'sound/quest/quest2/gota.mp3');
var grito = document.createElement('audio');
    grito.setAttribute('src', 'sound/quest/quest2/socorro.mp3');
var fora = document.createElement('audio');
    fora.setAttribute('src', 'sound/quest/fora.mp3');
 var devo = document.createElement('audio');
     devo.setAttribute('src', 'sound/quest/devo.mp3');
var policial1 = document.createElement('audio');
      policial1.setAttribute('src', 'sound/quest/policial1.wav');

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
        fora.play();
        $(".ligandotexto").text("Chamada encerrada");
        }, 12000);
        setTimeout(  function() {
            bemvindo.volume = 0;
            fora.volume = 0;
            $("#ligacao2").css( "transform" , "scale(0.2)");
            $("#ligacao2").css( "opacity" , "0");
            $("#ligacao").css( "transform" , "scale(0.2)");
            $("#ligacao").css( "opacity" , "0");
            $(".questli").html("Faça uma ligação para 4002");
        }, 18000);
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


// Ligando
$( ".ligars" ).click(function() {
music1.volume = 0;
  $(".ligandoenc").html("Chamando...");
  var number= $(".numeros").val();
  if(number == "4002"){
    receive.volume = 1;
    receive.play();
    $("#ligando").css( "transform" , "scale(1)");
    $("#ligando").css( "opacity" , "1");
    $("#ligando").css( "z-index" , "200");
    setTimeout(  function() {
    receive.volume = 0;
    $("#ligando").css( "transform" , "scale(0.5)");
    $("#ligando").css( "opacity" , "0");
    $("#ligando").css( "z-index" , "0");
    $(".ligando").css( "transform" , "scale(1)");
    $(".ligando").css( "opacity" , "1");
    $(".ligando").css( "z-index" , "200");
    quest.what = 3;
    }, 5000);
  }
  else if(number == "190"){
    if(quest.what == '4'){
    $(".ligandotext").text("Ligação em andamento..");
    receive.volume = 1;
    receive.play();
    $("#ligando").css( "transform" , "scale(1)");
    $("#ligando").css( "opacity" , "1");
    $("#ligando").css( "z-index" , "200");
    setTimeout(  function() {
    receive.volume = 0;
    $("#ligando").css( "transform" , "scale(0.5)");
    $("#ligando").css( "opacity" , "0");
    $("#ligando").css( "z-index" , "0");
    $(".ligando").css( "transform" , "scale(1)");
    $(".ligando").css( "opacity" , "1");
    $(".ligando").css( "z-index" , "200");
    quest.what = 5;
    }, 5000);
    }
  else{
    receive.play();
    receive.volume = 1;
    $("#ligando").css( "transform" , "scale(1)");
    $("#ligando").css( "opacity" , "1");
    $("#ligando").css( "z-index" , "200");
    setTimeout(  function() {
      devo.play();
      receive.volume = 0;
    }, 4000);
    setTimeout(  function() {
      notfound.volume = 0;
      $(".ligandoenc").html("Chamada encerrada");
    }, 9000);
    setTimeout(  function() {
      fora.volume = 1;
      fora.play();
    }, 10000);
    setTimeout(  function() {
      fora.volume = 0;
    $("#ligando").css( "transform" , "scale(0.5)");
    $("#ligando").css( "opacity" , "0");
    $("#ligando").css( "z-index" , "0");
    }, 28000);
  }
  }
  else{
    receive.play();
    receive.volume = 1;
    $("#ligando").css( "transform" , "scale(1)");
    $("#ligando").css( "opacity" , "1");
    $("#ligando").css( "z-index" , "200");
    setTimeout(  function() {
      notfound.play();
      receive.volume = 0;
    }, 4000);
    setTimeout(  function() {
      notfound.volume = 0;
      $(".ligandoenc").html("Chamada encerrada");
    }, 9000);
    setTimeout(  function() {
      fora.volume = 1;
      fora.play();
    }, 10000);
    setTimeout(  function() {
      fora.volume = 0;
    $("#ligando").css( "transform" , "scale(0.5)");
    $("#ligando").css( "opacity" , "0");
    $("#ligando").css( "z-index" , "0");
    }, 28000);
  }
});

//Ligação quest

setInterval(function() {
if(quest.what == '3'){
    $("#numberligado").html("4002");
    setTimeout(  function() {
      gota.play();
    }, 500);
    setTimeout(  function() {
      gota.volume = 0;
      grito.play();
    }, 10000);
setTimeout(  function() {
      fora.volume = 1;
      gota.volume = 0;
      grito.volume = 0;
      fora.play();
      $(".ligandotext").text("Chamada encerrada..");
      $(".questli").html("Estou com medo.. Devo ligar para a policia?.. Acho que não");
}, 13000);

setTimeout(  function() {
  fora.volume = 0;
  $(".ligando").css( "transform" , "scale(0.5)");
  $(".ligando").css( "opacity" , "0");
  $(".ligando").css( "z-index" , "0");
  quest.what = 4;
}, 18000);

}

if(quest.what == '5'){
    $("#numberligado").html("190");
    $("#ligando").css( "transform" , "scale(0.5)");
    $("#ligando").css( "opacity" , "0");
    $("#ligando").css( "z-index" , "0");
    $(".ligando").css( "transform" , "scale(1)");
    $(".ligando").css( "opacity" , "1");
    $(".ligando").css( "z-index" , "200");
    setTimeout(  function() {
      policial1.play();
    }, 500);
setTimeout(  function() {
      policial1.volume = 0;
      fora.volume = 1;
      fora.play();
      $(".ligandotext").text("Chamada encerrada..");
      $(".questli").html("Devo entrar na internet..");
}, 6500);

setTimeout(  function() {
  fora.volume = 0;
  $(".ligando").css( "transform" , "scale(0.5)");
  $(".ligando").css( "opacity" , "0");
  $(".ligando").css( "z-index" , "0");
  quest.what = 6;
}, 19500);

}

}, 1000);



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