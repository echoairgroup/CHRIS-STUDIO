(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");

  if (menuButton && nav) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
      const label = menuButton.childNodes[0];
      if (label) label.textContent = "Menu ";
      const sign = menuButton.querySelector("span");
      if (sign) sign.textContent = "＋";
    };

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("open", !isOpen);
      const label = menuButton.childNodes[0];
      if (label) label.textContent = isOpen ? "Menu " : "Close ";
      const sign = menuButton.querySelector("span");
      if (sign) sign.textContent = isOpen ? "＋" : "×";
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
      if (window.innerWidth > 680) closeMenu();
    });
  }

  const page = document.body.dataset.page;
  document.querySelectorAll("[data-page-link]").forEach((link) => {
    if (link.dataset.pageLink === page) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const projectList = document.querySelector("#project-list");
  if (projectList) {
    const buttons = Array.from(document.querySelectorAll("[data-filter]"));
    const search = document.querySelector("#project-search");
    const rows = Array.from(projectList.querySelectorAll("[data-project-row]"));
    const count = document.querySelector("[data-results-count]");
    const empty = document.querySelector("#empty-state");
    let selected = "all";

    const update = () => {
      const query = (search?.value || "").trim().toLocaleLowerCase();
      let visible = 0;
      rows.forEach((row) => {
        const categories = (row.dataset.category || "").split(" ");
        const categoryMatch = selected === "all" || categories.includes(selected);
        const searchText = (row.dataset.search || row.textContent).toLocaleLowerCase();
        const searchMatch = !query || searchText.includes(query);
        const show = categoryMatch && searchMatch;
        row.hidden = !show;
        if (show) visible += 1;
      });
      if (count) count.textContent = String(visible).padStart(2, "0") + " / " + String(rows.length).padStart(2, "0") + " PROJECTS";
      if (empty) empty.hidden = visible !== 0;
    };

    buttons.forEach((button) => button.addEventListener("click", () => {
      selected = button.dataset.filter || "all";
      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      update();
    }));

    search?.addEventListener("input", update);
    update();
  }
})();