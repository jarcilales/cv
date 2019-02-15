
//document.getElementById("amix").innerHTML() = "hola soy tu amigo";

//Esta funcion espera a que todos los elementos del dom se carguen "window addevenlistener"
window.addEventListener('load', function(){
    //aqui obtienes el elemento usando query Selector y lo almacenas en una variable
let aside = document.querySelector('.personal-info');
//aqui creas un nuevo elemento html y lo llenas con info
const span = document.createElement('span')
span.innerHTML = '<h1>No te metas con mi cucu</h1>'
//aqui lo agregas dentro de ese elemento aside
aside.appendChild(span)
})