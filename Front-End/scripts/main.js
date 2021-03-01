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
    playerList.forEach((player, index) => {
        const playerHand = document.createElement('div');
        playerHand.classList.add(`${player.name}`);
        for(let card of playerList[index].hand.cards){
            playerHand.append(createCardImg('playerCard', card, pickCard));
        }
        const line = document.createElement('hr');
        table.append(playerHand);
        table.append(line);
    })
}

function throwCards(){
    round.players.forEach((value) => {
        let card = findCardInDeck(this, value.hand.cards);
        if(card){
            value.hand.removeCard(card);
            this.parentElement.remove();
            value.getScore();
            createPileTopCard(card);
        }
    })
}

function findCardInDeck(cardChosen, deck){
    for(let card of deck){
        if(cardChosen.id === `${card.id}`){
        return card;
        }
    }
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

function pickCard(event){
    let playerName = event.target.parentElement.parentElement.classList[0];
    for(let player of round.players){
        if(player.name === playerName && player.turn === true){ // check if it's the player's turn
        let card = findCardInDeck(this, player.hand.cards);
        if(card){
            player.hand.cardsChosen.push(card);
            return;
            }
        }
    }
    return;
}

document.addEventListener('DOMContentLoaded', startGame);