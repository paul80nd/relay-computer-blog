---
layout: post
title: 'ALU Construction: Logic Card Wire Wrap 1'
date: '2013-12-12T18:41:00.003Z'
author: Paul Law
tags:
- construction
- ALU
modified_time: '2014-01-25T10:35:15.050Z'
thumbnail: /img/posts/2013/2013-12-12-4002.jpg
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-3038273609152310614
blogger_orig_url: http://relaycomputer.blogspot.com/2013/12/alu-construction-logic-card-wire-wrap-1.html
---

Finally, with all the soldering now done, it's time to set about 
[wire wrapping](http://en.wikipedia.org/wiki/Wire_wrap) the ALU logic card. First up is the internal connections within 
each logic bit:

{% figure %}![ALU Logic Card (with internal wire links added)](/img/posts/2013/2013-12-12-0004.jpg){% endfigure %}

After wire wrapping a new set of wires I always run the multimeter 
over the board to double check everything is connected as intended. Again 
though, if there are any mis-wirings it's trivial to correct — just unwrap the 
wire and wrap in a new one. There is a bit of skill required to get a 
'perfect' wrap (where a bit of the insulation is taken around the post 
followed by nice tight coils above that) and mine are certainly not all 
perfect but bad ones can always be re-done.

Next is the internal 
power links in each logic bit and the links taking the results from each bit 
down to the LEDs:

{% figure %}
![ALU Logic Card (internal power &amp; result links added)](/img/posts/2013/2013-12-12-0005.jpg)
![ALU Logic Card (internal power &amp; result links added) (close up)](/img/posts/2013/2013-12-12-0006.JPG)
![ALU Logic Card (internal power &amp; result links added) (close up 2)](/img/posts/2013/2013-12-12-0007.jpg)
{% endfigure %}

It just so happens that when using my 
multimeter in the diode test mode it passes enough current to dimly light the 
12V LEDs which makes checking the display link wiring just that bit easier 
(and without the annoying bleep which it makes when there's no resistance on 
the link being tested).

Next post will be more of the same ... 
adding input and result links. 
