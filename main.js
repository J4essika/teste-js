function executar(ev) {
	// http://stackoverflow.com/questions/7763327/how-to-calculate-date-difference-in-javascript
	var dia = prompt("Digite o dia de nascimento");
	var mes = prompt("Digite o mes de nascimento");
	var ano = prompt("Digite o ano de nascimento");

	var dataNascimento = new Date(0 + ano, 0 + mes - 1, 0 + dia);
	var hoje = new Date();
	var intervalo = hoje - dataNascimento;

	var dias = parseInt((hoje - intervalo) / (24 * 3600 * 1000));

	var d1Y = dataNascimento.getFullYear();
	var d2Y = hoje.getFullYear();
	var d1M = dataNascimento.getMonth();
	var d2M = hoje.getMonth();

	var meses = (d2M+12*d2Y)-(d1M+12*d1Y);
	var anos = hoje.getFullYear()-dataNascimento.getFullYear();
	alert ("" + dias + ", " + meses + ", " + anos);
}


























}