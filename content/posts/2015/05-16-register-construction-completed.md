---
layout: post
title: 'Register Construction: Completed Instruction Register Full Test'
slug: register-construction-completed
date: '2015-05-16T10:19:00.001+01:00'
author: Paul Law
cards:
- register-i
tags:
- completion
- registers
- video
modified_time: '2015-06-07T20:38:31.502+01:00'
thumbnail: /img/posts/2015/2015-05-16-4000.jpg
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-6166519978545466354
blogger_orig_url: http://relaycomputer.blogspot.com/2015/05/register-construction-completed.html
---

Following on from my last post, and after popping in some relays, the 
instruction register is complete and looks like this:

{{< fig >}}
![Completed Instruction Register (front view)](/img/posts/2015/2015-05-16-0000.jpg)
![Completed Instruction Register (rear view)](/img/posts/2015/2015-05-16-0001.jpg)
{{< /fig >}}

As usual I've put a video together that 
demonstrates this card in operation. In this video I give a quick overview of 
the card and then demonstrate loading values in to the register and 
instruction bus. I also  demonstrate gating part of the instruction bus on to 
the data bus for the I2B (Immediate to Bus) functionality.

{{< youtube 42g6BejUVUA >}}

That's about all there is to say for this 
card as it's relatively simple and shares much of its design with the other 
register cards of the computer. The next card is also a simple one ... the 
decoder. This will take the value on the instruction bus and decide which 
instruction class it represents. This card will also be the first where I'll 
only partially construct it — just enough so that it can handle the SETAB, 
MOV8 and ALU instruction classes.
