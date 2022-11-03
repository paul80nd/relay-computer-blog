---
layout: post
title: 'ALU Construction: Completed Control Card Full Test'
slug: alu-construction-completed-control-card
date: '2014-03-16T08:59:00.005Z'
author: Paul Law
cards:
- control-unit
tags:
- completion
- construction
- video
- alu
modified_time: '2014-03-16T09:04:41.992Z'
thumbnail: /img/posts/2014/2014-03-16-4000.jpg
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-6829928647556611617
blogger_orig_url: http://relaycomputer.blogspot.com/2014/03/alu-construction-completed-control-card.html
---

The ALU Control Card is now complete and looks like this:

{{< fig >}}![ALU Control Card](/img/posts/2014/2014-03-16-0000.jpg){{< /fig >}}

This card was, on the 
whole, much simpler and quicker to put together than previous cards (despite 
me initially messing up the zero detection relay positions). As the card isn't 
too busy I've arranged the wiring away from the empty part of the card so 
there's room for future expansion or modifications if needed in the future. 
Not entirely sure what they'd actually be but you never know.

As is 
now customary when I've completed a card I've created a video replete with 
voiceover track attempting to demonstrate the card in action and explain 
what's going on. Here it is:

{{< youtube ZmQDZCt3m10 >}}

The 
completion of the control card actually represents a bit of a mini-milestone 
... combined with the logic and arithmetic cards I now have a potentially 
fully functional ALU. I say potentially because I don't actually have any 
physical way of connecting the three cards together yet and so my next task 
will be to complete the card backplane ... once that's done then I should be 
able to demonstrate the full ALU.

Following completion of the 
backplane then I'll start work on the B/C register card so that I can load 
values into the ALU from the data bus (rather than directly via the B/C bus) 
and then following that it'll be the A/D register which can then store the 
result produced by the ALU. With all five cards in place (which represents a 
fair amount of effort) it should be possible to perform simple operations in 
full such as subtraction and multiplication and to show how the ALU would 
perform the logic/arithmetic behind conditional jumps (such as value = 0, 
valueA &lt; valueB, valueA &lt;&gt; valueB etc).

In other news I've 
also received the aluminium profile for the first half of my enclosure so I'll 
post about how that's going pretty soon ... although after putting some of the 
case together already I expect it'll take a while for my hands to recover from 
driving the self tapping screws in before I'll be able to type again. 
