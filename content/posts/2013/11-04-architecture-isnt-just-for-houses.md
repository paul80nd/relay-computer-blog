---
layout: post
title: Architecture isn't just for houses
date: '2013-11-04T08:51:00.000Z'
author: Paul Law
tags:
- Architecture
modified_time: '2014-01-26T10:57:11.417Z'
thumbnail: /img/posts/2013/2013-11-04-4000.png
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-2932307411612469043
blogger_orig_url: http://relaycomputer.blogspot.com/2013/11/architecture-isnt-just-for-houses.html
---

So, with the scene now set (see previous posts) let's dive right in and take a 
look at the system architecture I'll be building my computer upon ... here it 
is ...

{% figure caption:"System Architecture for a Relay Computer[^1]" %}
![System Architecture for a Relay Computer](/assets/img/posts/2013/2013-11-04-0000.png)
{% endfigure %}

This is a direct copy of the architecture Dr Harry Porter designed when creating 
[his own relay computer](http://web.cecs.pdx.edu/~harry/Relay/index.html). 
The architecture has the following features:

* 8-bit data bus
* 16-bit address bus
* 8 x 8-bit general purpose registers (A, B, C, D, M1, M2, X, Y)
  * Registers M1 and M2 combine to make a read only 16-bit register
  * Registers X and Y combine to make a general purpose 16-bit register
* 8-bit Arithmetic Logic Unit with 3 condition registers (Zero, Carry and Sign)
* 16-bit jump register (J)
* 8-bit instruction register
* 16-bit program counter (PC) with increment unit
* 32K x 8-bit SRAM

I personally think this design has a 
really good balance of functionality vs complexity. Some 'home-brew' 
architectures may have more registers or extra functions, in the ALU for 
example, but of course that requires more relays, more construction and extra 
cost. Equally, some may have less registers and maybe less functions which 
means although easier to construct the developer writing programs for the 
machine then has more work to do. A good example of this would be subtraction 
which could be implemented wholly in the hardware design if desired but would 
certainly add additional complexity to the ALU. However, you can subtract 
number B from A but making B negative and then adding A and B together. Now 
the ALU only needs to be able to negate numbers and add numbers — no special 
subtract circuit is required. We can even take this a step further by removing 
the need for a special 'negater' by performing a bitwise NOT and then 
incrementing by 1 (due to the 
[special trick](http://simple.wikipedia.org/wiki/Signed_number_representations) 
computers use to store signed numbers in 
binary). As you can see though, what was one step for a programmer is now 
several and as a result the computer will take longer to produce the 
result.

Right, 
for those familiar with computer architecture you can probably skip my next 
couple of posts as that's the high level architecture pretty much summed up. 
For those who aren't — and I'm particularly thinking of my poor friends and 
family who I've somehow browbeaten into reading my posts — allow me to have a 
stab at explaining what all the things in the list above actually are and how 
they go in to making a working computer.

---

[^1]: [Image](http://web.cecs.pdx.edu/~harry/Relay/RelayPaper.htm#Overall%20System%20Architecture) reproduced here with the kind permission of Dr Harry Porter
