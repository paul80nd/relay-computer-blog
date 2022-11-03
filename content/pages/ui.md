---
title: UI Summary
linked-cards:
- aux-ctrl
- display-a
- display-b
---

The computer's user interface is comprised of two display cards (A and B) and then a row of data and control switches. Display A shows the state of the various control signals and allows the user to manually set those signals when the computer is placed in the 'diagnostic mode'. Display B likewise shows other control signals but these are read only. Additionally Display B also shows the state of the data and address busses and shows the current consumption of the computer. The two display cards are wired out to the various busses on the display distribution card.

The auxiliary control card reads in from the data and control switches and can perform a limited set of operations such as loading memory and increasing the PC register to make entering programs easier.

Details of the design, construction and testing of each of the user interface components can be found in the following posts:

| | Design &amp; Construction | Testing |
|-|--------|---------|
| **UI**<br />*(in general)* | [Instruction, Clock and Sequencer]({{< relref "/posts/2015/04-08-user-interface-design-instruction-clock" >}}) | [ALU &amp; Registers A-D Test]({{< relref "/posts/2014/08-19-alu-registers-d-test-with-new-display" >}}) |
