// god bless me to finish this

let quote = document.getElementById('quote');
let btn = document.getElementById('random-btn');
let author = document.getElementById('author');

let quotesArray = [
    ['Words are powerful weapons that can touch ones heart and', 'Bruce Willis'],
    ['Good people are good because they\'ve come to wisdom through failure', 'William Spaghetti'],
    ['It\'s good to be busy, that\'s how you know you are living, otherwise your foot is in the grave.', 'Elvina Napoleone'],
    ['The most difficult thing I have ever had to do is follow the guidance I prayed for', 'Albert Schweitzer'],
];


// addEventListener
btn.addEventListener('click', function(){
    let randomQuotes = quotesArray[Math.floor(Math.random() * quotesArray.length)];
    // it works because it returns only one array;
    quote.innerText = randomQuotes[0];
    author.innerText = randomQuotes[1];
});

