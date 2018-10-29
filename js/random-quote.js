
// first method

/* (function() {
    "use strict";
    let btn = document.getElementById('random-btn');

    var quotes = [
        ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
        ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
        ["Argue with idiots, and you become an idiot.", "Paul Graham"],
        ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
        ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
    ].sort(function() {
      return 0.5 - Math.random();
    }),
      quotesHTML = "";
  
    for (var i = 0; i < quotes.length; i++) {
      quotesHTML += "<p>&ldquo;" + quotes[i][0] + "&rdquo; &mdash; <em>" + quotes[i][1] + "</em></p>";
    }
  
    btn.addEventListener('click', () => {
        el.innerHTML = quotesHTML;
    }); 
  
  }());

  */

(function() {
    "use strict";
  
    var el = document.getElementById("quote");
    let btn = document.getElementById('random-btn');
  
    var quotes = [
      ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
      ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
      ["Argue with idiots, and you become an idiot.", "Paul Graham"],
      ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
      ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
    ];
  
    let  rand = (xs) => {
      return xs.slice(0).sort(function(){
        return .5 - Math.random();
      });
    }
    
    let quote = (q) => {
      return "<p>&ldquo;"+ q[0] +"&rdquo; &mdash; <em>"+ q[1] +"</em></p>";
    }
    
    btn.addEventListener('click', () => {
        el.innerHTML = rand(quotes).map(quote).join('');
    }); 
  
  }());

//   slice(0) creates a new array identical to the original array. 
//   Many a times you want to preserve your original array and create a new one.
//   If you use slice(1), it will create a different array starting from index position 1.
//   Similar things holds for strings as well.



