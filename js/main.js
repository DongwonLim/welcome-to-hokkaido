function toggleMenu() {
  const $navMenu = document.getElementById("nav__menu");
  $navMenu.classList.toggle("show");
}
function init() {
  const $navToggle = document.getElementById("nav-toggle");
  $navToggle.addEventListener("click", () => {
    // Menu Toggle
    toggleMenu();
  });
  const $navLinkList = document.querySelectorAll(".nav__link ");
  $navLinkList.forEach((el) => el.addEventListener("click", toggleMenu));
}

init();

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      document
        .querySelector(`.nav__link[href*=${sectionId}]`)
        .classList.add("active-link");

      const $items = document.querySelectorAll(
        `.nav__link:not([href*=${sectionId}])`
      );
      $items.forEach((el) => el.classList.remove("active-link"));
    }
  });
}, options);

const $sectionList = document.querySelectorAll(".section");
$sectionList.forEach((el) => observer.observe(el));

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});
scrollReveal.reveal(".home__data");
scrollReveal.reveal(
  ".home__img, .about__data, .restaurants__data, .cafe__data, .camp__data, .trip__data",
  {
    delay: 200,
  }
);
scrollReveal.reveal(".restaurants__data, .contact__input", {
  interval: 200,
});

//스크롤 위로 올리기
const $floatingButton = document.getElementById("floationg-button");
$floatingButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//타이핑 효과
const typeit = new TypeIt("#typeit", {
  speed: 70,
  startDelay: 1300,
  waitUntilVisible: true,
});

typeit
  .type("ようこそ、 <br />")
  .type('<strong class="home__title-color">北海道</strong>へ！')
  .go();
