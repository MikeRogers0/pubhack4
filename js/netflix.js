var hasPlayerTester = null;

function addPlayerView(){
  var player = document.querySelector("#playerWrapper video");
  var playerWrapper = document.querySelector("#playerWrapper");
  var playerWrapperSetup = document.querySelector("#playerWrapper.nineties");

  // If we can see the player, but it needs to be setup.
  if ( player !== null && playerWrapperSetup === null ){
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

function simplifyButtons(){
  console.log("Simply buttons");
}

function addOldStyleTv(){
  console.log("90s style tv");
}

function add90sEffects(){
  console.log("random 90s effects");
}

queueTest();
