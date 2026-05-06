import { onMounted, onUnmounted, ref } from "vue";

export function useSectionNavigation(sectionIds) {
  const activeSectionId = ref(sectionIds[0] ?? "");
  let observer;

  function navigateTo(target) {
    const targetElement = document.getElementById(target);
    if (!targetElement) {
      return;
    }

    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  onMounted(() => {
    if (!("IntersectionObserver" in window)) {
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((current, next) => next.intersectionRatio - current.intersectionRatio)[0];

        if (!visibleEntry) {
          return;
        }

        activeSectionId.value = visibleEntry.target.id;
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sectionIds.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return {
    activeSectionId,
    navigateTo,
  };
}
