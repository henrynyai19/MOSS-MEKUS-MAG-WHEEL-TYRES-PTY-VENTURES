const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelector(".quote-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const name = formData.get("name") || "Customer";
  const phone = formData.get("phone") || "Not provided";
  const service = formData.get("service") || "General enquiry";
  const message = formData.get("message") || "Please contact me about your services.";
  const whatsappNumber = "27681656964";
  const whatsappMessage = [
    "Hello MOSS MEKUS MAG WHEEL & TYRES,",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service needed: ${service}`,
    `Message: ${message}`,
  ].join("\n");

  window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
});
