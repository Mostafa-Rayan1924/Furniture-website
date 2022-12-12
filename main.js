let lis = document.querySelectorAll(".portofolio ul li");
let img = document.querySelectorAll(".portofolio img");
lis.forEach((item) => {
  item.addEventListener("click", removeActive);
  item.addEventListener("click", mngImg);
});

function removeActive() {
  lis.forEach((item) => {
    item.classList.remove("active");
  });
  this.classList.add("active");
}
function mngImg() {
  img.forEach((ele) => {
    ele.style.display = "none";
  });
  document.querySelectorAll(this.dataset.set).forEach((item) => {
    item.style.display = "block";
  });
}
let up = document.querySelector(".up");
window.onscroll = function () {
  if (scrollY >= 600) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
};
up.onclick = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

let section = document.querySelectorAll(".section");
let navLink = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let curr = "";
  section.forEach((item) => {
    if (scrollY >= item.offsetTop) {
      curr = item.getAttribute("id");
    } else {
      document.querySelector(".n1").classList.add("active");
    }
  });
  navLink.forEach((ele) => {
    ele.classList.remove("active");
    document
      .querySelector("nav ul li a[href*= " + curr + "]")
      .classList.add("active");
  });
});
