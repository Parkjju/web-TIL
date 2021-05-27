const sidebarGroup = document.querySelector(".sidebar-group");

const CLICKED_CLASS = "open";

function handleClick() {
  const currentClass = sidebarGroup.className;
  if (currentClass !== CLICKED_CLASS) {
    sidebarGroup.classList.add(CLICKED_CLASS);
  } else {
    sidebarGroup.classList.remove(CLICKED_CLASS);
  }
}

function init() {
  sidebarGroup.addEventListener("click", handleClick);
}
init();
