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

function rewind(rewindSpeed) {    
   clearInterval(intervalRewind);
   var startSystemTime = new Date().getTime();
   var startVideoTime = video.currentTime;

   intervalRewind = setInterval(function(){
       video.playbackRate = 1.0;
       if(video.currentTime == 0){
           clearInterval(intervalRewind);
           video.pause();
       } else {
           var elapsed = new Date().getTime()-startSystemTime;
           video.currentTime = Math.max(startVideoTime - elapsed*rewindSpeed/1000.0, 0);
       }
   }, 30);
}

function simplifyButtons(){
  console.log("Simply buttons");

  $("#playerContainer").append('<section class="nineties-player"></section>');

  $(".nineties-player").html('<div class="nineties-player-inner-wrap" id="mdx-controls-wrapper">' +
      '<div class="player-control-button player-play play icon-player-play"></div>' +
      '<div class="player-control-button player-pause pause icon-player-pause"></div>' +
      '<div class="player-control-button player-stop stop icon-player-stop"></div>' +
      '<div class="player-control-button player-rewind rewind icon-player-rewind">RW</div>' +
      '<div class="player-control-button player-fast-forward fast-forward icon-player-fast-forward">FF</div>' +
      '</div>'
      );
  

  $(".nineties-player .player-play").on("click", function(){
    var videoPlayer = document.querySelector("#playerWrapper video");

    if( document.querySelector(".player-control-bar .play") != undefined ){
      document.querySelector(".player-control-bar .play").click();
    }
    videoPlayer.playbackSpeed = 1;
  });

  $(".nineties-player .player-pause").on("click", function(){
    if( document.querySelector(".player-control-bar .pause") != undefined ){
      document.querySelector(".player-control-bar .pause").click();
    }
  });

  $(".nineties-player .player-stop").on("click", function(){
    $(".player-back-to-browsing")[0].click();
  });

  $(".nineties-player .player-fast-forward").on("click", function(){
    var videoPlayer = document.querySelector("#playerWrapper video");
    videoPlayer.playbackRate = -1;
  });

  $(".nineties-player .player-fast-forward").on("click", function(){
    var videoPlayer = document.querySelector("#playerWrapper video");
    videoPlayer.playbackRate = 2.5;
  });

}

function addOldStyleTv(){
  console.log("90s style tv");
}

function add90sEffects(){
  console.log("random 90s effects");
}

queueTest();
