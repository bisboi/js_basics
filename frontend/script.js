console.log('hello világ');

function loadEvent() {
    console.log('loaded');  

    let rootElement=document.getElementById('root')
}

console.log(x);

x = "megváltoztam"

 console.log(x) 

const obj = {
    "kulcs":"ertek",
    kulcs2 : 132,
    boolivan : true,
    kulcs4: "123"
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

    let rootElement.insertAdjacentHTML('root');
    rootElement.insertAdjacentHTML('beforeend',`
    <h1>${arr}</h1>
    `);
}
window.addEventListener('load',loadEvent);