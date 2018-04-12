"use strict"
var hasPlayerTester = null;

function addPlayerView(){
  // If we can see the player, but it needs to be setup.
  if ( $(".nf-kb-nav-wrapper video").length >= 1 && !$(".nf-kb-nav-wrapper").hasClass('nineties') ){
    console.log("Adding player");
    $(".nf-kb-nav-wrapper").addClass("nineties");
    makeNinetiesPlayer();
  } else {
    queueTest();
  }
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
   var videoPlayer = document.querySelector(".nf-kb-nav-wrapper video");
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

  $("body").append('<section class="nineties-player"></section>');

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
    var videoPlayer = $(".nf-kb-nav-wrapper video")[0];

    if( $(".nf-kb-nav-wrapper .play") != undefined ){
      $(".nf-kb-nav-wrapper .play").click();
    }
    videoPlayer.playbackRate = 1;

    $(".nineties-player .player-play").hide();
    $(".nineties-player .player-pause").show();
  });

  $(".nineties-player .player-pause").on("click", function(){
    if( $(".nf-kb-nav-wrapper .pause") != undefined ){
      $(".nf-kb-nav-wrapper .pause").click();
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
    var videoPlayer = $(".nf-kb-nav-wrapper video")[0];
    videoPlayer.playbackRate = 2.5;
  });

  $(".nineties-player .player-fast-forward").on("mouseup", function(){
    var videoPlayer = $(".nf-kb-nav-wrapper video")[0];
    videoPlayer.playbackRate = 1.0;
  });

}

var oldTVStyleInterval = false;
var oldTVStaticInterval = false;
function addOldStyleTv(){
  console.log("90s style tv");

  $("body").append('<section class="nineties-static"></section>');

  oldTVStaticInterval = setInterval(function(){ 
    if ( $(".nf-kb-nav-wrapper video").length >= 1 ) {
      clearInterval(oldTVStaticInterval)
    }

    if( Math.floor((Math.random() * 5) + 1) == 2 ) {
      $(".nineties-static").toggleClass("more_there");
    }
  }, 2000);

  oldTVStyleInterval = setInterval(function(){ 
    if ( $(".nf-kb-nav-wrapper video").length >= 1 ) {
      clearInterval(oldTVStyleInterval)
    }

    if( Math.floor((Math.random() * 5) + 1) == 2 ) {
      $(".nf-kb-nav-wrapper").toggleClass("more-blur");
    }
  }, 3000);
}

function add90sEffects(){
  console.log("random 90s effects");
}

queueTest();
