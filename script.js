		/*var numero1 = prompt ("Insira o primeiro número: ")
		var numero2 = prompt ("Insira o segundo número: ")*/
 
		function soma (numero1, numero2){

			var resultado = 0; 
      
			resultado = numero1 + numero2;
 
			return resultado;
 
		}
		var ResultadoSoma = soma (parseFloat(numero1) , parseFloat(numero2))
		
		alert('O resultado da soma é igual a: ' + ResultadoSoma);
		
		function Valida(){
			var NossoDia = document.getElementById("NossoDia").value;
			var SeuPresente = document.getElementById("SeuPresente").value;
			var SeuPresenteNamorados = document.getElementById("SeuPresenteNamorados").value;
			var Meses = document.getElementById("Meses").value;
		
			if ( NossoDia== 23 && SeuPresente == "Buquê" && SeuPresenteNamorados == "Aliança" && Meses == 06){
				document.getElementById("Content").style.display='block';
				document.getElementById("Body").style.backgroundImage = ("Sorriso.jpg");
				document.getElementById("Body").style.backgroundColor = '#333';
				document.getElementById("Pergunta").style.display = 'none';
				alert("Resposta Correta. Seja bem-vinda ao seu presente de 6 meses. Te amo.")
			}
			else if(NossoDia != 23){
				 alert("Nosso Dia errado.");
			}
			else if(SeuPresente != Buquê){
				alert("Seu Presente errado.")
		 }
		 else if(SeuPresenteNamorados != Aliança){
			alert("Seu Presente de Dia dos Namorados errado.")
	 }
	 else if(Meses != 06){
		alert("Meses errado")
 }
			else {
				alert ('Resposta Incorreta, tente novamente.');
			}
		}