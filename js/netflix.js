"use strict"
var hasPlayerTester = null;

function addPlayerView(){
  var playerControls = document.querySelector("#playerWrapper .player-control-bar");
  var playerWrapper = document.querySelector("#playerWrapper");
  var playerWrapperSetup = document.querySelector("#playerWrapper.nineties");

  // If we can see the player, but it needs to be setup.
  if ( playerControls !== null && playerWrapperSetup === null ){
    console.log("Adding player");
    playerWrapper.className += " nineties";
    makeNinetiesPlayer();
  }

  queueTest();
}

function queueTest(){
  hasPlayerTester = setTimeout( function() {
    addPlayerView();
  }, 200);
}

function makeNinetiesPlayer(){

  simplifyButtons();

  addOldStyleTv();

  add90sEffects();

}

var intervalRewind = false;
function rewind(rewindSpeed) {    
   clearInterval(intervalRewind);
   var videoPlayer = document.querySelector("#playerWrapper video");
   var startSystemTime = new Date().getTime();
   var startVideoTime = videoPlayer.currentTime;

   intervalRewind = setInterval(function(){
       videoPlayer.playbackRate = 1.0;
       if(videoPlayer.currentTime == 0){
           clearInterval(intervalRewind);
           videoPlayer.pause();
       } else {
           var elapsed = new Date().getTime()-startSystemTime;
           videoPlayer.currentTime = Math.max(startVideoTime - elapsed*rewindSpeed/1000.0, 0);
       }
   }, 30);
}

function simplifyButtons(){
  console.log("Simply buttons");

  $("#playerContainer").append('<section class="nineties-player"></section>');

  $(".nineties-player").html('<div class="nineties-player-inner-wrap" id="mdx-controls-wrapper">' +
        '<div class="player-play play fa fa-play"></div>' +
        '<div class="player-pause pause fa fa-pause"></div>' +
        //'<div class="player-control-button player-rewind rewind icon-player-rewind">RW</div>' +
        '<div class="player-fast-forward fast-forward fa fa-fast-forward"></div>' +
        '<div class="player-control-divider"></div>' +
        '<div class="player-stop stop fa fa-eject" style="order: 5;"></div>' +
      '</div>'
      );
  

  $(".nineties-player .player-play").hide();

  $(".nineties-player .player-play").on("click", function(){
    var videoPlayer = document.querySelector("#playerWrapper video");

    if( document.querySelector(".player-control-bar .play") != undefined ){
      document.querySelector(".player-control-bar .play").click();
    }
    videoPlayer.playbackRate = 1;

    $(".nineties-player .player-play").hide();
    $(".nineties-player .player-pause").show();
  });

  $(".nineties-player .player-pause").on("click", function(){
    if( document.querySelector(".player-control-bar .pause") != undefined ){
      document.querySelector(".player-control-bar .pause").click();
    }

    $(".nineties-player .player-pause").hide();
    $(".nineties-player .player-play").show();
  });

  $(".nineties-player .player-stop").on("click", function(){
    $(".player-back-to-browsing")[0].click();
  });

  //$(".nineties-player .player-fast-rewind").on("mousedown", function(){
    //var videoPlayer = document.querySelector("#playerWrapper video");
    //rewind(videoPlayer, 100)
  //});

  //$(".nineties-player .player-fast-rewind").on("mouseup", function(){
    //clearInterval(intervalRewind);
  //});

  $(".nineties-player .player-fast-forward").on("mousedown", function(){
    var videoPlayer = document.querySelector("#playerWrapper video");
    videoPlayer.playbackRate = 2.5;
  });

  $(".nineties-player .player-fast-forward").on("mouseup", function(){
    var videoPlayer = document.querySelector("#playerWrapper video");
    videoPlayer.playbackRate = 1.0;
  });

}

function addOldStyleTv(){
  console.log("90s style tv");

  setInterval(function(){ 
    $("#playerWrapper").toggleClass("more-blue");
  }, 3000);
}

function add90sEffects(){
  console.log("random 90s effects");
}

queueTest();
