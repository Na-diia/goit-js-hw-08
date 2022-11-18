import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    fields : {
    message : document.querySelector('textarea'),
    email: document.querySelector('input'),
       },
};
 
refs.fields.message.addEventListener('input', onTextareaInput);
refs.form.addEventListener('submit', onFormSubmit);

const onFormSubmit = event => {
    event.preventDefault();
    event.currentTarget.reset();

    console.log(event.currentTarget);
};

const onTextareaInput = event => {
    const message = event.currentTarget.value;

    localStorage.setItem("feedback-form-state", message);
};

function populateMessage() {
    const getMessage = localStorage.getItem("feedback-form-state");

    if (getMessage) {

    }
}

