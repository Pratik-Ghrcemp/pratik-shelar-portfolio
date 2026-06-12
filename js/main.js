const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const printBtn = document.getElementById("printBtn");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const liveClock = document.getElementById("liveClock");
const quoteLine = document.getElementById("quoteLine");

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
  themeToggle.innerHTML = savedTheme === "light" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      event.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 82, behavior: "smooth" });
      }
    }
    navLinks.classList.remove("show");
  });
});

themeToggle.addEventListener("click", () => {
  const isLight = document.documentElement.dataset.theme === "light";
  const nextTheme = isLight ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
  themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
});

printBtn.addEventListener("click", () => window.print());

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formStatus.textContent = "Please enter a valid email address.";
    formStatus.classList.add("show");
    return;
  }

  const subject = "Portfolio Contact - Interview / Internship Opportunity";
  const body = [
    "Hello Pratik,",
    "",
    "I visited your developer portfolio and would like to connect regarding an opportunity.",
    "",
    "Recruiter / Interviewer Details:",
    "Name: " + name,
    "Email: " + email,
    "",
    "Message:",
    message,
    "",
    "Sent from Pratik Vijay Shelar's Developer Portfolio contact form."
  ].join("\n");

  window.location.href = "mailto:shelarpratik201@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  formStatus.textContent = "Thank you, " + name + ". Your email app is opening with a professional message for Pratik.";
  formStatus.classList.add("show");
  contactForm.reset();
});

const counters = document.querySelectorAll("[data-count]");
const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const item = entry.target;
    const target = Number(item.dataset.count);
    const isCgpa = target === 799;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 48));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      item.textContent = isCgpa ? (current / 100).toFixed(2) : current + "+";
    }, 26);
    observer.unobserve(item);
  });
}, { threshold: 0.4 });

counters.forEach((counter) => counterObserver.observe(counter));

function updateClock() {
  liveClock.textContent = "IST " + new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });
}
updateClock();
setInterval(updateClock, 1000);

const quotes = [
  "Build quietly. Let the projects speak.",
  "Consistency turns practice into proof.",
  "Great software starts with clear thinking.",
  "DSA sharpens logic. Projects sharpen judgment."
];
quoteLine.textContent = quotes[new Date().getDate() % quotes.length];


