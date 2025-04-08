function busquedalineal(arr,elemento){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===elemento){
            return i;
        }
    }
    return -1;
}

const arreglo=[10,2,3,8,4,9,7];
const elementobuscado=7;
const indice= busquedalineal(arreglo,elementobuscado);
console.log(`El elemento ${elementobuscado} se encuentra en el indice ${indice}`)