const checkBtn = document.querySelector(".phone-check-btn");
const phone = document.querySelector("#phone");
const submitBtn = document.querySelector(".submit-btn");

function validatePhoneNumber(value) {
  const re = /^\(?(\d{3})\)?[ ]?(\d{3})[-]?(\d{4})$/;

  if (re.test(value)) {
    submitBtn.disabled = false;
    return true;
  } else {
    return alert("Please check the proper phone number");
  }
}

(function onClickCheckPhoneBtn() {
  checkBtn.addEventListener("click", () => {
    validatePhoneNumber(phone.value);
  });
})();
