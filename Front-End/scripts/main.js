"use strict"
const player1Input = document.getElementById("player1Name");
const player2Input = document.getElementById("player2Name");
const startButton = document.querySelector('.startBtn');
const table = document.getElementById('table');
const mainDecks = document.getElementById('mainDecks');

const round = new Yaniv();
let pile;

function startGame(){
    const playerList = [];
    new URLSearchParams(window.location.search).forEach((value, name) => {
        playerList.push(new Player(value));
    })

    let deck = new TableDeck();
    let tempCards = round.initDeck();
    deck.insertCards(tempCards);
    deck.shuffle();
    deck.dealCards(playerList, 5);
    const pileDeck = new PileDeck();
    let firstCard = deck.removeCard();
    pileDeck.insertCards([firstCard]);
    round.pileDeck = pileDeck;
    round.tableDeck = deck;
    round.players = playerList;
    
    const tableDeck = createCardImg('tableDeck');
    mainDecks.append(tableDeck);
    pile = createCardImg('pileDeck', round.pileDeck.cards[0]);
    mainDecks.append(pile);
    playerList.forEach((_, index) => {
        const playerHand = document.createElement('div');
        for(let card of playerList[index].hand.cards){
            playerHand.append(createCardImg('playerCard', card, throwCards));
        }
        const line = document.createElement('hr');
        table.append(playerHand);
        table.append(line);
    })
}

function throwCards(){
    newRound.players.forEach((value) => {
        for(let card of value.hand.cards){
            if(this.id === `${card.id}`){
                value.hand.removeCard(card);
                this.parentElement.remove();
                value.getScore();
                createPileTopCard(card);
                break;
            }
        }
    })
}

function createCardImg(className, card, eventListenerFunction){ // creates a div with the given class name and displays the wanted card.
    const div = document.createElement('div');
    div.classList.add(`${className}`);
    let cardImg = document.createElement('img');
    cardImg.addEventListener('click', eventListenerFunction);
    if(card === undefined){
        cardImg.setAttribute('src', `../cards/Assaf's-card-back.svg`);
        div.append(cardImg);
        return div;
    }
    switch(card.suit){
        case "spades":
            cardImg.setAttribute('src', `../cards/${card.rank}S.svg`);
            cardImg.setAttribute('id', `${card.id}`);
            div.append(cardImg);
            break;
            
        case "hearts":
            cardImg.setAttribute('src', `../cards/${card.rank}H.svg`);
            cardImg.setAttribute('id', `${card.id}`);
            div.append(cardImg);
            break;
            
        case "diamonds":            
            cardImg.setAttribute('src', `../cards/${card.rank}D.svg`);
            cardImg.setAttribute('id', `${card.id}`);
            div.append(cardImg);
            break;
        
        case "clubs":
            cardImg.setAttribute('src', `../cards/${card.rank}C.svg`);
            cardImg.setAttribute('id', `${card.id}`);
            div.append(cardImg);
            break;
            
        case undefined:
            cardImg.setAttribute('src', `../cards/Black_joker.svg`);
            cardImg.setAttribute('id', `${card.id}`);
            div.append(cardImg);
            break;

    }
    return div;
}

function createPileTopCard(card){
    mainDecks.children[1].remove();
    round.pileDeck.insertCards([card]);
    pile = createCardImg('pileDeck', round.pileDeck.cards[0]);
    mainDecks.append(pile);
}

document.addEventListener('DOMContentLoaded', startGame);
