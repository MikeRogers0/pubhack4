function addPlayerView(){
  var player = document.querySelector("#playerWrapper");
  var playerWrapperSetup = document.querySelector("#playerWrapper.nineties");

  // If we can see the player, but it needs to be setup.
  if ( player !== null && playerWrapperSetup === null ){
    player.className += " player";
    makeNinetiesPlayer();
  }
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


// From https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#Example_usage
// 
// select the target node
var target = document.querySelector("#appMountPoint");
 
// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log(mutation.type);
    addPlayerView();
  });    
});
 
// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };
 
// pass in the target node, as well as the observer options
observer.observe(target, config);
 
// later, you can stop observing
//observer.disconnect();
