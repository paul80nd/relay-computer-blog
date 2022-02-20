---
layout: post
title: Program Counter Construction
date: '2017-11-11T10:25:00.001Z'
author: Paul Law
tags:
- completion
- construction
- registers
- video
modified_time: '2017-11-11T10:25:42.648Z'
thumbnail: /img/posts/2017/2017-11-11-4000.jpg
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-3439496089574914545
blogger_orig_url: http://relaycomputer.blogspot.com/2017/11/program-counter-construction.html
---

In my last couple of posts I've been slightly distracted by some 
'miscellany' but now I return to form and crack on with constructing the 
program counter. The program counter is effectively two 8bit registers bolted 
together and wired out slightly differently using the address bus rather than 
data bus. As usual I'll start with soldering down the LEDs:

{% figure %}
![Program Counter LEDs](/assets/img/posts/2017/2017-11-11-0000.jpg)
![Reverse side of Program Counter LEDs](/assets/img/posts/2017/2017-11-11-0001.jpg)
{% endfigure %}

This 
should all be very familiar now and there's nothing unusual about these LEDs 
compared to previous cards. I'm just about at the point now where I've 
'perfected' the way of soldering and wiring these up after many iterations on 
previous cards. Next up is backplane connectors and relay sockets:

{% figure %}
![Program Counter with added sockets (front view)](/assets/img/posts/2017/2017-11-11-0002.jpg)
![Program Counter with added sockets (rear view)](/assets/img/posts/2017/2017-11-11-0003.jpg)
{% endfigure %}

Again, all very similar to previous cards. To be frank though I'm 
starting to find fitting the individual relay sockets a bit tedious which 
means it's time to rethink how I approach this. On the upcoming memory card 
I'll be tackling these in a slightly different way which will make 
construction a bit quicker - I'll save that for next time though. Next up is 
the relay coil diodes:

{% figure %}
![Program Counter with added diodes (front view)](/assets/img/posts/2017/2017-11-11-0004.jpg)
![Program Counter with added diodes (rear view)](/assets/img/posts/2017/2017-11-11-0005.jpg)
{% endfigure %}

As with the relay sockets I've got something up my sleeve for the 
diodes which I'll try out on the upcoming memory card. Next job is the power 
rails:

{% figure %}![Program Counter with added power rails (rear view)](/assets/img/posts/2017/2017-11-11-0006.jpg){% endfigure %}

This is another area where I'm increasingly getting 'a bit bored' 
and so on the next card I'll do away with the individual ground wires and just 
solder down a continuous bare wire for the ground rails just as I do for the 
LEDs. This'll save cutting and trimming individual wires which is fiddly and 
time consuming. The power (+12V) rail will need to keep on using insulated 
wire as it'll often cross the path of ground rails and other components. 
Flipping the card back over the next job is the wire wrap:

{% figure %}![Program Counter with added wire wrap](/assets/img/posts/2017/2017-11-11-0007.jpg){% endfigure %}

The wire 
wrap is, again, pretty similar to the other completed registers. I always find 
the wire wrap on sparsely populated cards such as this less aesthetically 
pleasing for some reason - it just seems 'straggly'. Fortunately on the 
upcoming upper memory card there's tons of wire wrap on a tightly packed card 
so that should look a bit nicer IMHO. Anyhoo, here's a close up of the 
straggly wiring:

{% figure %}![Close up of Program Counter wire wrap](/assets/img/posts/2017/2017-11-11-0008.jpg){% endfigure %}

Final 
job is to pop in the relays and then that's that for the program counter 
construction:

{% figure %}
![Program Counter with added relays](/assets/img/posts/2017/2017-11-11-0009.jpg)
![Program Counter with added relays (close up)](/assets/img/posts/2017/2017-11-11-0010.jpg)
{% endfigure %}

You might have picked up from the tone of my writing that I'm not 
a fan of constructing registers. It's not the register's fault - it's just 
that the computer has so many of them and they're all pretty much identical. 
With the program counter done there'll still be the incrementer register and 
then registers J, M and XY to complete. I'm going to try and find ways of 
constructing these more efficiently and also try and space them out so I don't 
have to do them all at once. Oh well, no one forced me to make a computer out 
of relays.

As always I've created a video which gives an overview 
of the card and shows it working in isolation of the computer as well as when 
plugged in to the computer.

{{< youtube geT5kJOs29c >}}

Next up will be the memory card construction which 
is far more interesting than boring old registers. More interesting and more 
complicated ... so much so in fact that the construction will be split over 
two posts as there'll be lots to talk about. 
