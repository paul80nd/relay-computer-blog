---
layout: post
title: 'ALU Construction: 1-bit Arithmetic Full Construction'
date: '2014-01-21T18:25:00.002Z'
author: Paul Law
tags:
- construction
- video
- ALU
modified_time: '2014-01-25T10:05:26.773Z'
thumbnail: /assets/img/posts/2014/2014-01-21-4000.jpg
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-5794749048591352002
blogger_orig_url: http://relaycomputer.blogspot.com/2014/01/alu-construction-1-bit-arithmetic-full.html
---

So, as mentioned in my last post this time 
I've put in the wire links and wraps needed to test the first bit of the 
arithmetic card. With these in place I can make sure everything works as it 
should before repeating it all eight times over to make the full 8-bit 
adder.

As a quick reminder here's the diagram for the 1-bit full 
adder:

{% figure %}
![](/assets/img/posts/2014/2014-01-21-0000.png)
{% endfigure %}

Reproducing this on the arithmetic card gives the following (on the 
front of the card):

{% figure %}
![ALU Arithmetic Card (1-bit close up)](/assets/img/posts/2014/2014-01-21-0001.jpg)
{% endfigure %}

and the following (on the back of the card):

{% figure %}![ALU Arithmetic Card (1-bit close up solder side)](/assets/img/posts/2014/2014-01-21-0002.jpg){% endfigure %}

To be able to test the circuit above I needed to temporarily hook 
up the positive and ground power (through 'cunning' use of crocodile clips) 
and then link up the Carry In, Input B and Input C. First time around I forgot 
about connecting the inverse Carry In as well as the regular Carry In so was 
getting odd results but with everything finally hooked up correctly everything 
works as intended.

Here's a picture of the circuit with relays 
inserted and inputs/power attached:

{% figure %}![ALU Arithmetic Card (1-bit close up with relays)](/assets/img/posts/2014/2014-01-21-0003.jpg){% endfigure %}

and another showing the whole arithmetic card along with the test 
board which supplies the inputs the circuit requires:

{% figure %}![ALU Arithmetic Card with Test Board](/assets/img/posts/2014/2014-01-21-0004.jpg){% endfigure %}

This time around the first four red buttons are hooked up to (from 
the left, in order): Input B, Input C, Carry In, ~Carry In. As usual, I've 
taken a quick video clip showing the circuit being tested:

{% include youtube-player.html id="V8kxI0QUauc" %}

Next job for this card will be to complete 
the remaining power rails underneath (another fiddly job) and then it's on to 
the wire wrapping. 