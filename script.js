

const tween2 = KUTE.fromTo(
    '#wave-top-1b',
    {path: '#wave-top-1b'},
    {path: '#wave-top-2b'},
    {repeat: 999, duration: 6000, yoyo: true}
)

tween2.start()
