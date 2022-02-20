---
layout: post
title: 'Test Board: Construction'
date: '2013-12-10T07:00:00.000Z'
author: Paul Law
tags:
- construction
modified_time: '2014-01-25T10:41:15.755Z'
thumbnail: /assets/img/posts/2013/2013-12-10-4000.jpg
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-3611767254580972729
blogger_orig_url: http://relaycomputer.blogspot.com/2013/12/test-board-construction.html
---

I've just realised that as I've been constructing the first ALU card I've not 
given much thought to how I'll actually test the card (or other cards for that 
matter) when complete ... this post therefore represents a quick aside to 
tackle testing.

What I'm looking for is a small board with enough 
switches on it to drive the various inputs of each card ... ideally it'll be 
reusable between cards and easy to use. I did originally think of using DIP 
switches but they're a bit on the fiddly side so I've gone for tactile 
switches instead — the main problem with these is that they're non latching 
but I figure that I won't need to push more than 10 buttons at a time 
hopefully.

There's not a lot of planning gone in to this one ... I 
just grabbed the bits from my parts box and set off soldering (sometimes it's 
nice just to get stuck in rather than planning everything ;) The result looks 
like this:

{% figure %}![Test Board](/assets/img/posts/2013/2013-12-10-0000.jpg){% endfigure %}

The three rows of buttons 
have no fixed purpose and a wire link is used to configure/connect the buttons 
against the header pins at the back. For the ALU cards the button rows, from 
front to back, will be configured as Input B, Input C and Control. You might 
notice that this picture is a bit brighter than my usual ones as it's taken in 
the daytime for a change ... quite a rate thing being as this hobby tends to 
be a weekday evening thing. The solder side looks like this:

{% figure %}![Test Board (solder side)](/assets/img/posts/2013/2013-12-10-0001.jpg){% endfigure %}

Following this 
I later added two extra boxed headers to run the power and ground through the 
board from the power supply and on to the card under test. I also added some 
initial wire links between the buttons and the header pins. Front and back end 
up like this:

{% figure %}
![Test Board (solder side)](/assets/img/posts/2013/2013-12-10-0002.jpg)
![Test Board](/assets/img/posts/2013/2013-12-10-0003.jpg)
{% endfigure %}

Next post I'll get back to 
finishing the soldering on the logic card so I'll actually have something to 
test. 