//Nav Bar SVG Function

const tween = KUTE.fromTo(
    '#wave-top-1b',
    {path: '#wave-top-1b'},
    {path: '#wave-top-2b'},
    {repeat: 999, duration: 5000, yoyo: true}
)

tween.start()

//Hexagon SVG Functions

//const hexArrA = ['#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', '#l1a', ]

const hex1 = KUTE.fromTo(
    '#l1a',
    {path: '#l1a'},
    {path: '#l1b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex1.start()

const hex2 = KUTE.fromTo(
    '#l2a',
    {path: '#l2a'},
    {path: '#l2b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex2.start()

const hex3 = KUTE.fromTo(
    '#l3a',
    {path: '#l3a'},
    {path: '#l3b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex3.start()

const hex4 = KUTE.fromTo(
    '#l4a',
    {path: '#l4a'},
    {path: '#l4b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex4.start()

const hex5 = KUTE.fromTo(
    '#l5a',
    {path: '#l5a'},
    {path: '#l5b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex5.start()

const hex6 = KUTE.fromTo(
    '#l6a',
    {path: '#l6a'},
    {path: '#l6b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex6.start()

const hex7 = KUTE.fromTo(
    '#l7a',
    {path: '#l7a'},
    {path: '#l7b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex7.start()

const hex8 = KUTE.fromTo(
    '#l8a',
    {path: '#l8a'},
    {path: '#l8b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex8.start()

const hex9 = KUTE.fromTo(
    '#l9a',
    {path: '#l9a'},
    {path: '#l9b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex9.start()

const hex10 = KUTE.fromTo(
    '#l10a',
    {path: '#l10a'},
    {path: '#l10b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex10.start()

const hex11 = KUTE.fromTo(
    '#l11a',
    {path: '#l11a'},
    {path: '#l11b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex11.start()

const hex12 = KUTE.fromTo(
    '#l12a',
    {path: '#l12a'},
    {path: '#l12b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex12.start()

const hex13 = KUTE.fromTo(
    '#l13a',
    {path: '#l13a'},
    {path: '#l13b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex13.start()

const hex14 = KUTE.fromTo(
    '#l14a',
    {path: '#l14a'},
    {path: '#l14b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex14.start()

const hex15 = KUTE.fromTo(
    '#l15a',
    {path: '#l15a'},
    {path: '#l15b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex15.start()

const hex16 = KUTE.fromTo(
    '#l16a',
    {path: '#l16a'},
    {path: '#l16b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex16.start()

const hex17 = KUTE.fromTo(
    '#l17a',
    {path: '#l17a'},
    {path: '#l17b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex17.start()

const hex18 = KUTE.fromTo(
    '#l18a',
    {path: '#l18a'},
    {path: '#l18b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex18.start()

const hex19 = KUTE.fromTo(
    '#l19a',
    {path: '#l19a'},
    {path: '#l19b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex19.start()

const hex20 = KUTE.fromTo(
    '#l20a',
    {path: '#l20a'},
    {path: '#l20b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex20.start()

const hex21 = KUTE.fromTo(
    '#l21a',
    {path: '#l21a'},
    {path: '#l21b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex21.start()

const hex22 = KUTE.fromTo(
    '#l22a',
    {path: '#l22a'},
    {path: '#l22b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex22.start()

const hex23 = KUTE.fromTo(
    '#l23a',
    {path: '#l23a'},
    {path: '#l23b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex23.start()

const hex24 = KUTE.fromTo(
    '#l24a',
    {path: '#l24a'},
    {path: '#l24b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex24.start()

const hex25 = KUTE.fromTo(
    '#l25a',
    {path: '#l25a'},
    {path: '#l25b'},
    {repeat: 999, duration: 7500, yoyo: true}
)

hex25.start()

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