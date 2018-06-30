---
title: Relação Entre Resistência, Tensão e Corrente - GIF 
tags: [Arduino, Curso, Shields, Modulos, Arduino Mega, Arduino Due, Arduino Uno, Lógica, Programação, FIFO, Algoritimos, Estrutura de Dados, Assembly, AVR, ATMega, ATTiny, ARM, Resistência, Tensão, Corrente, GIF, Calculos, Lei de Ohm, Ohm, Medição]
category: basicaodaeletronica
layout: article
share: true
toc: true
comments: true
feature:
  category: true
ads: 
 show: true
image:
  teaser: basicaodaeletronica/Lei de Ohm.jpg
  feature: basicaodaeletronica/Lei de Ohm.jpg
  credit: Carlos Delfino 
  creditlink: 
---
Representação animada da relação Corrente X Tensão x Resistência.

<!--more-->

[Conheçam nossa fan page Basicão da Eletrônica](http://facebook.com/BasicaoDaEletronica) e aprenda mais sobre a eletrônica básica fundamental para os primeiros passos com o Arduino.

Não há questionamento quando se diz que o primeiro passo na eletrônica é compreender a relação existente entre as três grandes: Tensão, Corrente e Resistência.

Os três conceitos precisam ser muito bem compreendidos, a tensão erroneamente chamada de voltagem, se refere ao potencial existente entre dois pontos, alguns dizem que o fio está energizado quando existe esta tensão entre o fio e outro ponto de referencia, portanto isso significa que há uma diferença de pontencial entre os dois pontos, permitindo que eletrons se movimente entre eles, quanto maior for esta diferença de potencial.

Ou seja quanto mais eletrons estiverem disponiveis para serem transferidos de um ponto ao outro maior é a tensão, e isso gera uma corrente que podemos dizer que é a velocidade que estes eletrons atravessam de um ponto ao outro não importa o meio que exista entre eles. Quanto mais condutor for este meio maior será a corrente e diretamente proporcional a quantidade de eletrons que tivermos para transferir, portanto podemos entender a corrente como sendo a velocidade e quantidade de eletrons que transitão por um meio de um ponto a outro.

Mas o que seria a resistência, qual a relação da resistência com a tensão e como ela impacta a corrente.

Antes precisamos entender algumas coisas, em especial  porque é errado chamar a tensão de voltagem, voltagem foi um aportuguesamento da unidade de médida Volts, o nome foi escolhido em homenagem ao cientista Alexandre Volta, criador da pilha voltáica, a primeira bateria eletrica como as que são usadas nos corros.

O Volt é o potencial de transmissão de energia, em Joules, por carga elétrica (eletrons), medida em Coulombs, entre dois pontos distintos no espaço.

Bem e a corrente? Também precisamos ententer melhor oque é a corrente e porque podemos compara-la a velocidade. A corrente é medida em ampere que uma unidade e medida definida pelo Sistema Internacional de Unidades e o nome foi escolhido em homenagem ao cientista  André-Marie Ampère, E cada Ampere equivale a 1 Coulomb por segundo em um meio condutor.

Bem não vimos o que é um Coulomb, nem iremos entratar mais afundo do que o equivalente a uma proporção -6.24150948e18 cargas de eletrons, o número negativos se dá pelo fato do eletron ser negativo em relação ao proton que é o núcleo do aton, bem vamos parar por aqui, este assunto vai muito além do que queremos.

Então percebemos aqui que 1 Ampere equivale a ter um 1 Coulomb passando no fio por segundo, e temos 1 V equivalente a termos uma diferença de pontecial entre os dois pontos de 1 Coulomb e assim desprendemos 1 Joule de energia, ai meu deus mais uma unidade, elas não acabam nunca? Bem não vamos nos preocupar muito com isso agora, vamos por hora manter o foco sobre a relação  1 Ampere e 1 Volt, e como isso é impactado na resistência.

O Georg Simon Ohm, que foi homenageado com com o uso de seu sobre nome na unidade de médida da resistência desenvolver a pesquisa que determinava a relaão matemática simples envolvendo as dimensões dos condutores e as grandezas elétricas, dessa forma ele definiu o de resistência elétrica e formulo que chamamos de **Lei de Ohm**.

Foi determinado que um condutor teria a resistência de um 1Ohm (1R ou 1&#8486;) quando em uma diferença de pontecial de 1Volt (1V) haveria uma corrente 1 Ampere (1A), assim foi percebido que alterando as caracteriscas desde condutor que este proporcionalmente tivesse sua resistência medida em Ohms alterada em uma unidade teriamos porcionalmente a perda 1V no condutor entre os dois pontos medidos.

Vejamos, se eu tiver uma bateria que me proporciona 2 Volts (2V) e eu tiver um componente que promova uma resistência de 1Ohm (1R) teremos uma corrente de 2 amperes, porém se eu adicionar mais um componente logo em serie ao que já temos no circuito, teremos uma resistência de 2R, o que podemos então deduzir que a tensão divida pela corrente nos dá a resistência do material, assim fica fácil descobrirmos qual quer outra grandesa tendo duas das aqui tratadas.

Abaixo tenho um gráfico que exemplifica na prática o que acontece com a mudança da resistência.
 
![Representação Animada da Relação Corrente X Tensão X Resistência]({{site.baseurl}}/{{site.images.baseurl}}/basicaodaeletronica/gifs/resistencia_tensao_corrente.gif)