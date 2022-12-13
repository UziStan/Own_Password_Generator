//Selectors
const inputEl = document.querySelector("#input");
const copyImgEl = document.querySelector(".fa-copy");
const password_length = document.querySelector(".password_length");
const uppercase_checkbox = document.querySelector(".uppercase_checkbox");
const lowercase_checkbox = document.querySelector(".lowercase_checkbox");
const number_checkbox = document.querySelector(".number_checkbox");
const symbols_checkbox = document.querySelector(".symbols_checkbox");
const generateBtn = document.querySelector("#btn");

const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_+/;";

const getRandomData = (dataSet) => {    // this funftion return 1 random data by using dataSet
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = (password = "") => { // this funftion generate random password
    if(uppercase_checkbox.checked) {
        password += getRandomData(upperCaseChars);
    }
    if(lowercase_checkbox.checked) {
        password += getRandomData(lowerCaseChars);
    }
    if(number_checkbox.checked) {
        password += getRandomData(numbers);
    }
    if(symbols_checkbox.checked) {
        password += getRandomData(symbols);
    }
    if(password == "") {
        alert("Please click one checkbox");
    } else {
        if(password.length < password_length.value) {
            return generatePassword(password);
        }
    }
    inputEl.value = truncateString(password, password_length.value);
}

generateBtn.addEventListener("click", ()=> {    // this funftion call generatePassword when generate btn is on click
    generatePassword();
    if(inputEl.value) {
        copyImgEl.classList.remove("hide");
    }
});

copyImgEl.addEventListener("click", ()=> {      // this funftion copy password by clicking copy image
    navigator.clipboard.writeText(inputEl.value);
    alert(`${inputEl.value} Copied`);
});

function truncateString(str, num) {
    if(str.length > num) {
        let substr = str.substring(0, num);
        return substr;
    } else {
        return str;
    }
}