var imagePaths = ['./static/images/FireBoss.png','./static/images/HippoBoss.png','./static/images/HorseRunning.png',
'./static/images/LionBoss.png','./static/images/LucariaMaybe.png','./static/images/Miquella.png',
'./static/images/MohgArena.png','./static/images/OldGuy.png','./static/images/OpenWorld.png',
'./static/images/Painting.png','./static/images/PotDungeon.png','./static/images/StormVeilMaybe.png','./static/images/TreeVeil.png'
]

window.addEventListener('load', () => {
    var randomIndex = Math.floor(Math.random() * imagePaths.length);
    var randomImagePath = imagePaths[randomIndex];
    document.body.style.backgroundImage = `url(${randomImagePath})`;
    document.body.style.backgroundSize = "cover"
})