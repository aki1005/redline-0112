const batchCards = document.querySelectorAll(".batch-card");

batchCards.forEach((card) => {
  card.addEventListener("click", () => {
    const shouldOpen = !card.classList.contains("is-open");
    batchCards.forEach((item) => {
      item.classList.remove("is-open");
      item.setAttribute("aria-expanded", "false");
    });
    if (shouldOpen) {
      card.classList.add("is-open");
      card.setAttribute("aria-expanded", "true");
    }
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((section) => revealObserver.observe(section));
