var agom=11;

function amongu() {
    var ip=54;
    return ip;
}

if(10>0) {
    console.log('verdadeiro');

}else{
    console.log('falso');
}

console.log(amongu());
console.log(agom);

// usando array map
const numeros= [1, 2, 3, 4, 5];
const dobrados= numeros.map(numero=> numero*2);
console.log(dobrados);

//usando ForEach
let notas= [8, 9, 7];
notas.forEach((nota, index, array) => array[index] = nota + 1);
console.log(notas);