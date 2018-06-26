---
title: Usando EEPROM e o Parametro EEMEM
layout: article
categories: [EEPROM, AVRDude]
tags: [Arduino, EEPROM, AVRDude, EEMEM]
excerpt: A EEPROM do Arduino é um poderoso recurso que pode ser usado para armazenar parametros de configuração e ajuste entre cada reinicialização do Arduino ou para recuperar o estado antes de uma queda de energia.
author: delfino
---
A EEPROM do Arduino UNO pode armazenar até 1KiB de dados, e a do Arduino Mega 4KiB, e usando
a biblioteca EEPRO do arquivo podemos acessar estes dados byte a byte.

Abaixo apresento um código que demonstra a forma mais simples fácil de usar tal biblioteca.

As Linhas:

    byte EEMEM EEPROM_STATUS;
    int  EEMEM EEPROM_AJUSTE;

Inicializão as variável que serão referencia para a mémoria EEPROM, você até poderia indicar um 
valor de sugestão inicial, mas veremos mais a frente porque isto ainda não funciona no Arduíno.

Já na linha:

    byte estado = eeprom_read_byte(&EEPROM_STATUS);

Faço a leitura do estado amarzenado na EEPROM, veja que a função espera um ponteiro para um
endereço de 1 byte que seria o endereço do byte que será lido, como estou usando o parametro
"EEMEM" na variável, basta eu passar o ponteiro da variável que foi definida como sendo o 
endereço da mémoria EEPROM.

Alguns podem justificar que este método é um pouco mais complicado, que poderia ser passado, 
diretamente o endereço da memória, mas veremos mais a frente como este método é mais interessante
quando usamos mais de um byte par ao dado que iremos trabahar.

Mas antes observe o seguinte, no Wiring linguagem usada no Arduino que é um dialeto do C/C++
usamos tipos de dados como sendo "char" ou "byte", "int", "float" e etc, porém ao armazenarmos 
nas EEPROM os dados são tratados como sendo de um byte, dois bytes ou quatro bytes de comprimento, 
sem considerar o tipo e seu sinal, ou seja, respectivamente byte, word e dobleword. Uma outra
forma de se referênciar a estes tipos, que seria pelo tipo nativo do C, no caso int8_t, int16_t e
int32_t, todos representando os tipos sem sinal, veja que o número identifica o número de bits.

Continuando, iremos se for a primeira vez que executa o código obter um valor aleatório ou mais 
provavel 0xFF (255, um byte sem considerar o sinal que se atribuida a uma variável do tipo byte, 
será 127), já que a mémoria pode nunca ter sido usada. Já na segunda vez iremos obter o último
estado em que o Arduino se encontrava conforme nosso código.

Na linha:

    eeprom_write_byte(&EEPROM_STATUS, INICIO);

Já ajustamos o Status do sistema e guardamos na mémoria que estamos no inicio do processo, veja
que eu informo o ponteiro para a váriavel EEPROM_STATUS, veja que criei um _enum_ para que fique
fácil padronizar os estados, indentificando-os com números, que neste caso escolhi aleatoriamente.

Então na linha:

    int ajuste = eeprom_read_word((uint16_t*)&EEPROM_AJUSTE);

As coisas mudam um pouco, veja que faço a leitura do endereço EEPROM_AJUSTE, e este já um tipo "int",
ou seja ocupa dois bytes, o que seria o int16_t, com a função "eeprom_read_word" é preciso usar um
ponteiro do tipo (uint16_t\*) então faço o casting já que EEPROM_AJUSTE é do tipo int, relembrando que
ambos são de 2 bytes.

O restante do codigo é bem intuitivo e fácil de ser comprendido.

