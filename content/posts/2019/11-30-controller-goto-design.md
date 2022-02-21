---
layout: post
title: 'Controller Design: GOTO Instruction'
slug: controller-goto-design
date: '2019-11-30T03:03:00.004Z'
author: Paul Law
tags:
- control
- design
modified_time: '2019-11-30T03:03:00.004Z'
thumbnail: /img/posts/2019/2019-11-30-4000.png
---

With the sequencer now designed and constructed I'm much closer to getting branching working on my relay computer. The next
hurdle is updating the controller cards so that they can fire the appropriate control lines at the right time as directed
by the sequencer pulses. As a reminder here's the GOTO instruction itself:

{{< instruction GOTO >}}

... and here's the associated timing chart to be implemented ...

{{< fig caption="GOTO opcode timing chart ([larger](/assets/pdf/timing-goto.pdf))" >}}![GOTO opcode timing chart](/img/posts/2019/2019-11-02-0003.png){{< /fig >}}

The fetch/increment cycle is already catered for as it's common to all instructions but here's the schematic for that:

{{< fig >}}![Increment Cycle Schematic](/img/posts/2019/2019-11-30-0006.png){{< /fig >}}

So let's start off with an easy part of the GOTO operation. The first two lines of the timing diagram select the program
counter (SEL-PC) and read the memory (MEM-RD) which will put the second and third byte of the instruction on to the data bus.
This happens at pulse J and N and is easily implemented with a couple of relays:

{{< fig >}}![SEL-PC and MEM-RD](/img/posts/2019/2019-11-30-0000.png){{< /fig >}}

Note that there's a diode in the SPC (SEL-PC) output as back-feeding could inadvertently drive the P-J or P-N line causing
erratic behaviour. With the 2nd/3rd byte of the instruction available on the data bus we then need to load these into either
the M or J register based on bit 5 of the opcode. Whilst that's going on we also load the incrementer (LD-INC) ready to move
the program counter on.

{{< fig >}}![LD-M/J and LD-INC](/img/posts/2019/2019-11-30-0001.png){{< /fig >}}

Next we need to select the incrementer and put the value back in the program counter. Optionally at the last increment of
the instruction we can also load the XY register effectively storing the address of the next instruction in memory. This is
used as a 'return address' should we want to continue execution from where we initially took a jump from. Bit 0 of the
instruction sets this option.

{{< fig >}}![SEL-INC, LD-PC and optional LD-XY](/img/posts/2019/2019-11-30-0002.png){{< /fig >}}

Timing wise that's the bulk of the chart done - we're just left with the last two lines SEL-J and the optional LD-PC. This is
where we're gating the address held in the J register to the address bus and then if a jump is required we load the program
counter. The SEL-J is easy enough:

{{< fig >}}![SEL-J](/img/posts/2019/2019-11-30-0003.png){{< /fig >}}

The decision to jump or not is based on the condition registers and bits 1, 2, 3 and 4 of the instruction and takes a bit more
relay logic to wire out:

{{< fig >}}![optional LD-PC](/img/posts/2019/2019-11-30-0004.png){{< /fig >}}

Again, we have to be careful not to back-feed to the condition registers so there's a diode on each of the incoming lines but
it's not shown on this schematic.

That's it. Here's all of the above put together:

{{< fig caption="GOTO control circuit ([larger](/img/posts/2019/2019-11-30-1005.png))" >}}![GOTO control circuit](/img/posts/2019/2019-11-30-0005.png){{< /fig >}}

As mentioned in my last post I'm going to rebuild the controller cards on PCBs which will mean also re-implementing the ALU,
MOV8 and SETAB instruction classes. I'll cover off the design of these in my next post then get them ordered in and
constructed.
