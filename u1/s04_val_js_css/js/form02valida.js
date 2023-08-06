const fnValidar02 = () => {
    let xPreferencia = document.getElementById("lstPreferencias").value;
	if (xPreferencia == "" || /^\s+$/.test(xPreferencia) ) {
		alert("Falta seleccionar PREFERENCIA...");
		return false;
	}
	//alert(xTexto);
	let xMes = document.getElementById("lstMes").value;
	if(xMes==""){
		alert("Falta seleccionar mes actual...");
		return false;
	}
	
	//Si todo va bien
	return true;
}
	
