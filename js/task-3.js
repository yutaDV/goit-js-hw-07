const usernameGetElem = document.querySelector('.js-name-input');
const usernameElem = document.querySelector('.js-name-output');

usernameGetElem.addEventListener('input', onUsernameInput);
 

function onUsernameInput() { 
    const value = usernameGetElem.value.trim();
    usernameElem.textContent = value === '' ? 'Anonymous' : value;
}
