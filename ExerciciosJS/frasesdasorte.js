
                function calcular(){
                    var myArray = ['Hoje sera seu dia de sorte!', 'Busque o maior profundo amor.', 'Nao perca seu tempo com exercicios dificeis', 'Um dia a faculdade acaba', 'Vai na fe que a derrota e certa!', 'O tempo esta bom la fora', 'Cada dia fica mais dificl, acaba logo!','Amanha vai ser melhor!'];
                    var rand = myArray[Math.floor(Math.random() * myArray.length)];
                    document.getElementById("resposta").textContent = rand;
                }             
