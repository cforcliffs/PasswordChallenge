const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const passwordField = document.getElementById("passwordField");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const strengthText = document.getElementById("strengthText");
const strengthFill = document.getElementById("strengthFill");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

lengthValue.textContent = lengthSlider.value;

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});


// If variables are checked it creates the password
function generatePassword() {
    let chars = "";
    if (uppercase.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase.checked) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers.checked) chars += "0123456789";
    if (symbols.checked) chars += "!@#$%^&*()_+";

    if (chars === "") {
        alert("Select at least one option!");
        return "";
    }

    let password = "";
    for (let i = 0; i < lengthSlider.value; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}


// the strength variable is dependant on if else statements
function checkStrength(password) {
    let strength = 0;

    if (password.length >= 12) strength++; //if it has more than 12 characters, it's good.
    if (uppercase.checked && lowercase.checked) strength++; //if it has uppercase and lowercase checked, it's good.
    if (numbers.checked) strength++; // if the numbers are checked that's good
    if (symbols.checked) strength++; // if the symbols are checked that's good



    // if the pw has less than two variables, it's weak
    if (strength <= 2) {
        strengthText.textContent = "Weak";
        strengthFill.style.width = "33%";
        strengthFill.style.background = "red";

    // if the pw has 3 variables, it's medium strength
    } else if (strength === 3) {
        strengthText.textContent = "Medium";
        strengthFill.style.width = "66%";
        strengthFill.style.background = "orange";



    // if the pw has all 4 variables, it's strong strength
    } else {
        strengthText.textContent = "Strong";
        strengthFill.style.width = "100%";
        strengthFill.style.background = "#22c55e";
    }
}

generateBtn.addEventListener("click", () => {
    
    const password = generatePassword();
    passwordField.value = password;
    checkStrength(password);
});

copyBtn.addEventListener("click", () => {
    if (!passwordField.value) return;
    navigator.clipboard.writeText(passwordField.value);
    copyBtn.textContent = "Copied!";
    setTimeout(() => copyBtn.textContent = "Copy", 1500);
});
