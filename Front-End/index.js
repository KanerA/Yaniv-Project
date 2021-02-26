const ranks = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
const suits = ["spades", "hearts", "diamonds", "clubs"];


class Card {
    constructor( isJoker=false, rank, suit){
        this.isJoker = isJoker;
        this.rank = rank;
        this.suit = suit;
    }

    getName(){
        if(this.rank === undefined && this.suit === undefined){
            return 'Joker';
        }
        return `${this.rank} of ${this.suit}`;
    }

    getValue(rank){
        let value;
        switch (rank) {
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
                value = rank;
                break;
        }
        return value;
    }

}

class Deck {
    constructor(){

    }
    
    shuffle(){
        for (let i = this.mainDeck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = this.mainDeck[i];
            this.mainDeck[i] = this.mainDeck[j];
            this.mainDeck[j] = temp;
        }
        // return deck; 
    }

    removeCard(cardName){

    }

    insertCards(cardArr){
        this.mainDeck = cardArr;
        return this.mainDeck;
    }

}

class playerDeck extends Deck {
    constructor(){
        
    }

    getCard(){
    
    }

    throwCard(){

    }
}

class tableDeck extends Deck {
    constructor(){
        super();
    }
}

class pileDeck extends Deck {

}

class Player {

}

class Yaniv {
    initDeck(){
        const tempArr =[];
        for(let suit of suits){
            for(let rank of ranks){
                tempArr.push(new Card(null, rank, suit));
            }
        }
        tempArr.push(new Card(true));
        tempArr.push(new Card(true));
        deck.insertCards(tempArr);
        return deck;
    }
}
