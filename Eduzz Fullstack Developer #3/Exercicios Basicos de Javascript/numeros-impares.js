/*Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X se for o caso.

Entrada
A entrada será um valor inteiro positivo.

Saída
A saída será uma sequência de seis números ímpares.*/

let lines = gets().split("\n");

let num = parseInt(lines.shift());



for (let i=0; i < 6; i++) {
 
      let init = num % 2 === 0 ? num + 1 : num;
      console.log(init +i*2);

}