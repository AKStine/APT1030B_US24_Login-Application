const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';
function validate(value, flag, validatorValue) {
    if (flag === REQUIRED) {
        return value.trim().length > 0;
    }
    if (flag === MIN_LENGTH) {
        return value.trim().length > validatorValue;
    }
}
function getUserInput(inputElementId) {
    return document.getElemntById(inputElementId).value;
}
function signupHandler(event) {
    event.preventDefault();
    const enteredUsername = getUserInput('username');
    const enteredPassword = getUserInput('password');
}