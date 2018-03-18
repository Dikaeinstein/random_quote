const displayQuotes = (quotes) => {
  // variable declarations
  const colors = [
    '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6',
    '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'
  ];
  const quoIdx = Math.floor(Math.random() * quotes.length);
  const colIdx = Math.floor(Math.random() * colors.length);
  const randomQuote = quotes[quoIdx].quoteText;
  const author = quotes[quoIdx].quoteAuthor;
  const color = colors[colIdx];

  const body = document.getElementsByTagName('body')[0];
  const banner = document.getElementsByClassName('banner')[0];
  const newQuote = document.getElementById('new-quote');
  const addQuote = document.getElementById('add-quote');
  const saveQuote = document.getElementById('save-quote');
  const quoteForm = document.getElementsByTagName('form')[0];
  const quoteText = document.getElementById('text');
  const quoteAuthor = document.getElementsByClassName('quote-author')[0];
  const quoteFormSection = document.getElementsByClassName('quote-form-section')[0]

  // Animate background color change
  const animateColor = () => {
    body.style.backgroundColor = color;
    body.style.color = color;
    banner.style.color = color;
    newQuote.style.backgroundColor = color;
    addQuote.style.backgroundColor = color;
    saveQuote.style.color = color;
  };

  // Show quote and author
  const showQuote = () => {
    quoteText.style.visibility = 'visible';
    quoteText.innerHTML = randomQuote;
    quoteAuthor.style.visibility = 'visible';
    quoteAuthor.innerHTML = author;
  };

  // Add quote
  addQuote.addEventListener('click', (e) => {
    e.preventDefault();
    if (quoteFormSection.style.visibility === 'hidden') {
      quoteFormSection.style.visibility = 'visible';
    }
  });

  // Save quote
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const { quote, author } = quoteForm;
    if (quote.value === '' || author.value === '') {
      return;
    }
    quoteFormSection.style.visibility = 'hidden';

    quotes.push({ quoteText: quote.value, quoteAuthor: `- ${author.value}` });
    quote.value = '';
    author.value = '';
  });
  
  quoteFormSection.style.visibility = 'hidden';
  animateColor();
  showQuote();
};

// Event listner for setting up app once DOM content have been parsed
// Used 'DOMContentLoaded' event to avoid flashes of hidden content on page load
window.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    {
      quoteText: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
      quoteAuthor: '- Thomas Edison'
    },
    {
      quoteText: 'You can observe a lot just by watching.',
      quoteAuthor: '- Yogi Berra'
    },
    {
      quoteText: 'A house divided against itself cannot stand.',
      quoteAuthor: '- Abraham Lincoln'
    },
    {
      quoteText: 'Difficulties increase the nearer we get to the goal.',
      quoteAuthor: '- Johann Wolfgang von Goethe'
    },
    {
      quoteText: 'Fate is in your hands and no one elses',
      quoteAuthor: '- Byron Pulsifer'
    },
    {
      quoteText: 'Be the chief but never the lord.',
      quoteAuthor: '- Lao Tzu'
    },
    {
      quoteText: 'Nothing happens unless first we dream.',
      quoteAuthor: '- Carl Sandburg'
    },
    {
      quoteText: 'Well begun is half done.',
      quoteAuthor: '- Aristotle'
    },
    {
      quoteText: 'Life is a learning experience, only if you learn.',
      quoteAuthor: '- Yogi Berra'
    }, 
    {
      quoteText: 'Self-complacency is fatal to progress.',
      quoteAuthor: '- Margaret Sangster'
    },
    {
      quoteText: 'Peace comes from within. Do not seek it without.',
      quoteAuthor: '- Buddha'
    },
    {
      quoteText: 'Brilliance is evenly distributed but opportunity is not.',
      quoteAuthor: '- Andela'
    }
  ];

  displayQuotes(quotes);

  const newQuote = document.getElementById('new-quote');

  newQuote.addEventListener('click', () => {
    displayQuotes(quotes);
  });
});
