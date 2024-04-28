const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const info = document.querySelector("#personal-info");
const form = document.querySelector("#form");
const submit = document.querySelector(".btn");
const buttons = document.querySelectorAll(".view-more");

info.classList.add("hidden");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.querySelector("#exampleInputEmail1").value;

  if (email.match(regex)) {
    console.log("Valid email:", email);
    info.classList.remove("hidden");
    form.classList.add("hidden");
  } else {
    console.error("Invalid email:", email);
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", function showContent() {
    const detailId = this.dataset.detailId;
    const detail = document.querySelector(`.detail-${detailId}`);

    console.log(detail);

    if (detail.style.display === "none") {
      detail.style.display = "block";
      button.textContent = "View Less";
    } else {
      detail.style.display = "none";
      button.textContent = "View More";
    }
  });
});
