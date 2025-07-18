document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const typewriter = document.getElementById("typewriter");
  const phrase = "Insight Driven Innovation";
  let i = 0;

  function typeNextChar() {
    if (i < phrase.length) {
      typewriter.textContent += phrase[i];
      i++;
      setTimeout(typeNextChar, 100); // typing speed
    } else {
      // pause after typing before fade
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        document.body.style.opacity = "1";
        loopScrambles();
      }, 800);
    }
  }

  typeNextChar();
});


const phrases = [
"Technical Product Intern @ Dewpoint",
  "SWE Intern @ Consumers Energy",
  "AI Researcher @ D-CYPHER Lab",
  "Creative Strategy Intern @ Leo Burnett ",
  "Technical Program Lead @ MSU VEXU Robotics ",
  "President @ MSU Tower Guard ",
];

const scrambleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
const el = document.getElementById("scramble-text");

let counter = 0;

function scrambleToText(nextText, callback) {
  let iterations = 0;
  const maxIterations = 20;
  const length = nextText.length;

  const interval = setInterval(() => {
    let display = "";

    for (let i = 0; i < length; i++) {
      if (i < iterations) {
        display += nextText[i];
      } else {
        display += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
      }
    }

    el.textContent = display;

    iterations++;

    if (iterations > length) {
      clearInterval(interval);
      el.textContent = nextText;
      if (callback) callback();
    }
  }, 40);
}

function loopScrambles() {
  scrambleToText(phrases[counter], () => {
    counter = (counter + 1) % phrases.length;
    setTimeout(loopScrambles, 1800); // pause before next transition
  });
}


// === Experience Page Filtering ===
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".experience-card");

  if (filterButtons.length) {
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        // Update active state
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Show/hide and rearrange
        cards.forEach(card => {
          const category = card.getAttribute("data-category");
          if (filter === "all" || category === filter) {
            card.style.display = "block";
            card.classList.remove("hide");
card.style.display = "block";
card.classList.add("fade-reenter");

setTimeout(() => {
  card.classList.remove("fade-reenter");
}, 300);

          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }
});

function revealWhy() {
  const section = document.getElementById('why-section');
  section.scrollIntoView({ behavior: 'smooth' });
}
