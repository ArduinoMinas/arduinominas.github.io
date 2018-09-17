---
layout: page
title: Calculadora para Transformadores
---

<script language="JavaScript"> 
<!-- 

function calcula() {

     Vp=parseFloat(calcForm.Vpx.value);
     Vs=parseFloat(calcForm.Vsx.value);
     Is=parseFloat(calcForm.Isx.value);
     F=parseFloat(calcForm.Fx.value);

     if (Vp<0.001) {
       alert("Valor incorreto. Favor revisar a tensão de primário!!");
     }
     if (Vs<0.001) {
       alert("Valor incorreto. Favor revisar a tensão de secundário!");
     }
     if (F<1) {
       alert("Valor incorreto. Favor revisar a frequencia de operação!");
     }
     if (F>121) {
       alert("Valor incorreto. Favor revisar a frequencia de operação!");
     }     
     if (Is<0.001) {
       alert("Valor incorreto. Favor revisar corrente de secundário!");
     }

     Np=0;
     Ns=0;
     Fiop=0;
     Fios=0
     Ip=0;
     S=0;
     
     Ps=Vs*Is;
     Pp=1.15*Ps
     S=Math.sqrt(Pp/0.73);
     Np=2815.315*Vp/(F*S);
     k=Np/Vp;
     Ns=1.1*k*Vs;
     Ip=Pp/Vp;
     Fiop=Ip/2.0;
     Fios=Is/2.0;

     Awgp=17.15576-4.312466032*Math.log(Fiop)
     Awgs=17.15576-4.312466032*Math.log(Fios)     
          
     document.calcForm.Npx.value=Math.round(Np+0.1);
     document.calcForm.Fiopx.value=Math.round(Fiop*100.0)/100.0;
     document.calcForm.Nsx.value=Math.round(Ns+0.1);
     document.calcForm.Fiosx.value=Math.round(Fios*100.0)/100.0;
     document.calcForm.Axx.value=Math.round(S*1000.0)/1000.0;
     document.calcForm.Ipx.value=Math.round(Ip*10000.0)/10000.0;
     
     document.calcForm.Fiopxx.value=Math.round(Fiop*100.0)/100.0;
     document.calcForm.Fiosxx.value=Math.round(Fios*100.0)/100.0;           
     document.calcForm.Awgpx.value=Math.round(Awgp);
     document.calcForm.Awgsx.value=Math.round(Awgs);

}


// -->
</script>
<style>
input {
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    display: inline-block;
    background-color: white;
    cursor: text;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
    box-sizing: inherit;
    font: 400 13.3333px Arial;
    font-family: sans-serif;
    /* font-size: 100%; */
    /* line-height: inherit; */
    /* line-height: 1.15; */
    margin: 0em;
    margin: 0;
    overflow: visible;
    padding: 1px;
    padding: 1px 0px;
    text-rendering: auto;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    touch-action: manipulation;
    -webkit-writing-mode: horizontal-tb !important;
    -webkit-appearance: textfield;
    -webkit-rtl-ordering: logical;
    -webkit-box-sizing: inherit;
    -ms-touch-action: manipulation;
    }
</style>
<center>

<form name="calcForm">

<table border="0" width="700">

<tbody><tr align="left" valign="top">

<td align="left" valign="top" width="230">
<img src="/assets/images/transformadores/transf01.gif" alt="Transformador" height="304" width="206" border="0" vspace="0" hspace="0" align="left">
</td>

<td align="right" valign="top" width="425">
<font color="#0000AA">Parâmetros do projeto:</font><br/>
&nbsp;&nbsp;&nbsp;Tensão de primário&nbsp;=&nbsp;
<input type="text" name="Vpx" size="6" value="110" maxlength="6"><br>
Tensão de secundário&nbsp;=&nbsp;<input type="text" name="Vsx" size="6" value="12" maxlength="6"><br>
Corrente de secundário&nbsp;=&nbsp;<input type="text" name="Isx" size="6" value="1" maxlength="6"><br>
Freqüência de operação&nbsp;=&nbsp;<input type="text" name="Fx" size="4" value="60" maxlength="4"><br>

<font size="-2">&nbsp;<br></font>

<font color="#0000AA">Valores calculados:</font>&nbsp;&nbsp;
(<font size="-1">valores aproximados para referencia</font>)<br>
<font size="-2">&nbsp;<br></font>
Nº&nbsp;espiras&nbsp;primário=<input type="text" name="Npx" size="5" maxlength="5"><br />
Seção&nbsp;do&nbsp;fio&nbsp;primário=<input type="text" name="Fiopx" size="4" maxlength="4">
<font size="-1">mm²</font><br>
Nº&nbsp;espiras&nbsp;secundário=<input type="text" name="Nsx" size="5" maxlength="5">&nbsp;
Seção&nbsp;do&nbsp;fio&nbsp;secundário=<input type="text" name="Fiosx" size="4" maxlength="4">
<font size="-1">mm²</font><br>
Área&nbsp;do&nbsp;núcleo=<input type="text" name="Axx" size="8" maxlength="8">
<font size="-1">cm²</font><br>
Corrente&nbsp;de&nbsp;primário=<input type="text" name="Ipx" size="9" maxlength="9">
<font size="-1">A</font><br>

<font color="#0000AA">Equivalências p/ cabos elétricos:</font><br />
<input type="text" name="Fiopxx" size="4" maxlength="4"><font size="-1">mm²&nbsp;</font>
=&nbsp;<input type="text" name="Awgpx" size="3" maxlength="3">&nbsp;<font size="-1">AWG</font><br>
<input type="text" name="Fiosxx" size="4" maxlength="4"><font size="-1">mm²&nbsp;</font>
=&nbsp;<input type="text" name="Awgsx" size="3" maxlength="3">&nbsp;<font size="-1">AWG</font><br>

<font color="#0000AA" size="-1">(*) Nota:</font><font size="-1">&nbsp;Perda de potência 
assumida arbitrariamente como 15%.</font><br>
<font size="-2">&nbsp;<br></font>

</td>

<td align="right" valign="top" width="45">
(<font size="+1">V</font>ca)<br>(<font size="+1">V</font>ca)<br>
(<font size="+1">A</font>)<br>(<font size="+1">H</font>z)<br>
</td>

</tr></tbody></table>

<table border="0" width="600"><tbody><tr align="center">
<td align="center" valign="top" width="600"><center><br>
<input type="button" value="Calcular" onclick="calcula()">&nbsp;
&nbsp;<input type="reset" value="Limpar">
</center></td></tr></tbody></table>

</form>

</center>