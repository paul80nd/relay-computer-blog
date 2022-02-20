---
title: Registers Summary
---

The computer has eight general purpose 8-bit registers named A, B, C, D, M1, M2, X and Y. Although each can be used generally some of the registers have additional specific uses. Register B and C feed the ALU inputs, M1 and M2 form a 16-bit memory pointer (M) and X and Y form a 16-bit memory pointer (XY) typically used to store a return address when performing jumps.

In addition to the general purpose registers there are five special registers named J1, J2, the instruction register, the program counter and the ALU condition code register. J1 and J2 form a 16-bit memory pointer (J) typically used to store a jump address. J1 and J2 cannot be selected and J cannot be loaded hence why they are not therefore classed as general purpose. The instruction register holds the current instruction to be executed and can only be loaded. The program counter can only be loaded and selected from/to the address bus.

Details of the design, construction and testing of each register can be found in the following posts:

| | Design | Construction | Testing |
|-|--------|--------------|---------|
| **Registers**<br />*(in general)* | [General Purpose 8-bit Register]({% post_url 2014-04-16-register-design-general-purpose-8-bit %})<br />[General Purpose 16-bit Register]({% post_url 2019-07-15-16bit-register-design %}) | | |
| **A / D Register** | [A and D 8-bit Registers]({% post_url 2014-04-20-register-design-and-d-8-bit-registers %}) | [A and D 8-bit Registers]({% post_url 2014-06-22-register-construction-and-d-8-bit %}) | [A and D 8-bit Registers Full Test]({% post_url 2014-06-28-register-construction-completed-and-d-8 %}) |
| **B / C Register** | [Dual Output 8-bit Register]({% post_url 2014-04-24-register-design-dual-output-8-bit %})<br />[B and C 8-bit Registers]({% post_url 2014-05-11-register-design-b-and-c-8-bit-registers %}) | [B and C 8-bit Registers]({% post_url 2014-05-24-register-construction-b-and-c-8-bit %}) | [B and C 8-bit Registers Full Test]({% post_url 2014-05-26-register-construction-completed-b-and-c %}) |
| **Increment Register** | [Increment Register]({% post_url 2017-07-17-incrementer-design %}) | | |
| **Instruction Register** | [Instruction Register]({% post_url 2014-12-01-register-design-instruction-register %}) | [Instruction Register]({% post_url 2015-05-09-register-construction-instruction %}) | [Instruction Register Full Test]({% post_url 2015-05-16-register-construction-completed %}) |
| **Program Counter** | [Program Counter]({% post_url 2017-05-29-register-design-program-counter %}) | [Program Counter]({% post_url 2017-11-11-program-counter-construction %}) | |
