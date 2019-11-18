
function calcular(){
    var vlrA = parseFloat(document.querySelector("#valorA").value);
    document.querySelector("#valorB").value = vlrA*9/5 +32;
} 

// Função para adicionar uma espera de evento em t
function load() { 
    var el = parseFloat(document.getElementById("valorB").value);
    el = (el - 32)*5/9;
    el.addEventListener("celsius", modifyText); 
  } 
  
  document.addEventListener("DOMContentLoaded", load, false);
