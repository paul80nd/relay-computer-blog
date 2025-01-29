---
title: "Register B/C"
---

The B/C Register is one of the [general purpose registers]({{< relref "/pages/registers">}}) within the relay computer. It can hold two 8-bit values and can read and write from/to the data bus.

Additionally this register also directly feeds in to the [ALU]({{< relref "/pages/alu" >}})
providing its inputs. As such a value can't be loaded to these registers whilst an ALU operation is in progress.
