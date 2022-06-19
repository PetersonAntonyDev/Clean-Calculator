let html = document.querySelector('html')
let checkbox = document.querySelector('#dark')

checkbox.addEventListener('change', () => {
    
    if (checkbox.checked) {
        html.classList.add('dark-mode')
    } else {
        html.classList.remove('dark-mode')
    }
})


//loading
var i = setInterval(function () {
    
    clearInterval(i);
  
    document.getElementById("loading").style.display = "none";
    document.getElementById("loader").style.display = "inline";

}, 4000);