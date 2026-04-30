import { useEffect, useState } from "react";

export function useActiveSection(
  sectionIds,
  { rootMargin = "-35% 0px -45% 0px", threshold = 0.35, updateHash = true } = {},
) {
  const sectionKey = sectionIds.join("|");

  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window === "undefined") {
      return sectionIds[0] ?? "";
    }

    const initialHash = window.location.hash.replace("#", "");
    return sectionIds.includes(initialHash) ? initialHash : (sectionIds[0] ?? "");
  });

  useEffect(() => {
    if (!sectionIds.length || typeof window === "undefined") {
      return;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element) => element !== null);

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) {
          return;
        }

        const nextSection = visibleEntry.target.id;
        setActiveSection((currentSection) =>
          currentSection === nextSection ? currentSection : nextSection,
        );
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [rootMargin, sectionIds, sectionKey, threshold]);

  useEffect(() => {
    if (!updateHash || typeof window === "undefined" || !activeSection) {
      return;
    }

    const nextHash = `#${activeSection}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
    }
  }, [activeSection, updateHash]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener("hashchange", syncFromHash);
    syncFromHash();

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [sectionIds, sectionKey]);

  return activeSection;
}
