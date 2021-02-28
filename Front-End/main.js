"use strict"
const player1Input = document.getElementById("player1Name");
const player2Input = document.getElementById("player2Name");
const startButton = document.querySelector('.startBtn');
const playerList = [];

function startGame(){
    new URLSearchParams(window.location.search).forEach((value, name) => {
        playerList.push(new Player(value));
    })

    const newRound = new Yaniv();
    let deck = new TableDeck();
    let tempCards = newRound.initDeck();
    deck.insertCards(tempCards);
    deck.shuffle();
    deck.dealCards(playerList);
    const pileDeck = new PileDeck();
    let firstCard = deck.removeCard();
    pileDeck.insertCards([firstCard]);
    newRound.pileDeck = pileDeck;
    newRound.tableDeck = deck;
    newRound.players = playerList;
}


document.addEventListener('DOMContentLoaded', startGame);
