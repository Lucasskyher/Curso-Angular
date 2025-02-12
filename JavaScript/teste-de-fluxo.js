const segunda = ()=>{
    console.log('segunda');

    setTimeout(function timeout2(){
        console.log('timeout2');
    }, 2000)
}

const primeira = ()=>{
    console.log('primeira');

    setTimeout(function timeout1(){
        console.log('timeout 1');
    }, 1000);

    segunda();
}

primeira();