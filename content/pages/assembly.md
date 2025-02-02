---
title: RC Assembly Language
---

Although the computer is primarily controlled by a set of 8-bit opcodes these can be tricky to work with when designing
more complicated programs. As with many computers we can use a higher-level language which is more readable for a human but
then will need converting into 8-bit opcodes for the computer to understand.

I have designed an assembly style language which is made up of a series of mnemonics that each map directly to an equivalent
opcode. This makes it easier to create and maintain programs for the computer but still works at the basic hardware level of
the computer. This is in contrast to a modern high-level language such as C# where each statement might compile down to a
series of opcodes required to perform that action.

If you'd like to try out my assembly language there's an [editor available here]({{< param editor_url >}}) which also has additional documentation. If you'd like to know even more you can find source code in my GitHub repo as follows:

* [rcasm](https://github.com/paul80nd/rcasm) - the assembler itself (written in TypeScript)
* [rcasm-languageservice](https://github.com/paul80nd/rcasm-languageservice) - wraps the assembler adding language 'smarts' such as code folding detection, hover-over documentation and so on.
* [monaco-editor](https://github.com/paul80nd/monaco-editor) - a fork of the Microsoft Monaco 'in-browser' code editor customised to use my rcasm language service and adds syntax highlighting.
* [relay-computer-ide](https://github.com/paul80nd/relay-computer-ide) - the complete editor which combines the rcasm assembler with the customised Monaco editor. A simplistic emulator for my relay computer is also included so that programs can be tried and tested.

The list of available instructions is as follows:

{{< mnemonic mov >}}
{{< mnemonic clr >}}
{{< mnemonic ldi >}}
{{< mnemonic arith >}}
{{< mnemonic logic >}}
{{< mnemonic branch >}}
{{< mnemonic halt >}}
{{< mnemonic opc >}}
