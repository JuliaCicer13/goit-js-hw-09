
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const localStorageKey = "feedback-form-state";


const saveFormData = () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim()
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};


const loadFormData = () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
};


const clearFormData = () => {
  localStorage.removeItem(localStorageKey);
};


form.addEventListener("input", saveFormData);


window.addEventListener("DOMContentLoaded", loadFormData);


form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim()
  };
  if (formData.email && formData.message) {
    console.log(formData);
    clearFormData();
    form.reset();
  } else {
    console.log("Please fill in all fields.");
  }
});



