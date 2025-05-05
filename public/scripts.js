function animate() {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("show");
        observer.unobserve(change.target); // Stop observing once animated
      }
    });
  }

  const options = { threshold: [0.25] };
  const observer = new IntersectionObserver(onEntry, options);

  // Observe all current elements
  function observeElements() {
    const elements = document.querySelectorAll(
      "[data-animation], main > div > section, main > section"
    );
    elements.forEach((elm) => observer.observe(elm));
  }

  // Initial observation of existing elements
  observeElements();

  // Use MutationObserver to detect newly added elements
  const mutationObserver = new MutationObserver(() => {
    observeElements(); // Re-run the observation for new elements
  });

  // Observe changes to the entire document body
  mutationObserver.observe(document.body, {
    childList: true, // Observe direct children changes
    subtree: true, // Observe changes to all descendants
  });
}

// Call animate function after DOM content is loaded
document.addEventListener("DOMContentLoaded", animate);
