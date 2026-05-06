let observer;

function getObserver() {
  if (observer || typeof window === "undefined") {
    return observer;
  }

  if (!("IntersectionObserver" in window)) {
    return null;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  return observer;
}

export default {
  mounted(element) {
    element.classList.add("reveal");

    const revealObserver = getObserver();
    if (!revealObserver) {
      element.classList.add("is-visible");
      return;
    }

    revealObserver.observe(element);
  },
  unmounted(element) {
    if (!observer) {
      return;
    }

    observer.unobserve(element);
  },
};
