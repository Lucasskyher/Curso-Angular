//////////////////// string //////////////////// 
let minhaString: string = "Olá, mundo!";
console.log(typeof minhaString); //string

let minhaString2 = new String("Olá, mundo!");
console.log(typeof minhaString2); //object (para todos (number,etc))

//////////////////// number //////////////////// 
let meuNumero: number = 42;
console.log(typeof meuNumero); //number

let meuNumero2 = 100;
console.log(typeof meuNumero2); //number

//////////////////// boolean //////////////////// 
let meuBooleano: boolean = true;

//////////////////// array //////////////////// 
console.log('\n //////////////////// array //////////////////// \n');
let meuArray: string[] = ['', '', '']; //pode conter apenas string
let meuArray2: number[] = [1, 2, 3]; //apenas numeros
let meuArray3: boolean[] = [true, false, true]; //apenas boolean
let meuArray4: any[] = ['', 1, true, {}]; //qualquer tipo

let meuArrayex: Array<any> = ['', 1, true, {}];
console.log(meuArrayex);
console.log(typeof meuArrayex); //object
console.log(Array.isArray(meuArrayex)); //true = é um array

//////////////////// string //////////////////// 
console.log('\n//////////////////// string //////////////////// \n');
let meuAny: any; //evitar utilizar (dificil identificar em um codigo)
meuAny = 'string';
meuAny = false;
meuAny = 100;
console.log(typeof meuAny); //number (problema)

//ou
let meuAny2;

//////////////////// identificar tipos ////////////////////
console.log('\n //////////////////// identificar tipos //////////////////// \n');
function minhaFuncao(parametro: any) {
    if (Array.isArray(parametro)) {
        console.log("O parâmetro é um array!")
    } else if (typeof parametro === "object") {
        console.log("O parametro é um objeto!");
    } else {
        console.log("O parâmetro não é um objeto!")
    }
}

minhaFuncao(300); //O parâmetro não é um objeto!
