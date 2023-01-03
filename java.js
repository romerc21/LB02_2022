
function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // if (username=="admin"&& password=="user")
    {
        alert("login succesfully");
        return false;

    }

else

{
    alert("login failed");
}

}

const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit' ,(e) => {
    let messages = []
    if (username.value === '' || username.value == null) {
        messages.push('Username is required')
    }

    if (password.value.length <= 6) {
        messages.push('password must be longer than 6 characters')
    }

    if (password.value.length >= 20) {
        messages.push('password must be less than 20 characters')
    }


    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText= messages.join(', ')
    }
})