Veja após o código mais informações sobre o uso da EEPROM e porque o Arduino ainda não usa a inicialização
das váriaveis quando usando o parametro EEMEM.   


    #include "inttypes.h" 
    #include "avr/eeprom.h" 
    
    byte EEMEM EEPROM_STATUS;
    int  EEMEM EEPROM_AJUSTE;
    
    enum wind_directions_t {
        INICIO = 11, AJUSTANDO = 24, AJUSTADO = 37, LOOP = 58}; 
        
    void setup() {
        Serial.begin(57600);
        
        Serial.println();
        Serial.println("Teste de EEPROM");
        Serial.println();
        
        Serial.print("O sistema travou no status: 0x");
        byte estado = eeprom_read_byte(&EEPROM_STATUS);
        Serial.print(estado, HEX);
        Serial.println();    
        
        eeprom_write_byte(&EEPROM_STATUS, INICIO);
        
        int ajuste = eeprom_read_word((uint16_t*)&EEPROM_AJUSTE);
        Serial.print("Valor carregado ao inicializar o Arduino: ");
        Serial.println(ajuste);
        ajuste++;
        eeprom_write_word((uint16_t*)&EEPROM_AJUSTE, ajuste);
        Serial.print("Valor armazenado: ");
        Serial.println(ajuste);
        
        eeprom_write_byte((uint8_t*)&EEPROM_STATUS, AJUSTANDO);
        
        ajuste = eeprom_read_word((uint16_t*)&EEPROM_AJUSTE);
        
        Serial.print("Valor carregado: ");
        Serial.println(ajuste);
        
        eeprom_write_byte((uint8_t*)&EEPROM_STATUS, AJUSTADO);
    }
    
    void loop(){
        byte estado = eeprom_read_byte((uint8_t*)&EEPROM_STATUS);
        if(estado != LOOP)
            eeprom_write_byte((uint8_t*)&EEPROM_STATUS, LOOP);
        
        delay(800);
    }



## Porque não adianta inicializar as variáveis do tipo EEMEM

Quando usando os chips ATMega fora do arquivo você pode gravar sua EEPROM com base
em um arquivo de dados de referência usando o AVRDude mais a opção "-U" parametrizada
com o tipo de memoria "eeprom" ao invez de "flash", para criar o arquivo de dados
previos para a EEPROM que normalmente tem a extensão eep, basta inicializar as variáveis
do tipo EEMEM e compiar o seu codigo, seua interface de desenvolvimento irá gerar este
arquivo para você, a IDE do Arduíno até faz isto também, experimente inicializa-las,
compile seu código e depois vá ao diretório temporário criado pela IDE e verá um
arquivo com final \*.ccp.eep, este arquivo é seu arquivo de pré inicialização da EEPROM.

Mas o Arduíno não deixa vc usar este arquivo, porque o Boot Loader usado, o Optiboot, não
consegue ainda gravar na EEPROM, e quando você tenta enviar estes dados usando o AVRDude
o Boot Loader grava errado, ao invéz de gravar na EEPROM, grava sobre o seu programa e
interrompe seu processo corrompendo o que está gravado no Chip.

## Eu posso obter os dados da EEPROM externamente?

Sim você pode, a ferramenta AVRDude consegue se comunicar com o Boot Loader Optiboot do
Arduíno para isto basta você usar o comando:

   /diretorio/instalacao/hardware/tools/avr/bin/avrdude - C\
   /diretorio/instalacao/hardware/tools/avr/etc/avrdude.conf -vv -patmega328p -carduino \
   -P/dev/tty.usbmodem411 -b115200 -Ueeprom:r:EstadoEEPROM.eep:i

No comando acima o o AVRDude foi configurado para fazer a leitura do atmega328p (-patmega328p)
usando a plataforma Arduíno (-carduino) na porta tty.usbmodem411 (-P/dev/tty.usbmodem411), com
a velocidade comunicação serial de 115200 bauts (-b115200) e gravando no arquivo
EstadoEEPROM.eep no formato Hexa da Intel. (-Ueeprom:r:EstadoEEPROM.eep:i)

No caso eu usei o MAC OS, você deverá ajustar a estrutura de diretorio para sua instalação e
a porta serial deve ser ajustada para o tipod e sistema operacional usado.

Abaixo está um exemplo do contéudo do arquivo:

    :00000001FF

Como nos não inicializamos as variáveis seu valor será zero. O valor 01FF é um CRC.
