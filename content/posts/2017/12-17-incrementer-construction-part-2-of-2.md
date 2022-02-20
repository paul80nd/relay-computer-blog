---
layout: post
title: Incrementer Construction (Part 2 of 2)
date: '2017-12-17T12:32:00.000Z'
author: Paul Law
tags: 
modified_time: '2017-12-17T12:32:02.935Z'
thumbnail: /img/posts/2017/2017-12-17-4000.jpg
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-5285697635886901352
blogger_orig_url: http://relaycomputer.blogspot.com/2017/12/incrementer-construction-part-2-of-2.html
---

In my last post I covered the construction of the lower incrementer 
card which is effectively a 16-bit half adder. This time I'm going to cover 
constructing the upper card of the incrementer which is a 16-bit register that 
can hold on to the incremented value before pushing it back out to the address 
bus.

The backplane connectors and LEDs were soldered down in my 
last post but there's plenty more soldering to do. First up I can add the 
relay sockets, wire wrap posts and card interconnect wrap posts:

{% figure %}
![Upper incrementer card with added sockets and wire wrap posts](/img/posts/2017/2017-12-17-0000.jpg)
{% endfigure %}

This time around I haven't soldered on the 
stacking header that connects the two cards together just yet as I've found it 
gets in the way when wire wrapping or can be damaged if I'm not careful. I'll 
solder this on just before I bring the two cards together to form the 
incrementer unit as a whole.

Next up I can solder down the ground 
and power rails on the back of the card:

{% figure %}
![Upper incrementer card with added ground and power rails](/img/posts/2017/2017-12-17-0001.jpg)
{% endfigure %}

Nothing too unusual here besides there being quite a lot of 
relays on this card and consequently a lot of ground rails. So, soldering done 
(for now) ... on to the wire wrap ...

{% figure %}
![Upper incrementer card with added internal wire wrap links](/img/posts/2017/2017-12-17-0002.jpg)
![Upper incrementer card with added power wrap](/img/posts/2017/2017-12-17-0003.jpg)
![Upper incrementer card with added diodes](/img/posts/2017/2017-12-17-0004.jpg)
![Upper incrementer card with added outgoing address bus wrap](/img/posts/2017/2017-12-17-0005.jpg)
![Upper incrementer card with added incoming incremented value wrap](/img/posts/2017/2017-12-17-0006.jpg)
![Upper incrementer card with added control wire wrap](/img/posts/2017/2017-12-17-0007.jpg)
{% endfigure %}

Going through the pictures in order (top left to bottom 
right) we have: the internal register relay bits wiring; the power supply 
wiring; diodes added; the outbound address bus wiring via the gating relays; 
the inbound incremented value wiring (again, via gating relays) and finally 
the control wiring.

With the wire wrap done the card is pretty much 
complete - just needs the relays popping in ...

{% figure %}
![Completed upper incrementer card (front side)](/img/posts/2017/2017-12-17-0008.jpg)
![Completed upper incrementer card (rear side)](/img/posts/2017/2017-12-17-0009.jpg)
{% endfigure %}

... and that's it for the upper incrementer card. You might 
have noticed that this post has perhaps been a little brief and that's because 
there's not much to show that hasn't been seen elsewhere before. Partly that's 
because this is effectively just another register but also because I'm pretty 
settled on the construction method I'm using. One slight slip up on this card 
though is the use of diodes on the outbound address bus coming off the 
register bit relays. They're not actually necessary as there's no risk of 
backfeed messing up the register's value and it's come about because I've 
copy/pasted the design from another register and tweaked accordingly. In 
practice it won't cause a problem just meant the card was slightly more 
complex than it needed to be.

In my next post I'll sandwich the 
upper and lower cards together and then give the whole incrementer unit a 
test. 
