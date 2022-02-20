---
layout: post
title: Relay Rumination
date: '2013-11-10T23:16:00.000Z'
author: Paul Law
tags:
- design
- musings
modified_time: '2014-01-26T10:52:37.070Z'
thumbnail: /img/posts/2013/2013-11-10-4000.png
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-8997363704019148221
blogger_orig_url: http://relaycomputer.blogspot.com/2013/11/relay-rumination.html
---

If there's one thing a relay computer needs a lot of it's ... erm ... relays 
(of course) ... which happens to be a bit unfortunate as relays, compared to 
the other parts of the computer, are rather expensive. The 
[Dr Harry Porter Relay Computer](http://web.cecs.pdx.edu/~harry/Relay/index.html) 
(which my computer is based on) uses 415 x 
4PDT (4 pole double toggle) relays in total. A comparable part is the [Omron MY4-DC12(S)](http://www.mouser.com/ds/2/307/my_dsheet_gwj111-e1-03-42531.pdf) relay and a quick check online with 
Mouser (other suppliers are available ;) prices them around £3.20 a piece 
(excluding UK VAT @ 20%) ... that's just under £1600 including VAT which is a 
bit eye watering for a hobby project (the Harry Porter computer came to just 
over $5000 in total for everything). Also of note is that the MY4 relays are 
sized 28 x 21.5 x 36mm ... not huge but big enough when you've got 415 of them 
wired together (again, see the Harry Porter computer to see exactly how big 
these machines can be). Here's a scaled diagram of the MY4 relay showing the 
coil and four sets of double toggle contacts.

{% figure %}
![Omron 4PDT Relay (0.1inch grid)](/assets/img/posts/2013/2013-11-10-0000.png)
{% endfigure %}

Many of the constructors of 
other relay computers I've read about have gone hunting on eBay for a job lot 
of relays or managed, in one case even, to persuade the manufacturer to donate 
them (to the [RC-3 Relay Computer at the Museum of Computer Culture](http://www.computerculture.org/projects/rc3/)). I 
therefore find myself with a (self imposed) quandary ... I'm too impatient to 
wait it out on eBay or to go scavenging but I'm too tight to spend all my 
pocket money on new relays. I also don't want to make a behemoth computer 
either ... I want to create something that can sit in the corner of a room not 
require me to move house to accommodate it (and certainly not with 
astronomical property prices in southeast England).

Well, it just 
so happens that a smaller relay appears to be a cheaper relay so that's a good 
place to start looking. However, the first casualty of this miniaturisation 
drive is the number of poles on the relay ... most are DPDT (double pole 
double toggle). This means twice the number of relays to get the same pole 
count and twice the number of coils. Luckily there's plenty of choice in the 
smaller relay pool, prices are less than half those for the 4PDT relays and 
also the smaller coils tend to consume less power so doubling up is less of a 
concern. Actually, speaking of which, power consumption was another concern I 
had on my mind ... the Omron MY4-DC12(S) consumes around 0.9W per relay and 
even though not every relay will be on at the same time you could be looking 
at 270W for 300 relays chowing down.

One place I started looking 
for relays was [bitsbox](http://www.bitsbox.co.uk/) 
which is where I get a lot of my bits and bobs from when playing with 
electronics (good prices and very reasonable delivery charges) and found the 
Good Sky [GS-SH-212T DPDT](http://www.bitsbox.co.uk/data/switches/sig_relay.pdf) 
which runs at 12V 0.2W (so down to 120W 
for 600 relays on the go). This is much more like it and came in at £1.95 inc 
VAT per relay (although that still means it could come to £1600 if 2 x 415 
relays are needed [which I shouldn't as not all poles are used on the 4PDTs]). 
Here's a diagram at the same scale with two relays to make up the same pole 
count as the Omron 4PDT:

{% figure %}
![GoodSky DPDT Relays (0.1 inch grid)](/assets/img/posts/2013/2013-11-10-0001.png)
{% endfigure %}

Taking this all a 
step further I started hunting out smaller and smaller relays and eventually 
settled on the TE Connectivity [V23079A2003B301](http://www.mouser.com/ds/2/418/NG_SS_108-98002_W_P2-196265.pdf) DPDT (catchy part number ;) which runs at 
12V 140mW (that's 84W for 600 relays). These come in around £0.97 per relay 
from Mouser (exc VAT - so around £1.16 inclusive). Incidentally, both the 
GoodSky and the TE are through-hole PCB mounting so I can also use regular 
strip/pad/matrixboard to construct the computer (the Omron 4PDT, being 
industrial relays, require special mounting rails or similar). Here's a 
diagram at the same scale again for this relay:

{% figure %}
![TE DPDT Relays (0.1 inch grid)](/assets/img/posts/2013/2013-11-10-0002.png)
{% endfigure %}

Oh, by the way, the 
choice of 12 as a relay coil voltage wasn't an arbitrary one ... relays come 
in all shapes, sizes and voltages but I plumbed for 12V in the end mainly due 
to it being a bit of sweet spot price wise and also it allowed me to use 
readily available 12V LEDs (which have an inline resistor built in) to save 
more space and simplify my project design (more on the LEDs and other 
components in a later post). Also, my bench power supply is well suited to 
pumping out 12V at the sort of power levels this relay computer will 
require.

I should say that one thing that always terrifies me 
(well, mildly perturbs at least) is buying electronic components as there's so 
much choice out there and it takes a lot of concentration to match up part 
numbers to the data sheets to make sure you're actually buying the right part 
(actually, this is another reason that I buy most of my bits from bits box for 
tinkering as they've preselected common parts for me ... well, not me 
personally but you get the idea). The other thing that makes me uneasy is the 
quantity price breaks ... the more you buy the less you pay. Sometimes the 
breaks can be quite dramatic however you have to be sure you've got the right 
part as you don't want to receive 1000 green LEDs when you wanted red. Anyway, 
long story short, I put in an order for 125 of the TE relays with Mouser to 
get me going. However, after receiving everything else I ordered other than 
the relays I then looked on in horror as I saw the words 'back order' on the 
delivery note ... the lead time had slipped back to 18 weeks (so delivery in 
March). Needless to say I'm going to try and get some more of the TE relays in 
the meantime and it looks like Farnell have stock so time to get the credit 
card out again :)

Next post I'll start looking at how I will 
connect these relays together to make a 1-bit logic unit which will lead on to 
the design for the full 8-bit logic unit (which itself will form part of the 
ALU).

Realtime update: So, regular readers will know I'm playing 
catch up with the blog and I'm already busy soldering bits of the ALU 
together. If you really can't wait for me to blog about how I've got to where 
I'm at now you'll find some teaser videos at: 
[here](http://www.youtube.com/watch?v=v5X9MSLctaM), 
[here](http://www.youtube.com/watch?v=FYBwbvHwhFc) and 
[here](http://www.youtube.com/watch?v=bl5los2hLNQ). 
