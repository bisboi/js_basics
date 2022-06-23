console.log('hello világ');

let x ='változó vagyok'

console.log(x);

x = "megváltoztam";

 console.log(x); 

const obj = {
    "kulcs":"ertek",
    kulcs2 : 132,
    boolivan : true,
    kulcs4: "123",
    tomb: ['lara croft', 'indiana jones']
}

const arr = [
    'string',
    123,
    true,
    '234'

]
   //rootElement.innerHTML='Sziasztok!'
    //console.dir(document.getElementById('root'))
    //console.dir(document.querySelector('#root'))
    
    //rootElement.innerHTML+='Ciao'
function loadEvent() {

    let rootElement=document.getElementById('root');

    rootElement.insertAdjacentHTML('beforeend',`
        <h1>${arr}</h1>
    `);
}
window.addEventListener('load',loadEvent);