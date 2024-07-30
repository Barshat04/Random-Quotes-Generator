//navigation bar jquery start
$(function(){
    $("#nav-placeholder").load("nav.html");
  });
//navbar function end

const motivationalQuotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        quote: "Don’t be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        quote: "I am not a product of my circumstances. I am a product of my decisions.",
        author: "Stephen Covey"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        quote: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        quote: "The successful warrior is the average man, with laser-like focus.",
        author: "Bruce Lee"
    },
    {
        quote: "Opportunities don't happen. You create them.",
        author: "Chris Grosser"
    },
    {
        quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
        author: "Jim Rohn"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Do what you can with all you have, wherever you are.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },
    {
        quote: "Success is not just making money. Success is happiness. Success is fulfillment; it's the ability to give.",
        author: "Adam Neumann"
    },
    {
        quote: "Success is going from failure to failure without losing your enthusiasm.",
        author: "Winston Churchill"
    },
    {
        quote: "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.",
        author: "Reba McEntire"
    },
    {
        quote: "Don't be distracted by criticism. Remember, the only taste of success some people get is to take a bite out of you.",
        author: "Zig Ziglar"
    },
    {
        quote: "You know you are on the road to success if you would do your job and not be paid for it.",
        author: "Oprah Winfrey"
    },
    {
        quote: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
        author: "Colin Powell"
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
        author: "Charles Darwin"
    },
    {
        quote: "Failure will never overtake me if my determination to succeed is strong enough.",
        author: "Og Mandino"
    },
    {
        quote: "Setting goals is the first step in turning the invisible into the visible.",
        author: "Tony Robbins"
    },
    {
        quote: "Things work out best for those who make the best of how things work out.",
        author: "John Wooden"
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit.",
        author: "Conrad Hilton"
    },
    {
        quote: "Success is not in never failing, but rising every time you fall.",
        author: "Jonathan Taylor Thomas"
    },
    {
        quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
        author: "Confucius"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
    },
    {
        quote: "Success is how high you bounce when you hit bottom.",
        author: "George S. Patton"
    },
    {
        quote: "Success isn't just about what you accomplish in your life, it's about what you inspire others to do.",
        author: "Unknown"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "If you can dream it, you can do it.",
        author: "Walt Disney"
    },
    {
        quote: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {
        quote: "The biggest risk is not taking any risk.",
        author: "Mark Zuckerberg"
    },
    {
        quote: "I never dreamed about success. I worked for it.",
        author: "Estée Lauder"
    },
    {
        quote: "Success is not a destination; it's a journey.",
        author: "Zig Ziglar"
    },
    {
        quote: "The secret of success is to do the common things uncommonly well.",
        author: "John D. Rockefeller"
    },
    {
        quote: "Success is not what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        quote: "Success is not about how much money you make; it's about the difference you make in people's lives.",
        author: "Michelle Obama"
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        quote: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        quote: "Success is not just making money. Success is happiness. Success is fulfillment; it's the ability to give.",
        author: "Adam Neumann"
    },
    {
        quote: "Success is going from failure to failure without losing your enthusiasm.",
        author: "Winston Churchill"
    },
    {
        quote: "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.",
        author: "Reba McEntire"
    },
    {
        quote: "Success isn't just about what you accomplish in your life, it's about what you inspire others to do.",
        author: "Unknown"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "If you can dream it, you can do it.",
        author: "Walt Disney"
    },
    {
        quote: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {
        quote: "The biggest risk is not taking any risk.",
        author: "Mark Zuckerberg"
    },
    {
        quote: "I never dreamed about success. I worked for it.",
        author: "Estée Lauder"
    },
    {
        quote: "Success is not a destination; it's a journey.",
        author: "Zig Ziglar"
    },
    {
        quote: "The secret of success is to do the common things uncommonly well.",
        author: "John D. Rockefeller"
    },
    {
        quote: "Success is not what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        quote: "Success is not about how much money you make; it's about the difference you make in people's lives.",
        author: "Michelle Obama"
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        quote: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        quote: "Success is not just making money. Success is happiness. Success is fulfillment; it's the ability to give.",
        author: "Adam Neumann"
    },
    {
        quote: "Success is going from failure to failure without losing your enthusiasm.",
        author: "Winston Churchill"
    },
    {
        quote: "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.",
        author: "Reba McEntire"
    },
    {
        quote: "Success isn't just about what you accomplish in your life, it's about what you inspire others to do.",
        author: "Unknown"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "If you can dream it, you can do it.",
        author: "Walt Disney"
    },
    {
        quote: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {
        quote: "The biggest risk is not taking any risk.",
        author: "Mark Zuckerberg"
    },
    {
        quote: "I never dreamed about success. I worked for it.",
        author: "Estée Lauder"
    },
    {
        quote: "Success is not a destination; it's a journey.",
        author: "Zig Ziglar"
    },
    {
        quote: "The secret of success is to do the common things uncommonly well.",
        author: "John D. Rockefeller"
    },
    {
        quote: "Success is not what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        quote: "Success is not about how much money you make; it's about the difference you make in people's lives.",
        author: "Michelle Obama"
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        quote: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        quote: "Success is not just making money. Success is happiness. Success is fulfillment; it's the ability to give.",
        author: "Adam Neumann"
    },
    {
        quote: "Success is going from failure to failure without losing your enthusiasm.",
        author: "Winston Churchill"
    },
    {
        quote: "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.",
        author: "Reba McEntire"
    },
    {
        quote: "Success isn't just about what you accomplish in your life, it's about what you inspire others to do.",
        author: "Unknown"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "If you can dream it, you can do it.",
        author: "Walt Disney"
    },
    {
        quote: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {
        quote: "The biggest risk is not taking any risk.",
        author: "Mark Zuckerberg"
    },
    {
        quote: "I never dreamed about success. I worked for it.",
        author: "Estée Lauder"
    },
    {
        quote: "Success is not a destination; it's a journey.",
        author: "Zig Ziglar"
    },
    {
        quote: "The secret of success is to do the common things uncommonly well.",
        author: "John D. Rockefeller"
    },
    {
        quote: "Success is not what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        quote: "Success is not about how much money you make; it's about the difference you make in people's lives.",
        author: "Michelle Obama"
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        quote: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        quote: "Success is not just making money. Success is happiness. Success is fulfillment; it's the ability to give.",
        author: "Adam Neumann"
    },
    {
        quote: "Success is going from failure to failure without losing your enthusiasm.",
        author: "Winston Churchill"
    },
    {
        quote: "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.",
        author: "Reba McEntire"
    }
];

var randomNumber = Math.floor(Math.random());

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    const randomQuote = motivationalQuotes[randomIndex];

    document.getElementById("quoteText").innerText = `"${randomQuote.quote}"`;
    document.getElementById("quoteAuthor").innerText = `- ${randomQuote.author}`;
}

document.getElementById("new-quote").addEventListener("click", displayRandomQuote);

//copy quote function
function copyQuoteToClipboard(){
    const quoteText = document.getElementById("quoteText").innerText;
    navigator.clipboard.writeText(quoteText)
    .then(() => {
        const copyMessage = document.getElementById("copy-message");
        copyMessage.style.display = "block";
        setTimeout(() => {
            copyMessage.style.display = "none";
        }, 1500); // Hide the message after 1.5 seconds
        })
        .catch((error) => {
            console.error("Error copying text!", error);
        });
}
document.getElementById("new-quote").addEventListener("click", displayRandomQuote);
document.getElementById("copy-quote").addEventListener("click", copyQuoteToClipboard);