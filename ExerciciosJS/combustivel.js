
function calcular(){
    var gas = parseFloat(document.getElementById("gasolina").value);
    var alc = parseFloat(document.getElementById("alcool").value);
    var equiv = gas*(0.7);
    if (alc<=equiv){
        document.getElementById("resposta").textContent = "Alcool eh mais viavel";
    }
    else {
        document.getElementById("resposta").textContent = "Gasolina eh mais viavel";
    }
} 


