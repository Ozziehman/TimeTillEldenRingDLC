var imagePaths = ['./static/images/FireBoss.png','./static/images/HippoBoss.png','./static/images/HorseRunning.png']

window.addEventListener('load', () => {
    var randomIndex = Math.floor(Math.random() * imagePaths.length);
    var randomImagePath = imagePaths[randomIndex];
    document.body.style.backgroundImage = `url(${randomImagePath})`;
})