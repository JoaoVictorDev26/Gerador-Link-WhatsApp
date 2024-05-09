let form = document.getElementById('myForm');
let celular = document.getElementsByTagName('input')[0]
let result = document.getElementsByClassName('resultado')[0]
let link = document.getElementsByClassName('link')[0]

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    link.href = `https://wa.me/55${celular.value}`
    link.innerHTML = `https://wa.me/55${celular.value}`
    result.style.display = "block"
})