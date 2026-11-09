(() => {
  "use strict";
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        menuButton.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        menuButton.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
        menuButton.focus();
      }
    });
  }
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
  const list = document.querySelector("#project-list");
  if (list) {
    const buttons = [...document.querySelectorAll("[data-filter]")];
    const input = document.querySelector("#project-search");
    const entries = [...list.querySelectorAll(".project-entry")];
    const empty = document.querySelector("#empty-state");
    const count = document.querySelector("[data-results-count]");
    let filter = "all";
    const refresh = () => {
      const query = (input?.value || "").trim().toLowerCase();
      let visible = 0;
      entries.forEach((entry) => {
        const categoryMatch = filter === "all" || entry.dataset.category === filter;
        const textMatch = !query || (entry.dataset.search || entry.textContent).toLowerCase().includes(query);
        entry.hidden = !(categoryMatch && textMatch);
        if (!entry.hidden) visible++;
      });
      if (empty) empty.hidden = visible > 0;
      if (count) count.textContent = String(visible).padStart(2, "0") + " / " + String(entries.length).padStart(2, "0") + " PROJECTS";
    };
    buttons.forEach((button) => button.addEventListener("click", () => {
      filter = button.dataset.filter || "all";
      buttons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      refresh();
    }));
    input?.addEventListener("input", refresh);
    refresh();
  }
})();