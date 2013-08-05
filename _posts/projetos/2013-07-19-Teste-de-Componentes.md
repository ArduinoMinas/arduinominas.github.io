---
layout: project
title: Testador de Componentes
tags: [Testar, Componentes, Multimetro, Ferramentas, Projetos]
categories: [Ferramentas, Projetos]
excerpt: Desenvolver uma ferramenta múlti testes, em especial para componentes que identifique e diagnostique, apresentando informações em um display.
author: http://www.mikrocontroller.net/articles/AVR-Transistortester
contributors: Carlos Delfino (@carlosdelfino)
projecturl: http://arduino-minas.github.com/TestadorDeComponentes
projectpost: true
---

http://www.mikrocontroller.net/articles/AVR-Transistortester

It is advisable to open the diagram in another browser window in order to 
understand the following descriptions.

As the ATmega8 microcontroller was chosen. He has more than enough flash and 
RAM. He also has enough port pins and is very reasonably priced. The 
transistor tester is powered by a 9V battery. The 5V supply voltage for the 
AVR is quite conventionally produced with a 78L05. On port B of the ATMega8 
various resistors are connected: the transistor pin a large (470 k) and a 
small (680Ω). This two different currents can be given to the tested pin. 
The resistors are connected to ADC0, ADC1 and ADC2. To these pins and the 
transistor under test is connected. The left part of the circuit (with the 
3 transistors) is responsible for the automatic shutdown. More on that later. 
On the first pins of port D, the LCD is connected. This is a 2x16 character 
text LCD with HD44780 compatible controller.

It should be noted that the test inputs have no protection circuit. A 
suppressor would probably distort the measurement results. It should therefore 
not be components that are still incorporated in a circuit under test. 
Otherwise the ATMega8 could be damaged.

Source of PCBs: IT-WNS (double-sided circuit board)
Files Selbstätzen: (article link, single sided)
[ edit ] Test procedure

The test of the transistor based on a simple but effective principle: There 
are first times all six possible combinations for the pins tried out. 
purpose pins are placed either through the 680Ω resistor to + or fixed to the 
ground or completely free. 
It results in the following 6 options :

State Pin1	 State pin2	 State pin3
1 Opportunity	 +	 -	 free
2 Opportunity	 +	 free	 -
3 Opportunity	 free	 -	 +
4 Opportunity	 free	 +	 -
5 Opportunity	 -	 free	 +
6 Opportunity	 -	 +	 free
For each possible combination, it is checked whether there is between the pin 
and the pin + passageway. This is determined by the voltage at the ADC + pin. 
If there is continuity, and the voltage drop in the range between 0.2 V and 
4 V, it is assumed that a diode is connected between the respective pins. This 
result is stored. The test is thus not canceled course, since this result can 
also occur in a transistor and is (a transistor has two pn junctions, with 2 
diodes).

If there is no continuity, the far left free pin is connected to ground via 
680Ω. If now consists passage, it shall be of a PNP transistor or p-channel 
MOSFET. In this case, the pin is (then there is the base) on the k resistor 
470 to ground down. Now the voltage between the + pin and pin (collector and 
emitter) is measured and stored. 
subsequently the result can gain and the "correct" wiring can be calculated. 
A transistor even works "upside down" (ie with a PNP transistor collector to 
plus), but the gain is significantly lower.

If, however, there is still no continuity between the positive and negative 
pin, the pin is left open initially set to increase over 680Ω. Is now passage 
is an npn transistor, an n-channel MOSFET or a thyristor / Triac. The further 
procedure is the same for PNP. The first pin is left open but then again 
switched to high impedance. If the component is then still conducts, it is a 
thyristor or triac. 
Through the 680Ω resistors of the possible current quite low (maximum of 
approximately 7.4 mA), however. When the holding current of the thyristor or 
triac is above this value, the component is recognized as an npn transistor. 
That might be the case with many power thyristors or triacs. A reduction of 
the test resistors (for more power) would be possible, but also increases the 
risk of destroying very sensitive transistors.
Distinguishing between transistor and MOSFET is not hard: For a transistor 
base current flows. Thus, the base port "back to the emitter" is drawn. 
In a MOSFET, the course did not happen. This can then be easily determined via 
the connected ADC.

