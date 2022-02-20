---
layout: post
title: Completed ALU
date: '2014-03-30T12:15:00.003+01:00'
author: Paul Law
tags:
- completion
- video
- ALU
modified_time: '2014-03-30T12:15:32.911+01:00'
thumbnail: /img/posts/2014/2014-03-30-4000.jpg
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-3486129073758146018
blogger_orig_url: http://relaycomputer.blogspot.com/2014/03/completed-alu.html
---

Following my last post on the completed backplane I'm now in a position to 
connect all the other completed cards together to test the full ALU. The ALU 
is made up of the logic, arithmetic and control cards and here's how those 
cards look when plugged in to the backplane:

{{< fig >}}![ALU Cards attached to Backplane](/img/posts/2014/2014-03-30-0000.jpg){{< /fig >}}

... and 
when viewed from the top and back ...

{{< fig >}}
![ALU Card Pack (viewed from top)](/img/posts/2014/2014-03-30-0001.jpg)
![ALU Card Pack (viewed from rear)](/img/posts/2014/2014-03-30-0002.jpg){{< /fig >}}

... 
and finally here's the four cards laid out side by side:

{{< fig >}}![Three ALU Cards + Backplane](/img/posts/2014/2014-03-30-0003.jpg){{< /fig >}}

Surprisingly enough with everything connected together it all 
appears to work OK with only one small exception ... I was finding that the 
carry out from the arithmetic card wasn't being received by the control card. 
After much digging around with a multimeter I found the problem wasn't the 
backplane as suspected but rather that the required wiring had been missed out 
on the arithmetic card. With the addition of the missing wire link the carry 
out function was restored. However, this then highlighted a slight design flaw 
in that the carry out line is passed out to the control bus even when the add 
or increment result is not active. This means it's possible to set the carry 
condition register by mistake when gating a logic result on to the data bus. 
In contrast the zero and sign conditions are driven directly from the data bus 
so could only ever be set by a gated result from the arithmetic or logic 
cards. The fix for the over zealous carry out will be to pop an extra gating 
relay in on the arithmetic card so that the carry out line is cut off until 
either the add or increment result is being gated out.

As usual 
I've posted a video to YouTube demonstrating the completed ALU. This one is a 
little bit longer than my previous ones as there's a bit more to show this 
time but if nothing else it's reminded me that I need to switch internet 
provider ... it took 4 hours to upload the full HD video at around 2Gb in 
size. Anyho, here is said video:

{{< youtube 2PS19gU3534 >}}

With the 
ALU now complete and working as expected I've checked off the first major 
milestone on the journey to building my relay computer. Next up will be 
designing and constructing the B/C and A/D register cards which will then 
allow driving the ALU directly from the data bus, storing ALU results and 
passing values between the four registers. Before that though the cards lack 
physical support when connected to the backplane and I'm concerned that 
they'll get damaged at some point so it's time to focus a bit more on the 
enclosure again and get the card pack floor and ceilings laser cut and fitted 
and get the ALU installed in the enclosure. 
