const year = document.getElementById("year");

if (year) {
  const thisYear = new Date().getFullYear();
  year.setAttribute("datetime", thisYear);
  year.textContent = thisYear;
}


const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset();
  });
}
