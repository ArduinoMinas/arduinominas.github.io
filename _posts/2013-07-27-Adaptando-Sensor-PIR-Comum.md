---
layout: article
title: Adaptando um Sensor PIR Comum ao Arduino
tags: [Arduino, Uno, PIR, Sensores, Adaptacao]
categories: [Sensores]
excerpt: Neste artigo apresentou uma solução simples para adaptar um sensor PIR comum usado em sistema de segurança
author: Carlos Delfino {consultoria@carlosdelfino.eti.br}
---
Os sensores PIR de uma forma geral são pequenos modulos usados em sistemas de
segurança que identificam a presença de pessoas, muitos com um hardware mais
elaborado, ouros mais simples, na maioria deles construidos de forma a
identificar a presença de corpo humano.

<div class="imageBox" id="left">
<a rel="lightbox" title="PIR Comum na Caixa" href="/images/sensor/pir/PIR_comum_montado.jpg">
<img src="/images/sensor/pir/PIR_comum_montado.jpg" width="225" height="225"  border="6" />
</a>
</div>
Não iremos entrar em detalhes no funcionamento do componentes PIR que compõem
tais modulos muito utilizados no mercado, iremos apenas demonstrar uma forma
de aproveitar modulos de sensores facilmente encontrados no mercado em lojas
especializadas em segurança, o que pode ajudar a economizar em um projeto, já
que em lojas especializadas de eletrônica ou de hobbies como Laboratório de
Garagem alguns modulos variam de R$ 35,00 a R$ 50,00, mas aproveitando os
módulos de segurança podemos encontrar alguns até por R$ 17,00 já com a caixa
adequada com refletor.

<div class="imageBox" id="right">
<a rel="lightbox" title="PIR fora da caixa modelo mais complexo, porém pronto para uso" href="/images/sensor/pir/infrared-pir-sensor-detector-module-01.jpg" >
<img src="/images/sensor/pir/infrared-pir-sensor-detector-module-01-thumb.jpg"  width="219" height="250" border="6" />
</a>
</div>
A maioria dos modulos de Sensor PIR usados em sistema de segurança são
circuitos de 5V com um regulador na entrada de tensão, já que os sistemas
de segurança funcionam com 12V, o circuito de exemplo que escolhemos para
este artigo usa um regulador do tipo LM78L05 que é da familhia LM78xx, como o
LM7805 já conhecido de muitos, porém este regulador é para baixa corrente e é
encapsulado com um envolucro do tipo TO92 e também SO-8 um CI de 8 pinos, como
na diagrama de pinos abaixo.

<div class="imageBox" id="right">
<a rel="lightbox" title="Pinagem do Regular 78L05" href="/images/componentes/reguladores/pinagem-lm78l05.jpg" >
<img src="/images/componentes/reguladores/pinagem-lm78l05-thumb.jpg"  width="225" height="221" border="6" />
</a>
</div>
Nosso modulo de exemplo usa a versão TO92, e para adaptarmos o circuito para
uso com o arduino basta removermos tal componente e colocarmos um jumper onde
estava conectado o pino INPUT para o local que está conectado o pino OUTPUT,
simplificando do pino 1 para o pino 3.

Bem, este é um processo bem simples, veja a foto ao lado do circuito do
modulo usado como exemplo e a indicação dos pinos e onde deve ser colocado o
jumper.
<div class="imageBox" id="right">
<a rel="lightbox" title="Circuito do Modulo Padrão" href="/images/sensor/pir/Circuito-Como-Modificar.png" >
<img src="/images/sensor/pir/Circuito-Como-Modificar-thumb.png"  width="219" height="250" border="6" />
</a>
</div>
E na foto abaixo o circuito já modificado. Cuidado o pino central não será
mais usado já que este era ligado para o terra do circuito.

# Como fazer esta alteração em outros circuitos.

Bem é impossível definir uma regra padrão para qualquer circuito, mas procure
inicialmente identificar o CI principal do circuito, procure o datasheet
correspondente e veja qual é sua tensão de trabalho, se for 5V ou 3,3V é
fácil fazer a alteração.

Para isto siga o circuito de alimentação e vá até o regulador que deverá ser
um similar ao 78L05 ou 78L33, ou outro de função similar, podendo também,
porém com uma probalidade menor, ser apenas um par resistor/zener.

Caso não esteja seguro entre em contato com o grupo Arduino Minas e envie
detalhes do modulo PIR como o codigo do modulo e fotos.