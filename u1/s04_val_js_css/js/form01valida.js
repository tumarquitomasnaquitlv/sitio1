const fnValidar01 = () => {
	let xTexto = document.getElementById("txtTexto").value;
	if (xTexto == "" || /^\s+$/.test(xTexto) ) {
		alert("Falta texto");
		return false;
	}
	//alert(xTexto);
	let xNumero = document.getElementById("txtNumero").value;
	if(xNumero==""){
		alert("Falta NUMERO...");
		return false;
	}
	
	//Si todo va bien
	return true;
}