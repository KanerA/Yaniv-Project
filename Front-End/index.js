const ranks = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
const suits = ["spades", "hearts", "diamonds", "clubs"];


class Card {
    constructor( isJoker=false, rank, suit){
        this.isJoker = isJoker;
        this.rank = rank;
        this.suit = suit;
    }

    getName(){
        
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
        
            default:
                value = rank;
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

    }

    removeCard(cardName){

    }

    insertCards(cardArr){
        this.tableDeck = cardArr;
        return this.tableDeck;
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