console.log('hello világ');

function loadEvent() {
    console.log('loaded');  

    document.getElementById('root').innerHTML='Sziasztok!'
}

window.addEventListener('load',loadEvent)

