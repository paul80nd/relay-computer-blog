---
layout: post
title: 'Decoder Design: MOV-8, ALU & SETAB '
date: '2015-01-04T22:12:00.003Z'
author: Paul Law
tags:
- design
- decoder
modified_time: '2015-01-04T22:23:50.840Z'
thumbnail: /img/posts/2015/2015-01-04-4000.png
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-6539738216630408616
blogger_orig_url: http://relaycomputer.blogspot.com/2015/01/decoder-design-mov-8-alu-setab.html
---

In my last post I introduced the design for the instruction register 
which holds the current 8-bit opcode that the computer is executing. The next 
card to design is the decoder which will take the 8-bit opcode and set either 
the MOV-8, ALU or SETAB control lines depending which class of instruction the 
opcode represents. This is actually quite straightforward and just needs a few 
relays to handle the logic.

Firstly though lets quickly recap the 
form of those three instruction classes:

{% include pages-instruction.html instruction="ALU" %}
{% include pages-instruction.html instruction="MOV8" %}
{% include pages-instruction.html instruction="SETAB" %}

Mapping this out as a binary tree using the highest 4 bits 
of the opcode we get the following:

{% figure %}![Opcode binary tree for MOV-8, ALU and SETAB](/assets/img/posts/2015/2015-01-04-0000.png){% endfigure %}

There will be further branches to this tree in the future as more 
instruction classes are added to the computer but for now I'm keeping to the 
three above as that will be enough to perform some simple programs. The tree 
above can now be easily mapped to the relays used by this computer:

{% figure %}![Decoder Relay Tree](/assets/img/posts/2015/2015-01-04-0001.png){% endfigure %}

With the basic relay 
connections designed it's time to transfer this over to a 55 x 40 hole pad 
board as used on all the computer cards so far.

{% figure caption:"Decoder Relays &amp; Internal Links ([larger](/assets/img/posts/2015/2015-01-04-1000.png))" %}![Decoder Relays &amp; Internal Links](/assets/img/posts/2015/2015-01-04-0002.png){% endfigure %}

As 
usual I'll want the card to display the current instruction class being 
decoded so I can confirm correct operation and test/debug the card 
independantly. 3 LEDs will be needed for this to handle the three classes 
currently decodable and as always these are the 12V LEDs with internal 
resistor. Diagram wise it looks like this:

{% figure %}![Decoder LEDs](/assets/img/posts/2015/2015-01-04-0003.png){% endfigure %}

The mysterious gap between 
the MOV8 and ALU LEDs above is where a later instruction class LED will go 
(and there'll be more LEDs added to the right as the card gets more classes 
added).

Next up is the connections to other parts of the computer 
and there's yet another new connection type to introduce again ... and this 
one is a little odd. So far I've introduced the 'type Z' connections (used on 
the three ALU cards and the AD and BC register cards) and the 'type X' 
connections (used by the instruction register covered in my last post). The 
enclosure which holds the cards has five type Z slots and five type X slots. 
There will be 'type Y' connectors which will be used by upcoming cards but 
these are again pretty similar to the type X and Z cards and the enclosure can 
hold five Y cards too. This card however is a 'type W1' and the enclosure can 
hold three 'type W1' cards and two 'type W2' cards. The reason for this oddity 
is because some of the W cards will be double height to use both W1 and W2 
connectors but for now we can think of W1 cards just like any other X, Y or Z 
cards. As you might expect any W1 card can talk to any other W1 card on all 
the available connection lines.

The 'W1' connections consist of the 
pulse timing signals (which will be produced by the upcoming sequencer card), 
8-bit control &amp; instruction bus, 8-bit operation bus and finally power 
connections. The diagram of the connectors look like this:

{% figure caption:"Decoder W1 Connectors ([larger](/assets/img/posts/2015/2015-01-04-1001.png))" %}![Decoder W1 Connectors](/assets/img/posts/2015/2015-01-04-0004.png){% endfigure %}

This shows the 
four right angled boxed headers — from left to right these are: 5+5 power 
lines, 8+8 control/instruction bus, 8+8 operation bus and finally 10+10 pulse 
lines. On the operation bus the lines marked '***' are lines that will be used 
by future 'W1 type' cards and the lines marked '---' are unused/spare. The 
pulse lines are not labelled at the moment but that will all be changed when I 
design the upcoming sequencer card. The lines on each connector are as 
follows:

* C/I-Bus (Control Bus + Instruction Bus)
  * I0-I7 ... 8-bit Instruction Bus
  * SN ... ALU Sign Condition Bit Register
  * CY ... ALU Carry Condition Bit Register
  * EZ ... ALU Zero Condition Bit Register
  * NZ ... ALU Non-Zero Condition Bit Register
  * CL ... ALU Condition Register Load
  * F2-F0 ... ALU Function Code
* OP-Bus (Operation Bus)
  * ISET ... SETAB Instruction Class
  * IMV8 ... MOV-8 Instruction Class
  * IALU ... ALU Instruction Class
* Pulse (Sequencing Lines)

So, finally, wiring everything together we get the 
following:

{% figure caption:"Completed Decoder Card (for SETAB, MOV-8 and ALU classes) ([larger](/assets/img/posts/2015/2015-01-04-1002.png))" %}![Completed Decoder Card (for SETAB, MOV-8 and ALU classes)](/assets/img/posts/2015/2015-01-04-0005.png){% endfigure %}

This diagram includes everything mentioned so far along 
with the power supply and ground lines and all other internal wiring. As with 
previous cards, the completed decoder design can be found [here in PDF format]({% link /assets/pdf/decoder-1.pdf %}).

So, that's the decoder 
all designed and ready for the first three instruction classes. The next card 
to design is the sequencer which will produce the timing pulses that the 
control card (which I'll design after the sequencer) will use along with the 
instruction class produced by this card to fire the control lines in the 
required order. When all of that is done it'll finally be time to get 
constructing and put together these four cards (instruction register, decoder, 
sequencer and control) which will get the computer to the stage where a single 
instruction can be performed fully by manually pulsing the clock line. 
