var boton = document.querySelector('#boton');
var boton2 = document.querySelector('#boton2');

boton.addEventListener('click', function(){
    let sueldo = document.querySelector('#sueldo');
    let nuevoDiv = document.createElement('div');
    let textNode = document.createTextNode(nuevoSueldo(sueldo.value));
    nuevoDiv.appendChild(textNode);
    let section = document.getElementById('section');
    section.appendChild(nuevoDiv);

    sueldo.value = null;
    sueldo.focus();
});

boton2.addEventListener('click', () => {
    let arrayLength = document.querySelector('#vector');
    let nuevoDiv = document.createElement('div');
    let textNode = document.createTextNode(crearNuevoVector(arrayLength.value));
    nuevoDiv.appendChild(textNode);
    let section = document.getElementById('section2');
    section.appendChild(nuevoDiv);

    arrayLength.value = null;
    arrayLength.focus();
});

function nuevoSueldo(sueldo) {
    sueldo = parseInt(sueldo);
    let aumento = null;
    if(sueldo <= 1000){
        aumento = .15;
    }
    else if(sueldo > 1000 && sueldo <= 1200)
    {
        aumento = .12;
    }
    else if(sueldo > 1200 && sueldo <= 1400)
    {
        aumento = .10;
    }
    else if(sueldo > 1400 && sueldo <= 1500)
    {
        aumento = .8;
    }
    else if(sueldo > 1500)
    {
        aumento = .5;
    }

    let newSueldo = sueldo * aumento;
    return newSueldo + sueldo;
}
function crearNuevoVector(tamano) {
    let nuevoVector = [];
    let contador = 2;
    for(let i = 0; i < tamano; i++){ 
        nuevoVector.push(contador);
        contador = contador + 2;
    }
    
    nuevoVector.unshift(nuevoVector.pop());
    return nuevoVector.join(" ");
}
