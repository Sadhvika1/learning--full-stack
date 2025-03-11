for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      var button = this.innerHTML.toLowerCase(); // Convert to lowercase
      respond(button);
      buttonAnimation(button);
  });
}

document.addEventListener("keypress", function(event) {
  var key = event.key.toLowerCase(); // Convert to lowercase for consistency
  respond(key);
  buttonAnimation(key);
});

function respond(key) {
  switch (key) {
      case "w":
          var w = new Audio("sounds/crash.mp3");
          w.play();
          break;
      case "a":
          var a = new Audio("sounds/kick-bass.mp3");
          a.play();
          break;
      case "s":
          var s = new Audio("sounds/snare.mp3");
          s.play();
          break;
      case "d":
          var d = new Audio("sounds/tom-1.mp3");
          d.play();
          break;
      case "j":
          var j = new Audio("sounds/tom-2.mp3");
          j.play();
          break;
      case "k":
          var k = new Audio("sounds/tom-3.mp3");
          k.play();
          break;
      case "l":
          var l = new Audio("sounds/tom-4.mp3");
          l.play();
          break;
      default:
          console.log("Invalid key:", key);
          break;
  }
}

function buttonAnimation(key) {
  var animation = document.querySelector("." + key);
  if (animation) {
      animation.classList.add("pressed");
      setTimeout(function() {
          animation.classList.remove("pressed");
      }, 100);
  }
}
