
const BTN = document.getElementById('random-btn');
let author = document.getElementById('author');
let mainQuote = document.getElementById('quote');
const TWEET = document.getElementById('tweet');



BTN.addEventListener('click', ajaxRequest);

function ajaxRequest() {
     // JSON & AJAX - plain JavaScript
     let myRequest = new XMLHttpRequest();
     
     // open (takes 2 args - (get-preia / post-trimite), and second argument - link);
     myRequest.open('GET', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/893105/quotes.json');
    
     myRequest.onload = function() {
         let request = JSON.parse(myRequest.responseText);
         let randomText = Math.floor(Math.random() * request.length);
         let randomQuote = Math.floor(Math.random() * request.length);
         outputData(request[randomText], request[randomQuote]);
     }
     
     myRequest.send(); // send the JSON data
}

// passing args inside the function;
outputData = (text, quote) => {
    mainQuote.innerText = text.quoteText;
    author.innerText = quote.quoteAuthor;
}



let newTweet = 'Hy this is a new tweet';
const twitterURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(newTweet);


TWEET.addEventListener('click', function(event){
     window.open(twitterURL);
});





