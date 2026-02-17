

// Variables for the JavaScript to function
const genBtn = document.getElementById("genbtn-el")
let passwordOne = document.getElementById("password1-el")
let passwordTwo = document.getElementById("password2-el")


// Characters and the password length
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 14;



// How to get 14 random characters
function getRandomCharacter(){

    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]


}




// Password one and password two use this formula to get random passwords
function generateRandomPassword(){
    let randomPassword = ""
    for(let i = 0; i < passwordLength; i++){
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}





// When the user clicks the green button, it should trigger this event liste

genBtn.addEventListener('click', function(){

    // Generate two different passwords
    let password1 = generateRandomPassword()
    let password2 = generateRandomPassword()
    
    // Display the passwords in the HTML elements
    passwordOne.innerText = password1
    passwordTwo.innerText = password2

})














