const numbersApp = function() {

    let input = document.querySelector('input'),
        button = document.querySelector('.button'),
        type = document.querySelector('[name="type"]');

    const addFact = async function(inputNumber, type) {

        let url = 'https://numbersapi.p.rapidapi.com/',
            parm = `/${type}?fragment=true&notfound=floor&json=true`;


        await fetch(url + inputNumber + parm, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "numbersapi.p.rapidapi.com",
                "x-rapidapi-key": "e26eac3dbdmsh8ece33b78595494p1c3bf9jsn4c578a9c4cb6"
            }
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            createElements(result.number, result.text);
        });
    };

    const createElements = function(number, result) {
        let facts = document.querySelector('.facts'),
            factsP = document.querySelector('.facts p'),
            factsItem = document.createElement('div');

        factsItem.innerHTML = number + ' is ' + result;
        factsItem.classList.add('facts_item');
        factsP.style.marginBottom = '10px';
        facts.appendChild(factsItem);
    };
    
    button.addEventListener('click', function() {
        let notNumber = /\D/g;
            
        if (input.value !== '' && !notNumber.test(input.value)) {
            addFact(input.value, type.value);  
            input.value = ''; 
        }
    });  

    input.addEventListener('keyup', function(event) {
        let notNumber = /\D/g;
            
        if (event.keyCode == 13 && input.value !== '' && !notNumber.test(input.value)) {
            addFact(input.value, type.value); 
            input.value = ''; 
        }
    }); 

};

window.addEventListener('load', numbersApp);