/* jshint esversion: 6 */
function success (quotes) {
    // variable declarations
    let colors = [
        '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', 
        '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"
    ];
    let quoIdx = Math.floor(Math.random() * quotes.length);
    let colIdx = Math.floor(Math.random() * colors.length);
    let randomQuote = quotes[quoIdx].quoteText;
    let author = quotes[quoIdx].quoteAuthor;

    // get current twitter tweet intent url
    let twitterLink = $("#twitter").attr("href").slice(0, 75) + '"' + randomQuote + '" ' + author;
    // set current twitter url
    $("#twitter").attr("href", twitterLink);

    // animating colors
    $("body").animate({
        backgroundColor: colors[colIdx],
        color: colors[colIdx]
    }, 1000);
    $(".banner").animate({
        color: colors[colIdx]
    });
    $("#new-quote").animate({
         backgroundColor: colors[colIdx]
    }, 1000);
    $(".buttons .button").animate({
        backgroundColor: colors[colIdx],
    }, 1000);
    
    // fadeOut/fadeIn quote text
    $("#text").hide().html(randomQuote).fadeIn(1000);
    $(".quote-author").hide().html(author).fadeIn(1000);
}


$(document).ready(function () {
  
    let quotes = [{
        "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "quoteAuthor": "- Thomas Edison"
        }, {
"quoteText": "You can observe a lot just by watching.",
"quoteAuthor": "- Yogi Berra"
}, {
"quoteText": "A house divided against itself cannot stand.",
"quoteAuthor": "- Abraham Lincoln"
}, {
"quoteText": "Difficulties increase the nearer we get to the goal.",
"quoteAuthor": "- Johann Wolfgang von Goethe"
}, {
"quoteText": "Fate is in your hands and no one elses",
"quoteAuthor": "- Byron Pulsifer"
}, {
"quoteText": "Be the chief but never the lord.",
"quoteAuthor": "- Lao Tzu"
}, {
"quoteText": "Nothing happens unless first we dream.",
"quoteAuthor": "- Carl Sandburg"
}, {
"quoteText": "Well begun is half done.",
"quoteAuthor": "- Aristotle"
}, {
"quoteText": "Life is a learning experience, only if you learn.",
"quoteAuthor": "- Yogi Berra"
}, {
"quoteText": "Self-complacency is fatal to progress.",
"quoteAuthor": "- Margaret Sangster"
}, {
"quoteText": "Peace comes from within. Do not seek it without.",
"quoteAuthor": "- Buddha"
}];

success(quotes);

    $("#new-quote").on("click", function () {
        success(quotes);
    });
});