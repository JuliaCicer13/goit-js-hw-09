
const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

let formData = {
  email: "",
  message: ""
};

populateTextArea();


form.addEventListener('input',
inputTextarea);
form.addEventListener('submit',
submitForm);


function inputTextarea() {
  
   formData = {
    
   email:
      form.elements.email.value,
    message:
      form.elements.message.value
  };

  localStorage.setItem(localStorageKey, JSON.stringify(formData));




}

function submitForm(event) {

  event.preventDefault();

  if (!formData.email || !formData.message) {
    
    alert("Fill all gaps please!!!");
    
    return console.log(`forData: ${JSON.stringify(formData)}` );
  }
 
  formData = {
    email: "",
    message: ""
 }
  form.reset()
  
  localStorage.removeItem(localStorageKey);
}




function populateTextArea() {
  
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value =
      formData.email || "";
    form.elements.message.value =
      formData.message || "";


  }

}