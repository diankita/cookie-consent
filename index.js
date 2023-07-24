const modalEl = document.querySelector("#modal");
const consentFormEl = document.querySelector("#consent-form");
const modalTextEl = document.querySelector("#modal-text");
const modalCloseBtn = document.querySelector("#modal-close-btn");
const declineBtn = document.querySelector("#decline-btn");
const modalChoiceBtns = document.querySelector("#modal-choice-btns");

setTimeout(() => {
  modalEl.style.display = "block";
}, 1500);

consentFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const consentFormData = new FormData(consentFormEl);
  const fullName = consentFormData.get("fullName");

  modalTextEl.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
        </div>`;

  setTimeout(() => {
    document.querySelector("#uploadText").innerText = "Making the sale...";
  }, 1500);

  setTimeout(() => {
    document.querySelector("#modal-inner").innerHTML = `
    <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `;

    modalCloseBtn.disabled = false;
  }, 3000);
});

modalCloseBtn.addEventListener("click", () => {
  modalEl.style.display = "none";
});

declineBtn.addEventListener("mouseenter", () => {
  modalChoiceBtns.classList.toggle("modal-choice-btns-reverse");
});
