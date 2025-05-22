// Show/hide scroll to top button
window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Scroll reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 1s ease-out";
  observer.observe(section);
});
