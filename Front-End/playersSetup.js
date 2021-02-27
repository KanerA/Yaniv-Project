const twoPlayersButton = document.getElementById('twoPlayers');
const twoPlayersStart = document.getElementById('twoPlayersNames');
const fourPlayersButton = document.getElementById('fourPlayers');
const fourPlayersStart = document.getElementById('fourPlayersNames');


twoPlayersButton.addEventListener('click', () => {
    twoPlayersStart.classList.add('show');
    fourPlayersStart.classList.remove('show');
});

fourPlayersButton.addEventListener('click', () => {
    fourPlayersStart.classList.add('show');
    twoPlayersStart.classList.remove('show');
});

