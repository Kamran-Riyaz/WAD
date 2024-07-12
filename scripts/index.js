function openWhatsApp() {
  let phoneNumber = document.getElementById("phone-number-input").value;
  if (phoneNumber === "") {
    alert("Please Enter The Number!");
  } else {
    window.open(
      `https://api.whatsapp.com/send/?phone=${phoneNumber}`,
      "_blank"
    );
  }
}

function clearPhoneNumber() {
  document.getElementById("phone-number-input").value = "";
}
