//index js
const btn = document.querySelector('.btn');
const txtInput = document.getElementById('txtInput');
const emailErr = document.querySelector('.email-error');

var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

btn.addEventListener('click', function(){
    if(txtInput.value.trim() !== ""){
        if(txtInput.value.trim().match(pattern)){
            localStorage.setItem('emailInput', txtInput.value);

            var params = {
                subject: "For confirmation",
                message: "Are you for real?!?!",
                to: txtInput.value,
                from: "The Chosen One",
            }
            
            var serviceID = "service_8psb5ai";
            var templateID = "template_lyj0069";

            emailjs.send(serviceID, templateID, params).then(function (res) {
                window.location.href = 'success.html';
            })
            
        }
        else{
            errorVoid();
        }
        
    }
    else{
        errorVoid();
    }
});

txtInput.addEventListener('input', function(){
    if(txtInput.value.trim() !== ""){
        txtInput.style.backgroundColor = 'white';
        txtInput.style.outline = 'none';
        txtInput.style.border = '1px solid gray';
        emailErr.style.display = 'none';
    }
});


function errorVoid(){
    txtInput.style.backgroundColor = 'hsl(3, 79%, 91%, 0.8)';
    txtInput.style.outline = '2px solid hsl(4, 100%, 67%)';
    txtInput.style.innerHTML = 'hsl(4, 100%, 67%)';
    txtInput.style.border = '1px solid transparent';
    emailErr.style.display = 'block';
}

