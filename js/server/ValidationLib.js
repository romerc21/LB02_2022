// Show input error message
function showError(id, message) {
    return `${id}: ${message}`;
}

// Show success outline
function showSuccess(id) {
    return `${id} successfully validate!`;
}

// Check email is valid
function checkEmail(id,input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Email is not valid')
        }
    }
    return result;
}


function checkMobile(id,input){
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Mobile-Number is not valid')
        }
    }
    return result;
    
}

//TODO: Check article for throwing errors in node js
// https://stackoverflow.com/questions/33086247/throwing-an-error-in-node-js

// Check required fields
function checkRequired(id, input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    //if input is empty ...
    if (input.trim() === '') {
        //.. then it's not valid
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} is required`)
        }
    }
    //return validation result
    return result;
}


// Check input length
function checkLength(id, input, min, max) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: showError(id,
            `${id} must be at least ${min} characters`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} must be less than ${max} characters`)
        }
    }
    return result;
}


// Check Surname
function checkSurname(id, input){
    // default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^[a-z ,.'-]+$/i;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Your name should only contain letters.')
        }
    }
    return result;
}

// Check Lastname
function checkLastname(id, input){
    // default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^[a-z ,.'-]+$/i;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Your lastname should only contain letters.')
        }
    }
    return result;
}


// Check email
function checkEmail(id, input){
    // default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Email is not valid. Example: example@gmail.com')
        }
    }
    return result;
}

// Check phone number
function checkTelefon(id, input){
    // default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }

    const re = /^\d{10}$/;

    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Telephone Number is not valid')
        }
    }
    return result;
}


// Check Date
function checkDate(id, input){
    // default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Date ist not Valid. Use this format dd/mm/yy.')
        }
    }
    return result;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */

module.exports = {
    checkRequired,
    checkLength,
    checkSurname,
    checkLastname,
    checkEmail,
    checkTelefon,
    checkDate
};
