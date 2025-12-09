// Pedir três valores
let numero= Number(prompt("Digite um  numero de 1 a 3 para selecionar uma das opções:"));

if( numero === 1 ){
    alert ("vc escolheu a primeira opção, vamos calcular a media dos pesos de 5 pessoas ")
}
if( numero === 2){
    alert("vc escolheu a segunda opção, vamos cirar uma calculo   ")
} if( numero === 3){
    alert("vc escolheu a terceira opção, vou contar os numros negativos q vc digitar  ")
}


 if(numero===1){
let peso1 = Number(prompt("digite o peso da 1° pessoa"))
let peso2 = Number(prompt("digite o peso da 2° pessoa"))// que foi? escreve
let peso3 =  Number(prompt("digite o peso da 3° pessoa"))
let peso4 =  Number(prompt("digite o peso da 4° pessoa"))
let peso5 =  Number(prompt("digite o pesoa da 5° pessoa")) // qual é opcao 4 nao tem, vc vai hospedar o Git hub pages, mais simples (=

const soma = peso1 + peso2 + peso3 +peso4 + peso5

const media = soma / 5

alert('a media dos peso é  ' +media)
 }


 if(numero === 2) {

    const numero1 =  Number(prompt("digite o primeiro numero para o nosso calculo matematico: "));
const numero2 =  Number(prompt("digite o segundo numero para o nosso calculo matematico: "));
const sinal = (prompt("digite o simbolo matematico que deseja usar no calculo exemplo (+,-,*,/): "));

let resultado;

if(sinal === "+"){
    resultado= (numero1 + numero2)
}
else if (sinal === "-"){
    resultado =(numero1 - numero2)
}
else if(sinal === "/"){
    resultado = (numero1 / numero2)
}
else if (sinal ==="*"){
    resultado = (numero1 * numero2 )
}
else{ alert("operaçao invalida")
}
 

if(resultado){
alert( "o resultado  da operçao   "+numero1+"  "+sinal+"   "+numero2+"  é igual a  "+resultado  );
}

}



if(numero===3){

let negativos = 0;
let positivos = 0;
let pares = 0;
let multiplos7 = 0;

for (let i = 1; i <= 10; i++) {
    let n = Number(prompt("Digite o " + i + "°  numero  que pode ser negativo ou nao a sua escolha :"));

    if (n < 0) {
        negativos++;
    } 
}

alert(
    "Números negativos: " + negativos 
   
);}

    
