---
title: Assembly
---

Although the computer is primarily controlled by a set of 8-bit opcodes these can be tricky to work with when designing
more complicated programs. As with many computers we can use a higher-level language which is more readable for a human but
then will need converting into 8-bit opcodes for the computer to understand.

I have designed an assembly style language which is made up of a series of mnemonics that each map directly to an equivalent
opcode. This makes it easier to create and maintain programs for the computer but still works at the basic hardware level of
the computer. This is in contrast to a modern high-level language such as C# where each statement might compile down to a
series of opcodes required to perform that action.

The list of available instructions is as follows:

{{< mnemonic mov >}}
{{< mnemonic clr >}}
{{< mnemonic ldi >}}
{{< mnemonic arith >}}
{{< mnemonic logic >}}
{{< mnemonic branch >}}
{{< mnemonic opc >}}
