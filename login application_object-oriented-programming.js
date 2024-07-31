class Validator {
    static REQUIRED = "REQUIRED";
    static MIN_LENGTH = "MIN_LENGTH";
    static validate(value, flag, validatorValue) {
        if (flag === this.REQUIRED) {
            return value.trim().length > 0;
        }
        return false;
    }
}
class User {
    constructor(uName, uPassword) {
        this.userName = uName;
        this.password = uPassword;
    }
    greet() {
        console.log("Hello my name is" + this.userName);
    }
}
class UserInputForm {
    constructor() {
        this.form = document.getElementById('user-input');
        this.userNameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');
        this.form.addEventListener('submit', (event) =>
            this.signupHandler(event));
    }
    signupHandler(event) {
        event.preventDefault();
        const enteredUsername = this.userNameInput.value;
        const enteredPassword = this.passwordInput.value;
        if (
            !Validator.validate(enteredUsername, Validator.REQUIRED) ||
            Validator.validate(enteredPassword, Validator.REQUIRED) ||
            Validator.validate(enteredPassword, Validator.MIN_LENGTH, 6)
        ) {
            alert('Invalid input - username or password is wrong (password should be at least 8 characters or longer).');
                return;
            }
            const newUser = new User(enteredUsername, enteredPassword);
            newUser.greet();
            console.log(newUser);
        }
    }