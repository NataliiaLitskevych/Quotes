const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [
    "« I know that I know nothing. » - Socrates",
    "« Success is going from failure to failure without losing your enthusiasm. » - Winston Churchill",
    "« I never lose. I either win or learn. » - Nelson Mandela",
    "« Everyone thinks of changing the world, but no one thinks of changing himself. » — Leo Tolstoy",
    "« Love is not about what we want to receive, but what we are willing to give. » - William Shakespeare",
    "« Fight – and you shall overcome, for God is helping you! » — Taras Shevchenko",
    "« Love does not consist in gazing at each other, but in looking outward together in the same direction. »  — Antoine de Saint-Exupéry",
    "« Hope is not the conviction that something will turn out well, but the certainty that something makes sense, regardless of how it turns out. » - Václav Havel"
]

button.addEventListener("click", () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})