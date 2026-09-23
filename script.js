function sendEnquiry(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const project = document.getElementById('project').value;
  const stone = document.getElementById('stone').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent("NRK STONES Website Enquiry");
  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProject Type: ${project}\nStone Requirement: ${stone}\nMessage: ${message}`
  );

  window.location.href = `mailto:pnpk353@gmail.com?subject=${subject}&body=${body}`;
}
