// Motivational quotes array
const quotes = [
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. -Christian D. Larson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt"
  ];
  
  // Function to generate a random quote
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote").textContent = quote;
  }
  
  // Event listener for the "New Quote" button
  document.getElementById("new-quote-btn").addEventListener("click", generateQuote);
  
  // Generate an initial quote
  generateQuote();
  

