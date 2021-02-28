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
    playerList.forEach((_, index) => {
        const playerHand = document.createElement('div');
        for(let card of playerList[index].hand.cards){
            const playerCard = document.createElement('div');
            playerCard.classList.add('playerCard')
            let cardImg = document.createElement('img');
            switch(card.suit){
                case "spades":
                    cardImg.setAttribute('src', `../cards/${card.rank}S.svg`);
                    playerCard.append(cardImg);
                    break;
                    
                case "hearts":
                    cardImg.setAttribute('src', `../cards/${card.rank}H.svg`);
                    playerCard.append(cardImg);
                    break;
                    
                case "diamonds":            
                    cardImg.setAttribute('src', `../cards/${card.rank}D.svg`);
                    playerCard.append(cardImg);
                    break;
                        
                case "clubs":
                    cardImg.setAttribute('src', `../cards/${card.rank}C.svg`);
                    playerCard.append(cardImg);
                    break;

                case undefined:
                    cardImg.setAttribute('src', `../cards/Black_joker.svg`);
                    playerCard.append(cardImg);
                    break;

            }
            playerHand.append(playerCard)
        }
        const line = document.createElement('hr');
        table.append(playerHand);
        table.append(line);

    })
}


document.addEventListener('DOMContentLoaded', startGame);
