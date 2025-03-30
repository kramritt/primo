
document.getElementById('apologyBtn').addEventListener('click', function() {
    const music = document.getElementById('bgMusic');
    music.play();
    setTimeout(() => {
        window.location.href = 'page2.html';
    }, 1000);
});
