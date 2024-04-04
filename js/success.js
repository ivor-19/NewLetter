const btndismiss = document.querySelector('.btndismiss');
var emailName = document.querySelector('.span-email');

var emailInput = localStorage.getItem('emailInput');
emailName.textContent = emailInput;



btndismiss.addEventListener('click', function(){
    window.location.href = 'index.html';
    localStorage.removeItem('emailInput');
});