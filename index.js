$(document).ready(function () {
  let quote;
  let author;
  var colours = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
];
  generate();

  function generate() {
    const quotes = [
      "Life isn’t about getting and having, it’s about giving and being.",
      "Whatever the mind of man can conceive and believe, it can achieve.",
      "Strive not to be a success, but rather to be of value.",
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      "I attribute my success to this: I never gave or took any excuse.",
      "You miss 100% of the shots you don’t take.",
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
      "Every strike brings me closer to the next home run.", 
      "The best time to plant a tree was 20 years ago. The second best time is now.",
      "Your time is limited, so don’t waste it living someone else’s life."
    ];

    const authors = [
      "Kevin Kruse",
      "Napoleon Hill",
      "Albert Einstein",
      "Robert Frost",
      "Florence Nightingale",
      "Wayne Gretzky",
      "Amelia Earhart",
      "Babe Ruth",
      "Chinese Proverb",
      "Steve Jobs",
    ];

    let index = Math.floor(Math.random() * quotes.length);
    let colour = Math.floor(Math.random() * colours.length);
    
    quote = quotes[index];
    author = authors[index];

    $("#text").text(quote);
    $("#author").text(author);
    $('html body').animate(
      {
        backgroundColor: colours[colour],
        color: colours[colour]
      }, 500
   )
  }

  $("#new-quote").on("click", function () {
    generate();
  });
});
