// Change background header
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewpoint height, add the scroll-header
  // class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);
