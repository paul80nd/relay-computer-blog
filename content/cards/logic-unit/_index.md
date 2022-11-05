---
title: "ALU Logic Unit"
---

The Logic Unit is one of the three cards making up the broader 
[Artihmetic Logic Unit (ALU)]({{< relref "/pages/alu" >}}). 

This card handles 8-bit binary logic operations (AND, OR, XOR of the inputs from 
[register B and C]({{< relref "/cards/register-bc" >}})) and 8-bit unary logic operations (NOT and SHL of the inputs from register B). In all cases the output from this card can then be loaded into 
[register A or D]({{< relref "/cards/register-ad" >}}).
