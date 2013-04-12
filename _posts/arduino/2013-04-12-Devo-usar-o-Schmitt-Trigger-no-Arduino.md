---
layout: article
title: Devo usar o Schmitt-Trigger?
tags: [IO, Ports, Schmitt-Trigger, Proteção]
categories: [Arduino, ATMega, Portas]
excerpt: Sempre quando falamos de usar um interruptor com controladores, principalmente do tipo balança ou de origem de baixa qualidade, ficamos preocupados com os ruidos provocados. Vejamos neste artigo como evitar tal problema nas portas de entrada do Arduino e ATMegas
author: Carlos Delfino {consultoria@carlosdelfino.eti.br}
---
<div class="imageBox" id="right">
<a rel="lightbox" title="Filtro RC" href="/images/io-ports/RC-filtro-ruido.jpg">
<img src="/images/io-ports/RC-filtro-ruido-thumb.jpg"  height="170" />
</a>
</div>

Indo direto ao assunto, o problema de ruído nas portas de IO podem ser resolvidos muitas vezes apenas colocando um 
capacitor de 100uF em conjunto com um resistor como no circuito ao lado, ou em casos mais avançados usando um 
circuito do Tipo Schmitt-Trigger.

### Mas o que é este tal de Schmitt-Trigger?

<div class="imageBox" id="left">
<a rel="lightbox" title="Circuito Schmitt-Trigger" href="/images/io-ports/circuito-schmitt.gif">
<img src="/images/io-ports/circuito-schmitt.gif" height="140" />
</a>
</div>

O Schmitt-Trigger é um tipo de circuito que mantem seu valor de saida após a entrada atingir um certo nível de 
tensão, dai vem seu nome Trigger, mas ele tem uma caracteristica extra que é chamada de Hysterese, que 
intensionalmente é adicionado de forma a gerar um certo retardo em sua reação, evitando assim que ruidos 
provoquem o chaveamento do estado da saida.

<div class="imageBox" id="right">
<a rel="lightbox" title="Níveis no Schmitt-Trigger" href="/images/io-ports/schmitt_trigger_levels.png">
<img src="/images/io-ports/schmitt_trigger_levels.png" height="200" />
</a>
</div>
Veja o gráfico ao lado, no primeiro gráfico é apresentado o sinal de entrada, onde há um valor máximo e mínimo
em nosso caso será 0 e 5V que é a atenção de alimentação padrão do MCU do Arduino. Há uma tensão de chaveamento 
máximo (Vtrigger-high), e uma tensão de chaveamento mínimo (Vtrigger-min), ficado ao centro uma região mediada
pela tensão central Vcenter, que seria a metade ou algo proporcional a tensão de entrada.

Se aplicarmos esse sinal no pino de entrada de um controlador qualquer, iremos ter diversos disparos indicando que
o nível alto e nível baixo foram atingidos, sempre que os valores ultrapassarem acima ou abaixo da tensão central

Mas se tivermos um circuito Schmitt-Trigger nesta entrada como é o caso no MCU usado no ATmega, teremos uma 
redução no disparo, indicando níveis altos e baixos, já que agora temos dois níveis de referência que são os
valores Vtrigger-high e Vtrigger-min. Portanto caso a tenção super o nível Vtrigger-max é disparado o sinal 
HIGH mantendo assim até que o nível volte abaixo de Vtrigger-min.  

### Mas eu devo usar ou não um Schmitt-Trigger com Arduino?

<div class="imageBox" id="right">
<a rel="lightbox" title="Mini Push-Button" href="/images/io-ports/mini-push-button-switch.jpg">
<img src="/images/io-ports/mini-push-button-switch-thumb.jpg" height="80" />
</a>
</div>Acredito que muitos que estão usando o Arduino não tenham, até o momento, pensando se devem usar ou não um 
circuito Schmitt-Trigger com o Arduino, porém já vi diversos artigos sugerindo tal uso. Mas, seria mesmo necessário?

<div class="imageBox" id="left">
<a rel="lightbox" title="Circuito com Schmitt-Trigger no ATmega" href="/images/io-ports/Porta-Schmitt-Trigger-thumb.jpg">
<img src="/images/io-ports/Porta-Schmitt-Trigger.jpg" height="100" />
</a>
</div>O Arduino utiliza em sua versão original e na maioria de suas variações e clones o Chip ATmega, alguns o ATmega328, 
ou ATmega2560 alguns até o ATmega644, até mesmo os ATtiny como ATtiny85 e 45, porém todos usam a mesma arquitetura,
os mesmos circuitos perifericos e proteções, e os Chips ATmega já possuem em suas portas quando estas estão 
configuradas como portas de entradas um circuito Schmitt-Trigger de filtragem do sinal de entrada.


O Schmitt-Trigger no Arduino já filtra os ruídos comumentes presentes no uso de chaves como aquelas 
push-button (Figura ao lado), portanto o uso de circuitos extras do Schmitt-Trigger so seriam necessários se as
especificações adotados no circuito dos Chips ATmega e ATtiny não atendam as especificações de seu projeto.

### Especificações das portas de Entrada do ATmega e ATtiny
Os chips ATmega e ATtiny tem algumas especificações de mínimo e máximo para considerar que o estado da porta de 
entrada está em baixa (LOW - 0) e há também um valor mínimo e máximo para que ela seja considerada em alta 
(HIGH - 1), sempre considerando o valor máximo aplicado ao VCC e no nosso caso sempre será 5.5V não mais que isto
correndo o risco de queimar sua porta.

<div class="imageBox" id="right">
<a rel="lightbox" title="Filtro RC" href="/images/io-ports/Schmitt-Trigger-ATmega-Input-Port.jpg">
<img src="/images/io-ports/Schmitt-Trigger-ATmega-Input-Port-thumb.png" height="183" width="400" />
</a>
</div>
O valor mínimo para que a porta seja considerado o estado 0 (LOW) deve ser -0.5V (negativo) e o valor máximo para 
manter neste estado deve ser o valor 0.3V (positivo).

Já o valor mínimo para que a porta seja mantida no estado 1 (HIGH) é 0.6V (positivo) e o valor máximo será a tensão
de alimentação do chip + 0.5V (positivo), ou seja considerando o fato que o chip ATmega328 ou ATmega2560 no Arduino
é alimentado com 5.0V o limite será de 5.5V(positivos)

Obseve que entre os limites de tensão para identificar os estados 0 e 1 há uma lacuna de 0.3V o que acontece
quando a porta se encontrar com a tensão nestes níveis? neste caso o estado anterior é mantido. Isso é um duplo
Threshold e é Hysteresis citado acima na descrição do Schmitt-Trigger. O Hysteresis no arduino pode variar 
conforme a tensão e temperatura do chip, mas nada muito impactante para nossos projetos,





