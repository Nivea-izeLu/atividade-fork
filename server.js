 function frase(){
        nome = document.getElementById("nome").value;
        proce = document.getElementById("procedi").value;
        prof = document.getElementById("prof").value;
        dia = document.getElementById("dia").value;
        hora = document.getElementById("hora").value;

        document.getElementById("resultado").innerHTML = "Olá "+nome+", Nossa sessão as "+hora+ " no dia "+dia+ " para fazer " +proce+ " com o profissional "+prof+" está marcada!!"
    };