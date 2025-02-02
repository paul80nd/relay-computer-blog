---
title: Instructions
---

The computer is controlled by a series of instructions held in memory (a computer program) that are loaded into the instruction register one at a time and executed. Each instruction is formed of an 8-bit 'op-code' and falls in to a class of
related instructions (identifiable by the leading part of the op-code).

If you'd like to try out the instructions there's a [full simulation of my relay computer available here]({{< param simulator_url >}}) which also has additional documentation. If you'd like to know even more you can find source code in my GitHub repo as follows:

* [relay-computer-model](https://github.com/paul80nd/relay-computer-model) - the core model which simulates my relay computer on a wire-by-wire basis (written in TypeScript).
* [relay-computer](https://github.com/paul80nd/relay-computer) - the simulator UI which wraps the model above and provides additional documentation and functionality (written in Angular).

The list of available instructions is as follows:

{{< instruction ALU >}}
{{< instruction GOTO >}}
{{< instruction MOV8 >}}
{{< instruction MOV16 >}}
{{< instruction SETAB >}}
{{< instruction LDSW >}}
{{< instruction HALT >}}

There's also a video summary (as at Jan 2020) of the available instructions:

{{< youtube szvNLpovAGM >}}
