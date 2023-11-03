/*
*/
// put keyup listener on the first input field
let textBox = document.querySelector('#firstname');
textBox.addEventListener('keyup', function (){
    let textEntered = textBox.value;
    let messageElement = document.querySelector ('#display-firstname');
    messageElement.innerText = textEntered
})

//  add keyup listener on the second field
const ageInput = document.getElementById('age');
const HardTruthSection = document.getElementById('a-hard-truth');

ageInput.addEventListener('keyup', function(){
    const age = parseInt(ageInput.value, 10);
    if (age < 18){
        HardTruthSection.style.visibility = 'hidden';
    }
    else{ 
        HardTruthSection.style.visibility = 'visible';
    }
});

// add keyup listener on password field
const passwordField = document.getElementById('pwd')
const confirmPasswordField = document.getElementById('pwd-confirm')

passwordField.addEventListener('keyup', validatePassword)
confirmPasswordField.addEventListener('keyup', validatePassword)

function validatePassword(){
    const passwordValue = passwordField.value
    const confirmPasswordValue = confirmPasswordField.value

    if(passwordValue.length < 6){
        passwordField.style.backgroundColor = 'red'
    }
    else{
        passwordField.style.backgroundColor = ''
    }

    if (passwordValue !== confirmPasswordValue){
        confirmPasswordField.style.backgroundColor = 'red'
    }
    else{
        confirmPasswordField.style.backgroundColor = ''
    }
}