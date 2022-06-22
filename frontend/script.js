console.log('hello világ');

function loadEvent() {
    console.log('loaded');  

let rootElement=document.getElementById('root')

   rootElement.innerHTML='Sziasztok!'
    //console.dir(document.getElementById('root'))
    //console.dir(document.querySelector('#root'))
    
    rootElement.innerHTML+='Ciao'

rootElement.insertAdjacentElementHTML('beforeend', 
<h1>This is the title</h1>)
}

window.addEventListener('load',loadEvent)

