var data = new Date();
		var hora = data.getHours();
		if (hora<12)
			document.write("Bom dia.");
		else
			if (hora>=12 && hora<18)
				document.write("Boa tarde.");
			else
				document.write("Boa Noite.");

var altura = window.innerHeight;
		var largura = window.innerWidth;
		document.write("\nA altura é: "+altura);
		document.write("\ne a largura é: "+largura+".");