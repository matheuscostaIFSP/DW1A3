        
            


            function resetFunc() {
                chk3.checked = false;
                chk2.checked = false;
                chk1.checked = false;
                document.getElementById("txtNome").value = "";
            }

            function countchars(){
            
            var len = document.getElementById("txtNome").value.length;
            var lenleft = 140 - len;
            document.getElementById("charleft").textContent = lenleft+" characters left";
           
           }

            

        