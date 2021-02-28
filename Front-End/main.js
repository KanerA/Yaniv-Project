"use strict"
const player1Input = document.getElementById("player1Name");
const player2Input = document.getElementById("player2Name");
const startButton = document.querySelector('.startBtn');
const table = document.getElementById('table');

function startGame(){
    const playerList = [];
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
    const pile = createCardImg('pileDeck', newRound.pileDeck.cards[0]);
    table.append(pile);
    const tableDeck = createCardImg('tableDeck');
    table.append(tableDeck)
    playerList.forEach((_, index) => {
        const playerHand = document.createElement('div');
        for(let card of playerList[index].hand.cards){
            playerHand.append(createCardImg('playerCard', card));
        }
        const line = document.createElement('hr');
        table.append(playerHand);
        table.append(line);
    })
}

function pickCard(){ // testing the event listener
    this.parentElement.remove();
}


function createCardImg(className, card){ // creates a div with the given class name and displays the wanted card.
    const div = document.createElement('div');
    div.classList.add(`${className}`);
    let cardImg = document.createElement('img');
    cardImg.addEventListener('click', pickCard);
    switch(card.suit){
        case "spades":
            cardImg.setAttribute('src', `../cards/${card.rank}S.svg`);
            div.append(cardImg);
            break;
            
        case "hearts":
            cardImg.setAttribute('src', `../cards/${card.rank}H.svg`);
            div.append(cardImg);
            break;
            
        case "diamonds":            
            cardImg.setAttribute('src', `../cards/${card.rank}D.svg`);
            div.append(cardImg);
            break;
                
        case "clubs":
            cardImg.setAttribute('src', `../cards/${card.rank}C.svg`);
            div.append(cardImg);
            break;

        case undefined:
            cardImg.setAttribute('src', `../cards/Black_joker.svg`);
            div.append(cardImg);
            break;

    }
    return div;
}


document.addEventListener('DOMContentLoaded', startGame);
