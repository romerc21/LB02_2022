let val = input.value;
let generatedCode= code.textContent;{(
if (val === '') {
    alert('Please enter the code');
} else if( val === generatedCode) {
    alert('Captcha is valid')
} else {
    alert('Captcha is valid') ;
}
});