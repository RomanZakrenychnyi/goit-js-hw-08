const e=document.querySelector(".feedback-form"),t=document.querySelector('input[name="email"]'),a=document.querySelector('textarea[name="message"]');(e=>{if(localStorage.getItem("feedback-form-state")||null!==localStorage.getItem("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state")),{email:o,message:l}=e;t.value=o,a.value=l}})();e.addEventListener("submit",(e=>{e.preventDefault();const{email:t,message:a}=e.target.elements,o={email:t.value,message:a.value};console.log(o),e.target.reset(),localStorage.removeItem("feedback-form-state")})),e.addEventListener("input",(({target:e})=>{console.log(e.value);const t={email:e.form[0].value,message:e.form[1].value},a=JSON.stringify(t);localStorage.setItem("feedback-form-state",a)}));
//# sourceMappingURL=03-feedback.1de08c9a.js.map
