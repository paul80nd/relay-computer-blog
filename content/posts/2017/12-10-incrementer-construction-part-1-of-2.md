---
layout: post
title: Incrementer Construction (Part 1 of 2)
date: '2017-12-10T11:07:00.002Z'
author: Paul Law
tags:
- incrementer
- construction
modified_time: '2017-12-10T11:07:19.188Z'
thumbnail: /img/posts/2017/2017-12-10-4000.jpg
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-4439504623012249903
blogger_orig_url: http://relaycomputer.blogspot.com/2017/12/incrementer-construction-part-1-of-2.html
---

We're getting nearer and nearer to a computer that can run though a 
program in memory rather than just a single instruction ... we've got memory 
to hold the program and a program counter to point to the current instruction 
in memory. Now it's time to construct the 16-bit incrementer which will be 
used to advance the program counter on to point at the next instruction.

As the incrementer is spread over two cards I'll likewise spread the 
construction over two blog posts focussing this time on the lower card. Before 
that though I'll get a head start and solder down the LEDs and backplane 
connectors for both cards:

{% figure %}
![Incrementer cards with LEDs and backplane connectors (type X)](/img/posts/2017/2017-12-10-0000.jpg)
![Lower incrementer card LEDs (close up)](/img/posts/2017/2017-12-10-0001.jpg)
![Upper incrementer card LEDs (close up)](/img/posts/2017/2017-12-10-0002.jpg)
![Incrementer cards solder side (lower card at top, upper card beneath)](/img/posts/2017/2017-12-10-0003.jpg)
{% endfigure %}

For the lower card there are 16 red 
LEDs which show whatever value is currently on the address bus plus one (and 
if nothing is on the address bus then it'll show a value of one). The upper 
card likewise has 16 red LEDs flanked by a yellow LED on the left and a green 
LED on the right. This is the register part of the incrementer so what these 
LEDs show is the current held 16-bit value with the yellow LED lit when 
loading and the green LED lit when reading back out to the address bus.

Right, I'll leave the upper card there and pick it up again in my next 
post. Let's focus on the lower card ...

{% figure %}
![Lower incrementer card with added sockets and wire wrap posts](/img/posts/2017/2017-12-10-0004.jpg)
{% endfigure %}

In the picture above I've soldered down 
all the relay sockets (using the same long column pattern I used on the upper 
memory card) along with the wire wrap posts. There's also the card 
interconnects at the top left which take the output from the 16-bit adder off 
to the upper card's register so the value can be held and then pushed out to 
the address bus. This card will also need some wire wrap posts connected to 
12V so I'll add those next:

{% figure %}
![Lower incrementer card with added 12V wire wrap posts](/img/posts/2017/2017-12-10-0005.jpg)
{% endfigure %}

... and viewed from the solder side of 
the card it now looks like this ...

{% figure %}
![Lower incrementer card (solder side) with added power/ground lines](/img/posts/2017/2017-12-10-0006.jpg)
{% endfigure %}

As with other recent cards all the vast 
majority of ground lines are straight lengths of bare wire (which speeds up 
construction) whilst power lines are insulated wire. The only exception here 
is the last part of the ground wire which is insulated. There's a reasonable 
amount of spare space on this card which could be utilised in the future if 
needed (and if I have something that needs the same backplane connector 
set).

Right, soldering done. Let's pop the diodes in and get the 
card wire wrapped:

{% figure %}
![Lower incrementer card with added diodes](/img/posts/2017/2017-12-10-0007.jpg)
![Lower incrementer card with added internal wiring](/img/posts/2017/2017-12-10-0008.jpg)
![Lower incrementer card with added LED wiring](/img/posts/2017/2017-12-10-0009.jpg)
![Lower incrementer card with added power wiring](/img/posts/2017/2017-12-10-0010.jpg)
![Lower incrementer card with incoming address bus wiring](/img/posts/2017/2017-12-10-0011.jpg)
![Lower incrementer card with added outbound incremented value wiring](/img/posts/2017/2017-12-10-0012.jpg)
{% endfigure %}

Working through the images in order we 
have: diodes inserted; internal adder wiring; LED wiring; power wiring; 
incoming address bus wiring and finally outgoing incremented value wiring. As 
usual I've bundled wires together with a wire clip to keep everything neat and 
tidy.

With all the wiring complete the last job is to pop the 
relays in and the lower incrementer card is complete:

{% figure %}
![Completed lower incrementer card (top side)](/img/posts/2017/2017-12-10-0013.jpg)
![Completed lower incrementer card (solder side)](/img/posts/2017/2017-12-10-0014.jpg)
{% endfigure %}

Due to the way the card is designed 
it's possible to test the lower card in isolation of anything else and I'll 
show that in the usual video when I've completed the incrementer as a whole 
(sorry for the tease but those videos take ages to put together ;)

In my next post I'll construct the upper incrementer card which is 
effectively just a register ... or as I'm beginning to refer to them ... YARs 
... yet another register. 
