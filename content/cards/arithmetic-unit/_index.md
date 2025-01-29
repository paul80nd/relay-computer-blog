---
title: "ALU Arithmetic Unit"
---

The Arithmetic Unit is one of the three cards making up the broader
[Artihmetic Logic Unit (ALU)]({{< relref "/pages/alu" >}}).

This card primarily handles 8-bit addition operations (adding together the inputs from
[register B and C]({{< relref "/cards/register-bc" >}})) but can also perform an 8-bit increment (adding 1 to the input
from register B). In either case the output from this card can then be loaded into
[register A or D]({{< relref "/cards/register-ad" >}})).
