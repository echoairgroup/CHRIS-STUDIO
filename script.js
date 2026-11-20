(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");

  if (menuButton && nav) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    };

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("open", !isOpen);
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        closeMenu();
        menuButton.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) closeMenu();
    });
  }

  if (nav && !nav.querySelector('[data-page-link="journey"]')) {
    const journeyLink = document.createElement("a");
    journeyLink.href = "journey.html";
    journeyLink.dataset.pageLink = "journey";
    journeyLink.textContent = "Journey";
    nav.insertBefore(journeyLink, nav.querySelector(".nav-cta"));
  }

  const currentPage = document.body.dataset.page;
  document.querySelectorAll("[data-page-link]").forEach((link) => {
    if (link.dataset.pageLink === currentPage) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const projectGrid = document.querySelector("#project-grid");
  if (projectGrid) {
    const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
    const searchInput = document.querySelector("#project-search");
    const projectCards = Array.from(projectGrid.querySelectorAll("[data-project-card]"));
    const emptyState = document.querySelector("#empty-state");
    const count = document.querySelector("[data-results-count]");
    let activeFilter = "all";

    const refreshProjects = () => {
      const query = (searchInput?.value || "").trim().toLocaleLowerCase();
      let visible = 0;

      projectCards.forEach((card) => {
        const category = card.dataset.category || "";
        const searchText = (card.dataset.search || card.textContent).toLocaleLowerCase();
        const categoryMatch = activeFilter === "all" || category.split(" ").includes(activeFilter);
        const searchMatch = !query || searchText.includes(query);
        const show = categoryMatch && searchMatch;
        card.hidden = !show;
        if (show) visible += 1;
      });

      if (emptyState) emptyState.hidden = visible > 0;
      if (count) {
        count.textContent = String(visible).padStart(2, "0") + " / " +
          String(projectCards.length).padStart(2, "0") + " PROJECTS";
      }
    };

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.filter || "all";
        filterButtons.forEach((item) => {
          const selected = item === button;
          item.classList.toggle("active", selected);
          item.setAttribute("aria-pressed", String(selected));
        });
        refreshProjects();
      });
    });

    searchInput?.addEventListener("input", refreshProjects);
    refreshProjects();
  }

  const revealItems = document.querySelectorAll(".feature-card, .project-card, .website-row, .value-card, .timeline-row");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

    revealItems.forEach((item) => {
      item.classList.add("reveal-item");
      observer.observe(item);
    });
  }
})();