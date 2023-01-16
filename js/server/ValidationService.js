// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */


function validateUser(userObj) {
    // Check required fields
    let result = validateLib.checkRequired("name", userObj.name);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("lastname", userObj.lastname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("password", userObj.password);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("repeatPassword", userObj.passwordRepeat);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("number", userObj.number);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("date", userObj.date);
    if (result.isNotValid) { return result; }


    //check length
    result = validateLib.checkLength("name",userObj.name, 3, 15);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("lastname", userObj.lastname, 2, 50);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("password", userObj.password, 6, 10);
    if (result.isNotValid) { return result; }

    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }

    //check phone
    result = validateLib.checkTelefon("number", userObj.number);
    if(result.isNotValid) {return result; }

    //check surname
    result = validateLib.checkSurname("number", userObj.name);
    if(result.isNotValid) {return result; }

    //check lastname
    result = validateLib.checkLastname("lastname", userObj.lastname);
    if(result.isNotValid) {return result; }

    //check date
    result = validateLib.checkDate("date", userObj.date);
    if(result.isNotValid) {return result; }

    

    /* Aufgabe 4a:
        Validierung auf vorhandensein von Vornamen, Nachnamen
     */

    /* Aufgabe 4b:
        Validierung auf vorhandensein von der Länge
        für Vorname (2 bis 20) und Nachname (2 bis 50)
     */

    /* Aufgabe 4c:
      Validierung der Telefonnumer ähnlich wie bei der Email mit einer
      Regular expression (regex). Für eine geeignete regex suchen Sie
      im Internet nach "javascript regular expression for mobile number"
    */

    /* Aufgabe 4d:
        Validierung, dass die Passwörter übereinstimmen
     */

    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */
module.exports = {
    validateUser
}
