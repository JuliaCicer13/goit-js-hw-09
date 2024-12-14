
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const localStorageKey = "feedback-form-state";




form.addEventListener("input", handleInput);

function handleInput(event) {
  
  formData =
{
  email: event.target.emailInput.value,
  message: event.target.messageTextarea.value
};

  localStorage.setItem(localStorageKey, JSON.stringify(formData));

}


function loadPage() {

  if (localStorage.getItem(localStorageKey, JSON.stringify(formData))) {

    const formData = emailInput.event.target.email.value;


  }

  formData = emailInput === "" && messageTextarea === "";

}


