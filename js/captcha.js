
var allValue = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']


var cval1 = allValue[Math.floor(Math.random() * allValue.length)];
var cval2 = allValue[Math.floor(Math.random() * allValue.length)];
var cval3 = allValue[Math.floor(Math.random() * allValue.length)];
var cval4 = allValue[Math.floor(Math.random() * allValue.length)];
var cval5 = allValue[Math.floor(Math.random() * allValue.length)];


var cvalue = cval1 + cval2 + cval3 + cval4 + cval5;

var captchaValue = document.getElementById("captchaValue");
var submitBtn = document.getElementById("submitBtn");
var inputCaptcha = document.getElementById("inputcaptcha");
var mcform = document.getElementById("mc-form");


captchaValue.innerHTML = cvalue;
thisValue = "";
inputCaptcha.addEventListener('change', function () {
    thisValue = inputCaptcha.value;
})



submitBtn.addEventListener('click', function () {
    if (cvalue == thisValue) {
        alert("Valid");
        document.mcform.submit();
    } else {
        alert("Invalid Captcha");
    }
})


