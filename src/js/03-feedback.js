import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const allData = {};

const STORAGE_KEY = "feedback-form-state";

function onFormInput(event) {
    allData.email = form.elements.email.value;
    allData.message = form.elements.message.value;

    const dataOnStorage = localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
};

function onSubmitForm(event) {
   event.preventDefault();

   if(form.elements.message.value === '' || form.elements.email.value === '') {
      alert("Всі поля мають бути заповнені!");
   } else{
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(allData); 
    };
};

function noDataSaved() {
   const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

   if(savedData) {
    Object.entries(savedData).forEach(([name, value]) => {
        form.elements[name].value = value;
   })
  }
};

noDataSaved();
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit',onSubmitForm);