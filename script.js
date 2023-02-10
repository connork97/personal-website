const tween = KUTE.fromTo(
    '#wave-top-1a',
    {path: '#wave-top-1a'},
    {path: '#wave-top-2a'},
    {repeat: 999, duration: 6000, yoyo: true}
)

tween.start()


const tween2 = KUTE.fromTo(
    '#wave-top-1b',
    {path: '#wave-top-1b'},
    {path: '#wave-top-2b'},
    {repeat: 999, duration: 4000, yoyo: true}
)

tween2.start()
