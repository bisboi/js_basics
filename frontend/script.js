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
    tomb: ['lara croft', 'indiana jones'],
    obivan: { 
        key1: 'word',
        key2: 951,
        key3: ['luke', 'vegtelen']
    }
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

    function countryComponent(country) { 
        console.log(country)
        return`
        <div class="country">
            ${country.name.common}
        </div>
        
        `
    }

    async function loadEvent() {

    let rootElement=document.getElementById('root');

    /*rootElement.insertAdjacentHTML('beforeend',countryComponent()`
        <h1>${arr}</h1>
    `);*/

    //for (let index = 5; index <= 10; index++) {
      //  console.log('the current value of index is: ', index);
        /*rootElement.insertAdjacentHTML('beforeend',countryComponent());
        
    }
*/
    const countries = await fetch('https://restcountries.com/v3.1/all');
    //console.log(countries);
    const countriesJson =  await countries.json();
    //console.log(countriesJson);
    
    for (let index = 0; index < 10; index++) {
        //console.log(countriesJson[index].name.common);
        rootElement.insertAdjacentHTML('beforeend',countryComponent(countriesJson[index]));
    }
}

window.addEventListener('load',loadEvent);