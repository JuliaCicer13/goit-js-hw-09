import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form"),l="feedback-form-state";let e={email:"",message:""};o();a.addEventListener("input",s);a.addEventListener("submit",m);function s(){e={email:a.elements.email.value,message:a.elements.message.value},localStorage.setItem(l,JSON.stringify(e))}function m(t){if(t.preventDefault(),!e.email||!e.message)return alert("Fill all gaps please!!!"),console.log(`forData: ${JSON.stringify(e)}`);e={email:"",message:""},a.reset(),localStorage.removeItem(l)}function o(){const t=localStorage.getItem(l);t&&(e=JSON.parse(t),a.elements.email.value=e.email||"",a.elements.message.value=e.message||"")}
//# sourceMappingURL=commonHelpers2.js.map
