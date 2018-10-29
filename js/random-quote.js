
const BTN = document.getElementById('random-btn');
let author = document.getElementById('author');
let mainQuote = document.getElementById('quote');


BTN.addEventListener('click', function(){
    
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
 
});


outputData = (text, quote) => {
      mainQuote.innerText = text.quoteText;
      author.innerText = quote.quoteAuthor;
}





