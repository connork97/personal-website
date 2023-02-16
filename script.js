//Nav Bar SVG Function

const tween = KUTE.fromTo(
    '#wave-top-1b',
    {path: '#wave-top-1b'},
    {path: '#wave-top-2b'},
    {repeat: 999, duration: 4000, yoyo: true}
)

tween.start()

//Background Scroll Offset Function

const scroll = (function(){

    var parallax = document.querySelectorAll("body"),
        speed = 0.35;
  
    window.onscroll = function(){
      [].slice.call(parallax).forEach(function(el,i){
  
        var windowYOffset = window.pageYOffset,
            elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
  
        el.style.backgroundPosition = elBackgrounPos;
  
      });
    };
  
  })();

scroll.start()