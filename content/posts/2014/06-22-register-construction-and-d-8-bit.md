---
layout: post
title: 'Register Construction: A and D 8-bit Registers'
slug: register-construction-and-d-8-bit
date: '2014-06-22T18:35:00.003+01:00'
author: Paul Law
tags:
- construction
- registers
modified_time: '2014-06-22T18:35:38.106+01:00'
thumbnail: /img/posts/2014/2014-06-22-4000.jpg
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-7305171550749445093
blogger_orig_url: http://relaycomputer.blogspot.com/2014/06/register-construction-and-d-8-bit.html
---

I haven't posted in nearly a month but in between bouts of enjoying 
the rare British sunshine I've been  plodding away at the A/D register card 
and it's now finally ready for testing. The A/D register card is effectively a 
slightly simplified version of the previously covered B/C card and so a lot of 
the content in this post is going to be pretty similar. Despite this though 
I'll go through all the steps taken to construct the A/D register card for the 
sake of completness ... primarily in photos and then with extra text where 
anything odd or different came up compared with the B/C card.

The 
first step was to solder down the LEDs and ribbon cable sockets. Here's some 
pictures, front and back, of the card following this first round of 
soldering:

{% figure %}
![A/D Register Card with initial soldering completed (front)](/img/posts/2014/2014-06-22-0000.jpg)
![A/D Register Card with initial soldering completed (back)](/img/posts/2014/2014-06-22-0001.jpg)
{% endfigure %}

I've continued the trend of applying a line of super glue 
to the board when placing the LEDs (to stop them moving about while soldering) 
and I've also removed the negative wrapping post behind each LED again to make 
wiring up easier later on. Continuing the usual theme of mishaps in this area 
I've had yet another go at trying to find a nice neat way of soldering up the 
cathodes on the LEDs ... this time I've folded the cathode leg over a piece of 
wire and then soldered it down. This seems a bit better but the solder doesn't 
always take that well to the wire so I've had to resolder a couple of the 
joints a few times. Close up it looks like this:

{% figure %}
![LED Cathode Soldering (close up)](/img/posts/2014/2014-06-22-0002.jpg)
![LED Cathode Soldering (close up 2)](/img/posts/2014/2014-06-22-0003.jpg)
{% endfigure %}

Following on from that the next job was to solder down the relay 
sockets and again I've used the two rows of 5 pin sockets which proved 
successful on the B/C card. Front and back it looks like this:

{% figure %}
![Added Relay Sockets (front)](/img/posts/2014/2014-06-22-0004.jpg)
![Added Relay Sockets (back)](/img/posts/2014/2014-06-22-0005.jpg)
{% endfigure %}

Next up is 
the wiring wrapping header pins ...

{% figure %}
![Added Wire Wrap Posts (front)](/img/posts/2014/2014-06-22-0006.jpg)
![Added Wire Wrap Posts (back)](/img/posts/2014/2014-06-22-0007.jpg)
{% endfigure %}

... and 
then the 'flyback' protection diodes come in next ...

{% figure %}
![Added Diodes (front)](/img/posts/2014/2014-06-22-0008.jpg)
![Added Diodes (back)](/img/posts/2014/2014-06-22-0009.jpg)
{% endfigure %}

This final bit of 
soldering was to put down the power and ground lines on the solder side of the 
board:

{% figure %}
![A/D Register Card with power and ground lines completed](/img/posts/2014/2014-06-22-0010.jpg)
{% endfigure %}

This stage was pretty much consistent with previous cards 
so nothing new to mention here other than I'd run out of black wire for the 
negative lines so I've moved on to my stash of grey wire (it's a kind of black 
after all).

With all the soldering done the final steps are to lay 
down all the wire wraps. This is done in stages by laying down each family of 
related connections then laying the next family on top of that. Here's four 
pictures of the wraps building up over time:

{% figure %}
![A/D Register Card wire wraps stage 1](/img/posts/2014/2014-06-22-0011.jpg)
![A/D Register Card wire wraps stage 2](/img/posts/2014/2014-06-22-0012.jpg)
![A/D Register Card wire wraps stage 3](/img/posts/2014/2014-06-22-0013.jpg)
![A/D Register Card wire wraps stage 4](/img/posts/2014/2014-06-22-0014.jpg)
{% endfigure %}

The top left picture shows the first two wraps: the black internal 
connections and the red power connections. The top right picture shows the 
next two wraps: the blue data bus in/out connections and the black LED 
connections. The bottom left picture shows the green internal result 
connections wrap added and the last wrap is shown in the bottom right picture 
which is the yellow control connections.

Finally here is three 
close up pictures of the final wire wraps:

{% figure %}
![A/D Register Card (left)](/img/posts/2014/2014-06-22-0015.jpg)
![A/D Register Card (middle)](/img/posts/2014/2014-06-22-0016.jpg)
![A/D Register Card (right)](/img/posts/2014/2014-06-22-0017.jpg)
{% endfigure %}

That's it for 
the main construction of this card ... all I need to do now is pop in the 
relays and then give it a try. I'll cover testing the card in my next post and 
as usual I'll put up a video showing the card working although this time I'll 
probably just skip (in the video) to testing in the enclosure alongside the 
other cards being as the A/D register is so similar to the B/C register. 
