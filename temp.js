
// get name
return `${this.rank} ${this.suit}`;

// get value
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

// insertCards
this.tableDeck = cardArr;
        return this.tableDeck;


let deck = new Deck();

const newRound = new Yaniv();
deck = newRound.initDeck(deck);
console.log(deck);

// init function for Yaniv
initDeck(deck){
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