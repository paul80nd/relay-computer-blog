---
layout: post
title: 'Sequencer Design: Schematic & PCBs'
slug: sequencer-design-pcb
date: '2019-11-11T03:03:00.004Z'
author: Paul Law
tags:
- sequencing
- design
modified_time: '2019-11-11T03:03:00.004Z'
thumbnail: /img/posts/2019/2019-11-11-4000.png
---

I've got the designs for the 24-cycle FSM and pulse distribution in place so all that's left for the sequencer is to bring
the schematics together and then design the PCBs ... and yup, that's PCBs plural as this is going to be another part of the
computer that is complicated enough to need spreading over two interconnected cards. The way I can tell this is a 'two card
job' is purely down to the number of relays I've used. In this case the total comes to 60 and if you're really packing
them in (6 rows of 8 relays) you can just about get away with a maximum of 48 per card.

So, two cards it is. The other choice is deciding where to split the design (i.e. what goes on the 'upper' card and what on
the 'lower'). In this case it seems sensible to place the 8, 10 and 12 cycles plus derived pulses on the lower card and
then the remaining 14 and 24 cycles on the upper card. The other consideration is fitting the status LEDs on the front of
the cards (and splitting this way fits nicely) and then what signals need to pass between upper and lower cards.

Given I've already introduced the FSM and pulse distribution schematics in my last posts I'll cut straight to the chase and
you can find the consolidated [upper sequencer schematic here](/assets/pdf/sequencer-hi.pdf) and the
[lower sequencer schematic here](/assets/pdf/sequencer-lo.pdf) (both in PDF format). In both cases the card is largely
defined by the backplane connectors it uses ... W1 for the upper card (made up of address, operation and pulse busses) and W2
for the lower card (made up of Control X, Y and Z busses). This is similar to the existing pair of controller cards which also
talk to enough of the computer to need access to all the busses offered by the W1 and W2 type connectors.

For the PCB design we follow the same basic steps as before for the Y backplane register: place components that have to be in
a certain location first; place other components in rough logical groups; lay tracks; build ground/power planes; add text
labels etc. In this case we'll also need to pass additional signals between the cards via an 'interconnect'. Let's start then
with the backplane connectors as these pre-exist on the W backplane and have to be in a certain location:

{% figure %}![W1 Connectors (Upper Card)](/img/posts/2019/2019-11-11-0000.png){% endfigure %}

{% figure %}![W2 Connectors (Lower Card)](/img/posts/2019/2019-11-11-0001.png){% endfigure %}

Note that the 'JLCJLCJLCJLC' text in the top right corner is to let my PCB manufacture know where I'd like them to put their
identification code so they can find my PCB amongst all the others they'll be making. If I don't specify the location then the
manufacturer decides for me and invariably puts it somewhere annoying. In this case I want it underneath a socket so they
can see it but I wont. Next up is the LEDs:

{% figure %}![LEDs (Upper Card)](/img/posts/2019/2019-11-11-0002.png){% endfigure %}

{% figure %}![LEDs (Lower Card)](/img/posts/2019/2019-11-11-0003.png){% endfigure %}

Although it's not specified on the schematic or the PCB I'll stick with my usual convention for LED colours and use
green for the pulses (representing a 'result' output of the card), yellow for the abort signals (representing command/control
inputs to the card) and red for everything else (the FSM stages in this case).

I now need to place the relays, diodes and card interconnects. This often involves just moving things around until there's a
nice fit and the ratlines (showing the connections needed between components) are looking reasonably tidy.

{% figure %}![Basic layout (Upper Card)](/img/posts/2019/2019-11-11-0004.png){% endfigure %}

{% figure %}![Basic layout (Lower Card)](/img/posts/2019/2019-11-11-0005.png){% endfigure %}

I've also labeled the card now I've put everything in position. I find this just helps a little when moving
on to the most time consuming part of PCB design ... laying down the tracks. A good place to start is routing groups of
related signals that are heading in the same direction - busses are good examples of this:

{% figure caption:"Upper card pulse bus" %}![Upper card pulse bus](/img/posts/2019/2019-11-11-0006.png){% endfigure %}

{% figure caption:"Upper card pulse LEDs" %}![Upper card pulse LEDs](/img/posts/2019/2019-11-11-0007.png){% endfigure %}

{% figure caption:"Lower card FSM outputs" %}![Lower card FSM outputs](/img/posts/2019/2019-11-11-0008.png){% endfigure %}

{% figure caption:"Lower card FSM LEDs" %}![Lower card FSM LEDs](/img/posts/2019/2019-11-11-0009.png){% endfigure %}

It's then just a case of laying down tracks between groups of relays and any other remaining signals. Another rule I tend to
follow is to try and keep the tracks on the front of the card going vertical and then route horizontally on the rear of the
card:

{% figure %}![vertical and horizontal routing (Lower Card)](/img/posts/2019/2019-11-11-0010.png){% endfigure %}

Another good use of laying tracks on the rear of the card is if you're squeezed for space on the front:

{% figure %}![squeezing tracks in (Lower Card)](/img/posts/2019/2019-11-11-0011.png){% endfigure %}

... this tends to work best when near the edge of the card so that it leaves plenty of space for the copper pours. The pours
create a large area of copper that fills any space not used up by tracks. This also gives me somewhere to route the ground
lines (which come off pretty much every active component) and also the power lines. It's quite common to have a power plane
on one side of the board and a ground on the other but I tend to have ground on both sides (to ensure ground can get around
any areas where there's a lot of tracks) and then route a 'power river' through the rear ground plane:

{% figure %}![Copper Pour (Upper Card)](/img/posts/2019/2019-11-11-0012.png){% endfigure %}

{% figure %}![Copper Pour (Lower Card)](/img/posts/2019/2019-11-11-0013.png){% endfigure %}

All that's left then is just to have a good close up inspection of the board to make sure everything is placed well and
tracks are routed properly. There's several built-in tools that help with this such as the DRC which'll check that pad sizes,
track widths, spaces between items and so on are within the abilities of your chosen manufacturer. In my case I'm well outside
of those minimum tolerances. Another good idea is to produce a 'realistic' image of the final board design to have a last
visual check:

{% figure caption:"Upper Card (front and rear)" %}
![Upper Card (front)](/img/posts/2019/2019-11-11-0014.png)
![Upper Card (rear)](/img/posts/2019/2019-11-11-0015.png)
{% endfigure %}

{% figure caption:"Lower Card (front and rear)" %}
![Lower Card (front)](/img/posts/2019/2019-11-11-0016.png)
![Lower Card (rear)](/img/posts/2019/2019-11-11-0017.png)
{% endfigure %}

If you'd like to take a closer look at any of these you can find the full colour previews in PDF format
[here for the upper card](/assets/pdf/sequencer-hi-pcbp.pdf) and [here for the lower card](/assets/pdf/sequencer-lo-pcbp.pdf).
There's also another version [here for the upper card](/assets/pdf/sequencer-hi-pcb.pdf) and
[here for the lower card](/assets/pdf/sequencer-lo-pcb.pdf) which seperates the layers out.

That's the sequencer design fully complete so all that's left is to send it off to the manufacturer and wait for the
PCBs to arrive in the post ... once they arrive it's soldering time.
