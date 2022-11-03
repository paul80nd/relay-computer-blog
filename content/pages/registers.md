---
title: Registers Summary
linked-cards:
- incrementer
- register-ad
- register-bc
- register-i
- register-j
- register-m
- register-xy
---

The computer has eight general purpose 8-bit registers named A, B, C, D, M1, M2, X and Y. Although each can be used generally some of the registers have additional specific uses. Register B and C feed the ALU inputs, M1 and M2 form a 16-bit memory pointer (M) and X and Y form a 16-bit memory pointer (XY) typically used to store a return address when performing jumps.

In addition to the general purpose registers there are five special registers named J1, J2, the instruction register, the program counter and the ALU condition code register. J1 and J2 form a 16-bit memory pointer (J) typically used to store a jump address. J1 and J2 cannot be selected and J cannot be loaded hence why they are not therefore classed as general purpose. The instruction register holds the current instruction to be executed and can only be loaded. The program counter can only be loaded and selected from/to the address bus.

Details of the design, construction and testing of each register can be found in the following posts:

| |  |
|-|--------|
| **Registers**<br />*(in general)* | [General Purpose 8-bit Register]({{< relref "/posts/2014/04-16-register-design-general-purpose-8-bit" >}})<br />[General Purpose 16-bit Register]({{< relref "/posts/2019/07-15-16bit-register-design" >}}) |
