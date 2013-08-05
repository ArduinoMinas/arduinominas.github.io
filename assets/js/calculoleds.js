<!--
var vs = 12;
var iif = 20;
var vf = 2.7;
var rs = (vs - vf)/iif;

color_vf = {
	infrared: 1.2, 
	red: 1.8,
	ambar: 2.0,
	yellow: 2.2,
	green: 3.5,
	blue: 3.6,
	white: 4.0
}

colors_text = {
	infrared: "Infra Vermelho",
	red: "Vermelho",
	ambar: "Laranjado",
	yellow: "Amarelo",
	green: "Verde",
	blue: "Azul",
	white: "Branco"
}

var changecolor = function(color){
	vs  = $('#Vs_Text').val();
	vf  = color_vf[color];
	iif = $('#If_Text').val();
	
	rs  = (vs - vf)/(iif/1000);
	
	rs  = SerieNearValue(rs);
	
	$('#led').attr('src','/simulador/calculoleds/images/led_'+color+'.gif');
	$('#Vf_Text').val(vf);
	$('#Rs_Text').val(rs);
}
 
//-->