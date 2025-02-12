function j(){
    console.log('j');
    return 5;
}

function t(){
    console.log('t');

    console.log(valor);
    
}

t(valor = j());

console.log('-----------------')
function f(fn){
    console.log('f');
    fn(1000);
};

f((num) =>{
    console.log('anonimo =>', num)
});

// f(function(num){
//     console.log('anonimo =>', num)
// });



console.log('-----------------')

function then(fn){
    const namefn = { name: 'Lucas' };
    console.log(fn);
    fn(namefn);
}

then((name) =>{
    console.log('Finalizou');
    console.log(name);
});


// console.log('-----------------')

// then(handleResponse);

// console.log(handleResponse);

// function handleResponse(response){
//     console.log('Finalizou =>', response)
// }