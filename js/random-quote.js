
const BTN = document.getElementById('random-btn');
let author = document.getElementById('author');
let mainQuote = document.getElementById('quote');

const QUOTES = [
    {
        quote: 'Stay hungry, stay foolish',
        author: 'Steve Jobs'
    },

    {
        quote: "Good Artists Copy, Great Artists Steal.",
        author : "Pabolo Picasso"
    },

    {
        quote: "Argue with idiots, and you become an idiot.",
        author: "Paul Graham"
    },

    {
        quote: "Be yourself, everyone is already taken.",
        author: "Oscar Wild"
    },

    {
        quote: "Simplicty is the ultimate sophistication.",
        author: "Leonardo Davinci"
    },

    {
        quote: "The grass is greener where  your water it.",
        author: "Neil Barringham"
    },

    {
        quote: "Little by little, day by day, what is mean for you will find its WAY",
        author: "EDLESTER.COM"
    }
];

// practic; pushing authors into array;
let authors = [];

function pushAuthors() {
    for (let i = 0; i < QUOTES.length; i++) {
        authors.push(QUOTES[i].author);
    }

    return authors;
}

//get random from QUOTES, adding event Listener();

BTN.addEventListener('click', function(){
    let randomQuote = Math.floor(Math.random() * QUOTES.length);
    mainQuote.innerText = QUOTES[randomQuote].quote;
    author.innerHTML = QUOTES[randomQuote].author;
});


console.log(QUOTES);

QUOTES.push({quote: 'hellow', author: 'Schumacher'});

function addQuote(quote, author) {
    QUOTES.push({quote, author});
}

addQuote('Maikelele', 'Noir');