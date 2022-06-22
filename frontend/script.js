console.log('hello világ');

function loadEvent() {
    console.log('loaded');  

    document.getElementById('root').innerHTML='Sziasztok!'
    console.dir(document.getElementById('root'))
    console.dir(document.querySelector('#root'))
}

window.addEventListener('load',loadEvent)

