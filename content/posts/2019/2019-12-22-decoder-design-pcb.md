---
layout: post
title: 'Decoder Design: Schematic & PCBs'
date: '2019-12-22T03:03:00.004Z'
author: Paul Law
tags:
- decoder
- design
modified_time: '2019-12-22T03:03:00.004Z'
thumbnail: /assets/img/posts/2019/2019-12-22-4000.png
---

I've almost got everything I need now to get my relay computer to do branching. The hard work of designing and constructing
the sequencer and controller units is complete and both units can perform a GOTO operation. The only problem now is the
decoder card doesn't understand what a GOTO instruction looks like and so can't tell the controller unit to perform a GOTO.
That's easily fixed though as the decoder is one of the simplest cards in my computer.

So far the existing decoder can understand ALU, MOV8 and SETAB instruction classes. Mapped out as a tree diagram it looks like
this:

{% figure %}![Opcode binary tree for MOV-8, ALU and SETAB](/assets/img/posts/2015/2015-01-04-0000.png){% endfigure %}

Given the GOTO instruction ...

{% include pages-instruction.html instruction="GOTO" %}

... we can see that it will always start with '11' and so updating the tree diagram is simple enough. However, as I want
to design and build this card completely I'm going to add the other instruction classes I know my computer will be needing. I
won't cover these in too much detail yet (I'll save those for another time) but suffice to say that the controller cards are
already capable of performing these instruction classes - they'll just need more relays soldering into the existing PCB.
Anyho, here's the complete decoder tree diagram:

{% figure %}![Opcode binary tree all instruction classes](/assets/img/posts/2019/2019-12-22-0000.png){% endfigure %}

You can perhaps see that designing these opcodes requires quite a bit of thought. The MOV8 instruction, for example, starts
with a '00' because we want to reserve the following six bits as parameters to that instruction type - same goes for the GOTO
instruction. However that means we've already used up half of the opcode permutations. The SETAB instruction (starting with
'01') polishes off another quarter as it also needs six bits for its parameters.

So, that leaves us with a quarter of the possible opcode permutations for everything else. Fortunately most of the remaining
instructions aren't quite as parameter hungry ... or rather, they've been designed that way. This is why sometimes an
instruction is limited in what it can do. For example, SETAB can only load register A or B because otherwise we'd need to find
an extra bit in the instruction at the cost of another instruction.

Another way of visualising the possible permutations of instructions is via a map which shows how much 'space' each
instruction class takes up what's available:

{% figure %}![Opcode class map](/assets/img/posts/2019/2019-12-22-0001.png){% endfigure %}

You can see that we have several blank sections marked 'NOP' which stands for 'No Operation'. These are areas where there's
potential space for adding more instruction types in the future.

Right, let's move on to designing the relay logic for the decoder and all we need to do is wire out the tree map you see
above:

{% figure %}![Decoder relay logic](/assets/img/posts/2019/2019-12-22-0002.png){% endfigure %}

To that we just add the standard W1 backplane connectors which will bring in power, control/instruction bus, operation bus and the pulse bus. For this card the instruction bus is our input and the operation bus is the output. Finally the card needs
a set of LEDs on the front to display the currently decoded instruction class. This all results in the final schematic
which you [can find here in PDF format](/assets/pdf/decoder.pdf).

For the PCB design we follow the usual steps: place components that have to be in a certain location first; place other
components in rough logical groups; lay tracks; build ground/power planes; add text labels etc. Being as this card is so
straightforward let's skip to the finished design - here's a 'realistic' image of the final board design:

{% figure caption:"Decoder Card (front and rear)" %}
![Upper Card (front)](/assets/img/posts/2019/2019-12-22-0003.png)
![Upper Card (rear)](/assets/img/posts/2019/2019-12-22-0004.png)
{% endfigure %}

If you'd like to take a closer look at these you can find the full colour previews in
[PDF format here](/assets/pdf/decoder-pcbp.pdf) and [another version here](/assets/pdf/decoder-pcb.pdf)
which seperates the layers out.

That's the decoder design fully complete and so all I've got to do now is solder it up and the computer should be ready
to perform its very first branching program.
