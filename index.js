
let passwordOne = document.getElementById("password1-el")
let passwordTwo = document.getElementById("password2-el")



const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 14;





function getRandomCharacter(){

    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]


}



function generateRandomPassword(){
    let randomPassword = ""
    for(let i = 0; i < passwordLength; i++){
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

// Function to generate and display both passwords
function generatePasswords(){
    // Generate two different passwords
    let password1 = generateRandomPassword()
    let password2 = generateRandomPassword()
    
    // Display the passwords in the HTML elements
    passwordOne.innerText = password1
    passwordTwo.innerText = password2
}
















