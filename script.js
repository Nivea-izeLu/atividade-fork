let n = Number(prompt("Digite um número para descobrir os seus multiplos de 4:"));
let resultado = "";
for (i=1; i<=n; i++){
if (i%4 == 0){
    resultado += "<strong>"+i+". </strong>";
}    
}

document.getElementById("resultado").innerHTML = "Entre 1 e "+n+" os números múltiplos de 4 são:<br>"+ resultado;
