---
title: O PICDuino
layout: article
category : Clones
tags : [Arduino, PIC, PICDuino, PIC18F2520, PIC18F, BASIC, MICROCHIP]
excerpt: Um Clone Arduino para amantes do PIC, há diversos colegas que falam que preferem o PIC, ainda não tive um argumento que justifique a escolha pelo PIC em relação ao ATMega, nem o contrário, acho que ambos tem suas vantagens.
author: Carlos Delfino (consultoria@carlosdelfino.eti.br)
---

Diante disto resolvi pesquisar sobre o PIC e sua relação com o Arduino, já muito tempo eu ouvir falar do PICDuino, 
que seria um clone do Arduino com chip MCU PIC18F2520, o PIC já existe a alguns anos, a primeira versão se não me 
engano foi desenvolvida em 1975, eu tive o primeiro contato quando eu tinha uns 15 anos, lá pelos meados de 1986, 
apesar deu já dominar naquela época a linguagem BASIC, eu não estava muito atento porque estava começando a me 
envolver com o DBase e em seguida com o Clipper o que me tirou da eletrônica.

<div class="imageBox" id="left">
<a rel="lightbox" title="PICDuino - PIC18F2520" href="/images/clones/PICDuino.jpg">
<img src="/images/clones/PICDuino-thumb.jpg"  border="6" />
</a>
</div>
Até o momento somente encontrei um Clone fabricado pela [Smartradio](http://www.smartradio.com.br) e pode ser 
encontrado no link http://www.smartradio.com.br/loja-pic/?id=35 e custa R$ 115,00, porém esta em promoção e sai 
por R$ 69,90 + frete.

O PICDuino é compátivel com os shields propostos para o Arduino, mas é preciso tomar cuidado por exemplo a porta
SPI existente no Arduino não é presente no PICDuino impedindo por exemplo o funcionamento de alguns shields como
o Ethernet Shield com Wiznet W5100 e TF Slot, que usam as portas MISO/MOSI/CLK por ela, as bibliotecas de código 
precisam ser ajustadas para funcionar com esta plataforma, além disto a interface de senvolvimento não é a mesma, 
e usa outro toolchain compátivel compátivel com o GCC mas sutis diferenças, sua arquitetura interna é também 
baseada em um processador Risc e construido internamente sobre a Arquitetura Havard porém este chip não supera o 
ATMega328, mas se aproxima dos recursos sendo uma trampulim para quem deseja trabalhar com o Arduino e ainda não 
conhece a tecnologia  não se sente seguro, abaixo segue uma tabela comparartiva do Chip PIC18F2520 usado no 
PICDuino.

<table>
<thead>
<tr>
<th colspan="3">Comparativo</th>
</tr>
<tr>
<th>Parametros</th><th>PIC18F2520</th><th>ATMega328p</th>
</tr>
</thead>
<tbody>
<tr>
<td>Tipo de memória de programa</td><td>Flash</td><td>Flash</td>
</tr>
<tr>
<td>Capacidade de Memória de Programa(KB)</td><td>32</td><td>32</td>
</tr>
<tr>
<td>Capacidade da RAM em Bytes</td><td>1,536</td><td>2K</td>
</tr>
<tr>
<td>EEPROM (bytes)</td><td>256</td><td>1K</td>
</tr>
<tr>
<td>Adaptador USB</td><td>FTDI232</td><td>ATtiny16u2</td>
</tr>
<tr>
<td>Alimentação da Fonte</td><td>7,5 à 25Vdc</td>
<td>6 a 20Vdc (limites) <br> 7 a 12Vdc (recomendado)</td>
</tr>
<tr>
<td>Corrente Máxima por Pino de Saída(mA)</td><td>25</td><td>40</td>
</tr>
<tr>
<td>Velocidade da CPU(MIPS) (aproximada em 16Mhz)</td><td>16</td><td>16</td>
</tr>
<tr>
<td>Periféricos de Comunicação Digital</td><td>1-A/E/USART, 1-MSSP(SPI/I2C)</td><td>1-USART, 1 SPI e 1 I2C</td>
</tr>
<tr>
<td>Periféricos Capture/Compare/PWM</td><td>2 CCP</td><td>6 PWM</td>
</tr>
<tr>
<td>Timers</td><td>1 x 8-bit e 3 x 16-bit</td><td>2 x 8-bit e 1 x 16-bit</td>
</tr>
<tr>
<td>ADC</td><td>10 ch, 10-bit</td><td>6 ch, 10-bit</td>
</tr>
<tr>
<td>Comparadores</td><td>2</td><td>1</td>
</tr>
<tr>
<td>Faixa de Temperatura (C)</td><td>-40 a 125</td><td>-40 a 125</td>
</tr>
<tr>
<td>Faixa operacional de voltagem(V)</td><td>4.2 a 5.5</td><td>1.8 a 5.5</td>
</tr>
<tr>
<td>Pinagem</td><td>28</td><td>28</td>
</tr>
</tbody>
</table>

# Pinagem

<table>
<thead><tr><th>PIC128F2520</th><th>ATmega328</th></tr></thead>
<tbody>
<tr><td>
<a rel="lightbox" title="PIC18F2520" href="/images/componentes/atmega328-pinagem.jpg">
<img src="/images/componentes/atmega328-pinagem.jpg"  border="6" />
</a>
</td>
<td>
<a rel="lightbox" title="PIC18F2520" href="/images/componentes/pic18F2x20-pinagem.jpg">
<img src="/images/componentes/pic18F2x20-pinagem.jpg"  border="6" />
</a>
</td>
</tr>
</tbody>
</table>

