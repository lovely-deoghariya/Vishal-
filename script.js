let current = 0;
const cards = document.querySelectorAll(".card");

function nextCard() {
    cards[current].classList.remove("active");
    current++;

    if (current >= cards.length) {
        current = 0;
    }

    cards[current].classList.add("active");
}
