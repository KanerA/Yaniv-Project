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

}