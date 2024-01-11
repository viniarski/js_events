console.log("TEST");

let buttonImage = document.querySelector('img');
let button = document.querySelector('button')

function toggleDarkLightMode() {
    if (document.body.classList.contains('dark_mode')) {
        buttonImage.src = './media/moon.png';
        document.body.classList.remove('dark_mode');
        document.body.classList.add('light_mode');
    } else {
        buttonImage.src = './media/sun.png';
        document.body.classList.remove('light_mode');
        document.body.classList.add('dark_mode');
        }
}

button.addEventListener('click', toggleDarkLightMode);