To measure the gate threshold voltage of N-channel enhancement MOSFET source 
is placed firmly on ground. Drain is placed over a 680-ohm resistor to the 
positive and the gate is placed over a 470kOhm resistance to increase. The 
tester waits until the Mosfet on, that is, the drain terminal goes to logic 
0th Now the voltage at the gate voltage is measured. This is approximately the 
gate threshold voltage. 
then following to measure the gate capacitance gate, drain and source are 
placed firmly grounded. The discharges the gate completely. Then the gate is 
placed over against 470kOhm Plus, the drain and source remain grounded. Now, 
in a loop, the time is measured which elapses before the gate terminal is at 
logic 1. This happens right at exactly 3.6 V when the unit is supplied with 
5V stable. 
This is 72% of the operating voltage. Thus, there is calculated a time 
constant Tau of 1.28 (1.28 * C R). Since R is known with 470kOhm, can be from 
C, ie, the gate capacitance, charge. 
, the real factor for the calculation differs somewhat depend on and can be 
adjusted by Define the source code. 
Measurement of the gate capacitance, as well as the measurement of gate 
threshold voltage, anyway not very accurate. For a rough estimation and the 
comparison of different mosfets these features are quite useful. The end of 
the gate threshold voltage and capacitance measurement of P-channel enhancement 
MOSFET is identical to the above-described procedure for N-channel MOSFETs. 
Only all Polatitäten reversed and the time constant for the gate capacitance 
varies.
For the measurement of a resistance voltage divider is formed from one of the 
internal resistance (680Ω or 470kOhm) and the sample. The voltage at the 
midpoint of the divider is measured, and once again with the 680Ω resistance 
with 470kOhm. From this, the resistance of the specimen directions. 
This measurement method has the problem that the accuracy heavily depends on 
the resistance value of the specimen. 
most accurate way is to measure if the candidate about the same resistance as 
one of the internal resistors has, so 680Ω or 470kOhm. Then, the voltage 
divider having a ratio of about 1:1. A small change in the resistance value 
of the specimen changed here, the voltage in the middle of the divider quite 
strong. 
With the internal 680Ω resistance is achieved with a 600 ohm test a divider 
voltage of 2.34 V, with a 800-ohm test are 2.7 V. An increase of the specimen 
by 33% thus increasing the tension here by as much as 0.36 V, thus increasing 
the ADC value by 74
For a 6 ohm test however, it is 0.044 V in the middle of the divider, wherein 
there are 8Ω 0.058 V. Here, the resistance also increases by 33%. However, the 
voltage in the middle of the divider is increased by only 0.014 V, which 
increases the ADC value by only 2 through 3.

Incidentally, each resistance test specimen is measured for both the 470kOhm 
resistor and to the 680Ω resistance. In the evaluation, then the more accurate 
result is used, that the result, wherein the voltage divider is closer to the 
optimum value of V 2.5.

The entire measuring range is about 5Ω to 910kohm. In the area under the 20Ω 
measurement is very imprecise, deviations of 10-20% can already occur. 
Not particularly accurate is the range of approximately 20 to 100Ω. In 
addition, the range of approximately 10-50 kOhm is not really accurate because 
it none of the available measuring resistors (680Ω or 470kOhm) is well suited. 
If the tester precision resistors (metal film with <= 1% tolerance) must be 
installed, likely to + / -3% deviation over the entire measurement range but 
its doable. Thus, the resistance measurement function is of course not compete 
with a good multimeter, but quite passable.

Measuring capacitors is isolated from the measurement of the remaining 
components. This means that it has a self-metering function that checks all 
six pin combinations to the presence of a capacitor. This is necessary because 
the measurements would otherwise interfere with each other.

The presence of a capacitor is tested as follows: One of the two pins fixed to 
the ground is applied and the other to earth via 470kOhm. 
After a short time, the voltage at the pin that is connected to ground via 
470kOhm is measured and the value is stored. 
Well this pin is set for 10ms to about 680Ω Plus. After the voltage is 
measured again. 
If it has increased by at least about 10 mV, it is assumed that a capacitor is 
present. This also specifies the maximum measurable capacity of about 7350μF 
fixed (5V 680Ω can flow to 7.35 mA, which a capacitor of 7350μF in 10 ms to 
10 mV invites). 
If the voltage is not sufficiently increased, the test with the result "No 
capacitor" canceled. 
If the voltage is increased, however, the capacitor is again fully discharged. 
Then, the capacitance is measured, exactly as described in the same principle 
as in the measurement of the gate capacitance. 
first measurement with the resistor is 680Ω. If the time until the switching 
pin is very low (low capacitance) is measured again with the 470kOhm resistor. 
appropriate, because the time until the switching pin was very small, the 
measurement is aborted. Thus, the lower limit of the measuring range of about 
0.2 nF is set. This should be a reasonable value, otherwise the test cable 
capacity etc. can been falsely lead to the detection of a (nonexistent) 
capacitor. 
Was the measurement time in the specified range, the capacitor is stored as a 
component found. The power measured time is converted to the (definable by 
Define) factors in a capacity that is then displayed in nF or uF. 
Again, the accuracy is not great high, up to 10% deviation is possible. For 
the approximate determination of the capacitance, it is sufficient.


After the above measurements for all possible combinations of the six pins 
have been made, it goes to the evaluation:

In bipolar transistors have - as I said, the correct assignment of the 
collector and emitter based on the amplification factor can be determined
Three were in a bipolar transistor or diode with a MOSFET, a diode is found, 
the device has a protection diode. This is represented by a small diode symbol 
bottom right of the LCD
If a plurality of diodes, but transistors have not detected, the position of 
the diodes to each other is checked to determine the device type and the pin 
assignment (double LED with common anode / cathode, two diodes in series, two 
diodes in anti-parallel)
The result is then displayed on the LCD. Then the tester turns off 
automatically after about 10 seconds.
