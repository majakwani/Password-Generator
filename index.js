const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPassword = document.querySelector(".one")
let secondPassword = document.querySelector(".two")
function displayPasswords(){
    firstPassword.textContent = generatePassword()
    secondPassword.textContent = generatePassword()
}

function generatePassword(){
    let password = ""
    for(let i = 0; i < 15; i++){
        let randomNumber = Math.floor(Math.random()*90) + 1
        password += characters[randomNumber]
    }
    return password
}

console.log(characters.length)