//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 17;
const maiorDeIdade = idade > 18;
if(maiorDeIdade){
   console.log("Pode entrar nesse brinquedo,se divirta !!")
}else {
   console.log("Não pode entrar , Vá em outro brinquedo");
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let idade2 = 19;
let ingresso = false;

if((idade2 >= 18) && (ingresso === true)){
    console.log("você é maior de idade e estar com o ingresso ,pode entrar")
}else{
    console.log("infelizmente você não vai poder entrar no evento")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let mesAniversario = "Janeiro"

if((mesAniversario === "Janeiro") || (mesAniversario === "Dezembro") ){
    console.log("Você faz Aniversário esse mês !!! ")
}else{
    console.log("Seu aniversário não é esse mês !!!")
}


//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nome = "Raniel";

 if(nome[0] == "R"){
     console.log("Seu nome começa com R")
 }

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let sobreNome = "Bernard";
let nome2 = "rick";

if((sobreNome.length > 6) || (nome2[0] == "E")){
    console.log("Encotrado na lista de Matricula")
}else{
    console.log("Desculpe , não consegui te encontrar ...")
}


