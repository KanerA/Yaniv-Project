const ranks = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
const suits = ["spades", "hearts", "diamonds", "clubs"];


class Card {
    constructor( isJoker=false, id, rank, suit){
        this.isJoker = isJoker;
        this.rank = rank;
        this.suit = suit;
        this.id = id;
    }

    getName(){
        if(this.rank === undefined && this.suit === undefined){
            return 'Joker';
        }
        return `${this.rank} of ${this.suit}`;
    }

    getValue(){
        let value;
        switch (this.rank) {
            case "J":
                value = 10;
                break;

            case "Q":
                value = 10;
                break;

            case "K":
                value = 10;
                break;

            case undefined:
                value = 0;
                break;

            case "A":
                value = 1;
                break;

            default:
                value = this.rank;
                break;
        }
        return value;
    }

}

class Deck {
    constructor(){
        this.cards = [];
    }
    
    shuffle(){
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }

    insertCards(cardArr){
        this.cards.unshift(...cardArr);
        return this.cards;
    }  
    
    dealCards(playersList, amount){
        for(let i = 0; i < amount; i++){
                for(let player of playersList){
                let temp = this.cards.pop();
                player.hand.cards.push(temp);
                player.getScore();
            }
        }
        return playersList;
    }

    removeCard(card){
        let cardsDeck = this.cards;
        if(card){
            for(let i = 0; i < cardsDeck.length; i++){
                if(cardsDeck[i].rank === card.rank && cardsDeck[i].suit === card.suit){
                    cardsDeck.splice(i, 1);
                    return card;
                }
            }   
        }
        return cardsDeck.shift();
    }
}

class PlayerDeck extends Deck {
    constructor(){
        super();
    }
}

class TableDeck extends Deck {
    constructor(){
        super();
    }
}

class PileDeck extends Deck {
    constructor(){
        super();
    }
}

class Player {
    constructor(name){
        this.name = name;
        this.hand = new PlayerDeck();
        this.hand.cards = [];
        this.hand.cardsChosen = [];
        this.turn = false;
    }

    getScore(){
        let score = 0;
        for(let card of (this.hand.cards)){
            score += card.getValue();
        }
        this.score = score;      
    }
}

class Yaniv {
    constructor(){
        this.tableDeck = [];
        this.pileDeck = [];
        this.players = [];
    }

    initDeck(){
        const tempArr =[];
        let index = 1;
        for(let suit of suits){
            for(let rank of ranks){
                tempArr.push(new Card(null, index, rank, suit));
                index++;
            }
        }
        tempArr.push(new Card(true, index));
        tempArr.push(new Card(true, index+1));
        return tempArr;
    }
}