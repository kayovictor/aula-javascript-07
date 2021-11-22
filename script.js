//atividade 01 28/09/2021
//01
var cidadesPe = ['Recife', 'Olinda', 'Jaboatão', 'Caruaru', 'Paulista', 'Igarassu', 'Gravatá']
var ordenarInvertida = cidadesPe.reverse();
console.log(ordenarInvertida);
var adicionarMaisDuasCidades = cidadesPe.splice(8, 2, 'Moreno', 'Palmares');
console.log(cidadesPe);

//02
var numeros = [1,4,8,6,9,2,6,7,3,0,5]
console.log(numeros[9]);

//atividade 02 
//01 
var palavras01 = 'Apredendo ';
var palavras = 'strings em JavaScript';
console.log(palavras01 + palavras);

//02
var palavra1 = 'palavra1';
var palavra2 = 'palavra2';
var palavra3 = 'palavra3';
let frase1 = 'Esta é a frase com a ';
let frase2 = 'Esta é a frase com a ';
let frase3 = 'Esta é a frase com a ';
console.log(frase1.concat(palavra1));
console.log(frase2 + palavra2);
console.log(frase3.concat(palavra3));

//03
let vetor = ['a', 'b', 'a', 'a', 'c', 'b']
let ordemCrescente = vetor.sort();
console.log(ordemCrescente);
let ordemInversa = ordemCrescente.reverse();
console.log(ordemInversa);

//atividade 03
//01
let frase = 'Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.';
console.log(frase.length);
let fraseTudoGrande = frase.toUpperCase();
console.log(fraseTudoGrande);
//O número de vogais da string.
let fraseTudoNormal = fraseTudoGrande.toLowerCase();
console.log(fraseTudoNormal);
let EncontrarUmaPalavra = frase.indexOf('humanidade')
console.log(EncontrarUmaPalavra);

//02
function numero(){
  for(let i = 0; i <=100; i++){
    if(i % 2 == 0){
      let array = [i];
      let string = array.toString();
      console.log(string);
    }
  }
}