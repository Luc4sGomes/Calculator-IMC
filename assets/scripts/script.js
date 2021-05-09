//catch the event of submit of form;

const form = document.querySelector('#form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    
    const inputWeight = event.target.querySelector('#weight');
    const inputHeight = event.target.querySelector('#height');

    

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if(!weight){
        setResult('Weight invalid',false);
        return;
    }

    if(!height){
        setResult('Height invalid',false);
        return;
    }

    const imc = getImc(weight,height);

    console.log(imc);

});

    function getImc(weight,height) {
        const imc = weight / height ** 2;
        return imc.toFixed(2);
    }
        
    

function createP(){
    const p = document.createElement('p');    
    return p;
}

function setResult(msg, isValid){
    const result = document.querySelector('#result');
    result.innerHTML = '';


    const p = createP();
    p.innerHTML = msg;
    result.appendChild(p);

    
}

