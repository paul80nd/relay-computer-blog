---
title: Control Summary
linked-cards:
- clock
- controller
- decoder
- incrementer
- memory
- sequencer
---

The computer is controlled by a series of instructions held in memory (a computer program) that are loaded into the instruction register one at a time and executed. The execution of an instruction is performed by running a clock signal through a sequencer which produces a series of pulses. These pulses are then used to operate the control lines of the computer at the right time and in the right order appropriate for the current instruction. Every time an instruction is performed a program counter is incremented such that the counter points at the next instruction in memory. Depending on the instruction being performed though the program counter may jump to another point in the program entirely.

