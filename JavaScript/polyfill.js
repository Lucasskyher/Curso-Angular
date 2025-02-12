// Array.prototype.filter = undefined; Garantir que não existe
if (typeof Array.prototype.filterArray !== "function") {
    Array.prototype.filter = function (fn, thisp) {
        if (this === null) throw new TypeError;
        if (typeof fn !== "function") throw new TypeError;
        var result = [];
        for (var i = 0; i < this.length; i++) {
            if (i in this) {
                var val = this[i];
                if (fn.call(thisp, val, i, this)) {
                    result.push(val);
                }
            }
        }
        return result;
    };
}

// thisp = e > 3
// val = valor no array
// i = posição do valor no array
// this = array
// fn = e => e > 3 (callback)

// Uso de .filter                     
const result = [1, 2, 3, 4, 5].filter(e => e > 3);

console.log(result);

//iteração

[1, 2, 3].filter((val,index, thisObj) => {
    console.log('---------------------------');
    console.log('val', val);
    console.log('index', index);
    console.log('thisObj', thisObj);
    return val > 3
});

//atribuir algo para o thisp fora da função filter
[1, 2, 3].filter(function(val){
    console.log('val', val);
    console.log('this', this.nome);
    return val > 1
}, {nome: 'Lucas'});






