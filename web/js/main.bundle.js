(() => {
  var e = {
      body: document.querySelector("body"),
      menu: document.querySelector(".js-mobilemenu"),
      triggers: document.querySelectorAll(".js-menutrigger"),
    },
    t = { open: "is-open", active: "has-menu" },
    o = () => {
      e.triggers.forEach((n) => {
        n.addEventListener("click", (r) => {
          r.preventDefault(),
            e.menu.classList.toggle(t.open),
            e.body.classList.toggle(t.active);
        });
      });
    };
  o();
})();
