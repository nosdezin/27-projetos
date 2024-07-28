const abrirCard = (obj) => {
  if (!obj.parentNode.parentNode.classList.contains("open")) {
    obj.parentNode.parentNode.classList.add("open");
    obj.parentNode.parentNode.children.content.hidden = false;

    document.querySelectorAll(".faq-card").forEach((card) => {
      if (card !== obj.parentNode.parentNode) {
        card.classList.remove("open");
        card.children.content.hidden = true;
      }
    });
  } else {
    obj.parentNode.parentNode.classList.remove("open");
    obj.parentNode.parentNode.children.content.hidden = true;
  }
};

const search = () => {
  document.querySelector("input").value = "";
  window.location.reload();
};
