
/*
Abaixo de 17  Muito abaixo do peso
Entre 17 e 18,49 Abaixo do peso
Entre 18,5 e 24,99 Peso normal
Entre 25 a 29,99 Acima do peso
 */

// peso / (altura*altura);

var peso;
var altura;
var IMC; 
var resultado;

function calcular(event) {
    event.preventDefault();

    peso = document.getElementById('peso').value;
   altura = document.getElementById('altura').value;
   
   IMC = peso / (altura*altura);

   resultado = document.getElementById('resultado');

if(IMC < 17){
    resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/> Cuidado você está muto abaixo do peso!'
}else if (IMC >17 && IMC <= 18.49){
    resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/> Cuidado você abaixo do peso!'
}else if (IMC >= 18.5 && IMC < 24.99){
    resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/> Você está no peso ideal!'
}else if (IMC > 25 && IMC <= 29.99){

    resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/> Cuidado você está acima do peso!'
}else if (IMC >= 30){
    resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/> Cuidado obesidade!'
}

    document.getElementById('peso').value = "";             //limpa a caixinha que o usuário digitou o peso
    document.getElementById('altura').value = "";           //limpa a caixinha que o usuário digitou a altura

}