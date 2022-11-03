---
layout: post
title: Incrementer Test
date: '2018-01-07T13:04:00.000Z'
author: Paul Law
cards:
- incrementer
tags:
- incrementer
- completion
- video
modified_time: '2018-01-07T13:04:11.966Z'
thumbnail: /img/posts/2018/2018-01-07-4000.jpg
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-7987843622087641592
blogger_orig_url: http://relaycomputer.blogspot.com/2018/01/incrementer-test.html
---

In my last two posts I covered the construction of the upper and lower 
incrementer cards. The lower card is a 16-bit half adder and the upper card is 
a 16-bit register. Together they form the incrementer unit as a whole which 
can add one to whichever value is currently on the address bus and then hold 
that value ready for pushing back out to the address bus. More often than not 
the incrementer will be used to push the program counter on one place but in 
theory it can be used to increment any value put on the address bus.

Here are the two incrementer cards side-by-side:

{{< fig >}}
![Incrementer Cards (front side)](/img/posts/2018/2018-01-07-0000.jpg)
![Incrementer Cards (rear side)](/img/posts/2018/2018-01-07-0001.jpg)
{{< /fig >}}

... and 
when stacked together they look like this ...

{{< fig >}}
![Incrementer Unit (viewed from front)](/img/posts/2018/2018-01-07-0002.jpg)
![Incrementer Unit (viewed from front right)](/img/posts/2018/2018-01-07-0003.jpg)
{{< /fig >}}

As in my other 'completion' blog posts I've put together a video which gives 
an overview of the incrementer and shows it in use:

{{< youtube GfK5cpXfPv8 >}}

With the incrementer unit now complete we're incredibly close to a computer 
that can step through a program held in memory. The last step is to update the 
sequencer and control units to implement the fetch and load cycle. This will 
load the current instruction pointed to by the program counter into the 
instruction register and then the program counter is incremented to point at 
the next instruction. 
