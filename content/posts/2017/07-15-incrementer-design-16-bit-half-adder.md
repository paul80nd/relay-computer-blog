---
layout: post
title: 'Incrementer Design: 16-bit Half Adder'
date: '2017-07-15T14:57:00.000+01:00'
author: Paul Law
tags:
- incrementer
- design
modified_time: '2017-07-15T14:57:02.555+01:00'
thumbnail: /img/posts/2017/2017-07-15-4000.png
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-1776061017539662311
blogger_orig_url: http://relaycomputer.blogspot.com/2017/07/incrementer-design-16-bit-half-adder.html
---

In the last post I introduced the 
design for the 1-bit Half Adder. This post covers connecting sixteen of these 
units together to make the 16-bit Half Adder.

So, diving straight 
in, here is what sixteen of the 1-bit Half Adder units look like all together 
on the usual 55 x 40 hole pad board:

{% figure caption:"16 x 1-bit Half Adder Units ([larger](/img/posts/2017/2017-07-15-1000.png))" %}![16 x 1-bit Half Adder Units](/img/posts/2017/2017-07-15-0000.png){% endfigure %}

Each half adder 
bit is made up of two relays (as seen in the previous blog post) and starting 
at the bottom right of the diagram above the bit stages run upwards from 0 to 
3 and then continuing on in rising columns to the left until bit 15 at the top 
left. Between each bit the carry out lines of the prior bit are connected to 
the carry in and the carry out lines connect to the carry in of the next bit 
effectively chaining each bit together to form a ripple carry adder 
circuit.

We can now connect up the inputs and outputs of the 16-bit 
half adder as follows:

{% figure caption:"16-bit half adder with input and output connections ([larger](/img/posts/2017/2017-07-15-1001.png))" %}![16-bit half adder with input and output connections](/img/posts/2017/2017-07-15-0001.png){% endfigure %}

Each bit of the half adder is directly connected to the address 
bus meaning that the adder is always active even when the output isn't needed. 
As we want to increment the address bus value we also need to set the carry in 
signal of the first half adder bit. This line is therefore permanently tied 
off to the power supply. The output (the incremented address bus) is taken to 
an inter-board connector ... more on this later. We ignore the carry out of 
bit 15 meaning that if all bits of the address bus are set the result of the 
increment will be all bits off.

As with other cards in the computer 
it's always useful to observe the value a card is producing ... and you can 
never have too many LEDs of course ... so the final step is to add a row of 
LEDs across the front of the card:

{% figure caption:"Final half adder ([larger](/img/posts/2017/2017-07-15-1002.png))" %}![Final half adder](/img/posts/2017/2017-07-15-0002.png){% endfigure %}

With this design we can now 
take a value on the address bus and increment it by one. This is only half the 
story though as to be useful we need to store this incremented value in a 
register so that we can place it back on the address bus when needed. The 
incrementer unit has a built in register and that's what I'll cover in the 
next post. 
