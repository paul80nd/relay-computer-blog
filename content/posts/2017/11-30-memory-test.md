---
layout: post
title: Memory Test
date: '2017-11-30T21:15:00.000Z'
author: Paul Law
cards:
- memory
tags:
- completion
- memory
- video
modified_time: '2017-11-30T21:15:34.135Z'
thumbnail: /img/posts/2017/2017-11-30-4000.jpg
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-2149428779006990734
blogger_orig_url: http://relaycomputer.blogspot.com/2017/11/memory-test.html
---

I've covered the construction of the upper and lower memory cards in 
my last two posts ... it's now time to bring those two cards together to form 
the memory unit proper and give it all a test.

Here's the upper 
card (in close up and at a rakish angle) ...

{{< fig >}}
![Upper memory card (top side)](/img/posts/2017/2017-11-30-0000.jpg)
![Upper memory card (rear side)](/img/posts/2017/2017-11-30-0001.jpg){{< /fig >}}

... and 
here's the lower memory card (at an equally rakish angle) ...

{{< fig >}}
![Lower memory card (top side)](/img/posts/2017/2017-11-30-0002.jpg)
![Lower memory card (rear side)](/img/posts/2017/2017-11-30-0003.jpg){{< /fig >}}

... and 
when sandwiched together here's how the memory unit as a whole looks:

{{< fig >}}
![Memory Unit (viewed from top)](/img/posts/2017/2017-11-30-0004.jpg)
![Memory Unit (viewed from the front)](/img/posts/2017/2017-11-30-0005.jpg)
![Memory Unit (viewed from the rear)](/img/posts/2017/2017-11-30-0006.jpg)
{{< /fig >}}

As 
for all the cards constructed before it I can whip out my trusty breadboard to 
test the memory unit in isolation before hooking it up to the rest of the 
computer:

{{< fig >}}![Memory unit with testing breadboard attached](/img/posts/2017/2017-11-30-0007.jpg){{< /fig >}}

Here I've hooked the data bus up to the bar display but it 
can be switched over to the left hand DIP switches depending on whether I'm 
reading or setting a value from/to memory. The address bus comes over to the 
middle and right DIP switches. The eagle eyed of you out there might have 
noticed that leaves us four bits short of the full address bus but that's OK 
for testing purposes. Finally the three switches on the left and wired in to 
the read, write and B2M (bus to memory) control lines of the Control Y bus.

Anyhoo, it's video time. Here is an overview of the memory unit, 
testing it outside of the computer with the breadboard and then finally 
testing it inside the computer:

{{< youtube s0lELXLXHPY >}}

With the memory unit complete we're another step closer to a computer that 
can step through a program held in memory. The next part of the puzzle is the 
incrementer which will allow the computer to add one to whatever value is on 
the address bus and then subsequently place that value back on the address 
bus. Typically this'll be used to increment the program counter so it points 
to the next instruction in memory. Once that's done we just need to tweak the 
sequencer and controller and it's there. 
