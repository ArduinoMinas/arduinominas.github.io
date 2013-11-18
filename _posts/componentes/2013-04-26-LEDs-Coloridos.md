---
layout: article
title: LEDs Coloridos
tags: [Arduino, Uno, LilyPad, Componente, LED, Diodo, Colorido]
categories: [Componentes, LEDs]
excerpt: Não há na Eletrônica quem não tenha trabalhado com LEDs, pelo menos 9 em 10 circuitos usam pelo menos um LED para algum tipo de sinalização, e predominancia é da cor vermelha, porém há alguma diferença a ser observado no trato das demais cores ou intencidade de brilho. 
author: Carlos Delfino (consultoria@carlosdelfino.eti.br)
---
<div class="imageBox" id="right">
<a rel="lightbox" title="Bordado com LilyPad" href="/images/componentes/LEDs/calculo.jpg">
<img src="/images/componentes/LEDs/calculo-thumb.jpg" width="300" height="350" />
</a>
</div>
Muitas vezes pensamos que o que define a cor de um LED é seu involucro plástico, o que é um engano, este é apenas
uma forma de facilitar sua identificação e causar uma melhor distribuição da luminosidade. Podemos ver LEDs com 
invólucros transparentes porém que emitem luz em cores especificas ou seja em comprimentos de onda adequados a 
visão daquela cor, há também involucros que podem vir a difundir mais a luz ou nã, tendo uma pequena lente na ponta 
ou que tenha a ponta chanfradas ou seja achatada. Isto não impacta no projeto elétrico do circuito.

Não importa a cor utilizada o calculo para se usar um LED qualquer em seu circuito é sempre o mesmo, todos terão
a resistencia obtido pela a diferença da tensão de fuga em relação a tensão de entrada, dividido pela corrente de 
fuga como mostra imagem ao lado.

Porém, devido a composição da junção de cada LED usada para se obter cores e brilhos diferenciados, causa uma tensão 
de fuga diferente, mesmo a corrente sendo a mesma para cada um, devendo ser respeitado o limite de 20mA 
para os LEDs de uso comum, não estaremos considerando aqui LEDs de alta potência como os usados em sistemas de 
Iluminação Comercial, Residencial e Automátivo, e nem mesmo os de alto brilho usado em Flahs e Iluminação para 
fotografia.

<div class="imageBox" id="left">
<a rel="lightbox" title="Bordado com LilyPad" href="/images/componentes/LEDs/Valores_Tipicos.jpg">
<img src="/images/componentes/LEDs/Valores_Tipicos-thumb.jpg" width="300" height="192" />
</a>
</div>
Diferente dos diodos de sinal e zener ou mesmo os diodos sensíveis a luz, os diodos emissores de luz ou LED
são construidos com os mais exóticos componentes químicos, alguns listados abaixo, já na tabela ao lado, apresento
em um formato mais alegório as cores obtidas, seu comprimento de onda e sua tenção padrão. Porém não há como 
definir uma tabela válida para qualquer LED de qualquer fabricante, já que a tensão de fuga vária conforme o
nível de dopagem da junção PN, que pode diferenciar de um fabricante para outro, causando também pequenas
diferenças nas tonalidades. Considerando tal fato podemos também váriar a corrente entre 5mA e um máximo 30mA para
se conseguir um maior ou meno brilho.

 * Gálio Arsénio (GaAs) <br />
   infra-vermelho
 * Gálio Arsénio Fósforo (GaAsP) <br />
   Vermelho ao infra-vermelho, laranja
 * Aluminio Gálio Arsénio Fósforo (AlGaAsP) <br />
   Vermelho de alto, laranjado avermelhado, laranja, e amarelo
 * Gálio Fósforo (GaP) <br />
   Vermelho, amarelo, verde
 * Aluminio Gálio Fósforo (AlGaP) <br />
   Verde
 * Gálio Nitrogênio (GaN) <br />
   Verde, verde esmeralda
 * Gálio Indio Nitrogênio (GaInN) <br />
   próximo ao ultraviolet, verde azulado e azul
 * Silicone Carbono (SiC) <br />
   Azul como Substrato
 * Zinco Selenio (ZnSe) <br />
   Azul
 * Aluminium Gallium Nitride (AlGaN) <br />
   Ultraviolet

Uma outra forma de se obter a variação no brilho do LED é aplicar a tensão através de pulsos, forma conhecida como 
PWM.

Um fator muito interessante que pode impactar a escolha da cor do LED é a influência da emissão de luz não visível
que ocorre pelo fato da composição Gálio + Arsénio utilizada nos LEDs de cores Vermelho ao Amarelo, passando pelo 
laranja e suas váriações de tom, a composição Gálio + Arsénio (GaAs) é forte emissora de luz infravermelho
influenciando portanto a composição dos LEDs que há utilizão, devendo assim considerar se tais LEDs devem ser 
utilizados em ambientes impactádos pela luz infravermelha.

<hr />
Referência: http://www.electronics-tutorials.ws/diode/diode_8.html