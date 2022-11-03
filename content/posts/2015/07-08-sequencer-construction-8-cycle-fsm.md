---
layout: post
title: 'Sequencer Construction: 8-cycle FSM'
date: '2015-07-08T09:27:00.000+01:00'
author: Paul Law
cards:
- sequencer
tags:
- sequencing
- pulse-distribution
- construction
- video
modified_time: '2015-07-08T09:27:57.110+01:00'
thumbnail: /img/posts/2015/2015-07-08-4000.jpg
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-3405476013330306273
blogger_orig_url: http://relaycomputer.blogspot.com/2015/07/sequencer-construction-8-cycle-fsm.html
---

I'm just about at the half 
way mark now for getting the computer to operate the MOV8, ALU and SETAB 
instructions. The easier cards are out of the way now ... time for the 
slightly more complex ones. In this post it's the sequencer cards which will 
deal with the 'when' of instructions by sending out timing pulses which the 
upcoming control cards will then use to operate the various control lines of 
the computer at the right time.

Note there that I did say sequencer 
'cards' and not 'card' because there's two of them this time. This is the 
first part of the computer that will be constructed across two cards stacked 
together rather than all on a single card (the upcoming control unit will also 
be spread across two cards). This is for two reasons: firstly the sequencer 
needs access to more connections than a 'regular' card but secondly there'll 
be so much to fit in that it physically wouldn't fit on one card.

Working across two cards does present additional challenges in the 
construction ... mainly around how to get the required signals that are 
private to the sequencer between the two cards. I considered many options but 
in the end a system of stacking header pins seemed the best route forward. So, 
to start construction I soldered down the ribbon cable connectors and board 
interconnects ... once done it looked like this:

{{< fig >}}
![Sequencer Cards: Connectors and Interconnects (front view)](/img/posts/2015/2015-07-08-0000.jpg)
![Sequencer Cards: Connectors and Interconnects (rear view)](/img/posts/2015/2015-07-08-0001.jpg)
![Sequencer Cards: Connectors and Interconnects](/img/posts/2015/2015-07-08-0002.jpg)
{{< /fig >}}

To keep the two cards stable I also added some PCB 
stand-offs in the front corners. Thankfully the distance between cards in the 
enclosure can be made up using standard stand-off lengths. I'd like to say I 
planned it that way but of course I didn't ... it's just another one of those 
happy coincidences which happens when everything is on a 0.1 inch grid.

To stack the cards the upper card header pins are aligned and inserted 
into the respective sockets on the lower card producing a unit that looks like 
this:

{{< fig >}}
![Sequencer Cards: Cards stacked together (top view)](/img/posts/2015/2015-07-08-0003.jpg)
![Sequencer Cards: Cards stacked together (side view)](/img/posts/2015/2015-07-08-0004.jpg)
{{< /fig >}}

With the basic connections in I moved on to soldering 
in the wire wrapping posts for the interconnects and LEDs along with the LEDs 
themselves.

{{< fig >}}
![Sequencer connector wire wrap posts and LEDs (top view)](/img/posts/2015/2015-07-08-0005.jpg)
![Sequencer connector wire wrap posts and LEDs (rear view)](/img/posts/2015/2015-07-08-0006.jpg)
![Sequencer LEDs (close up view)](/img/posts/2015/2015-07-08-0007.jpg)
![Sequencer LED underside soldering](/img/posts/2015/2015-07-08-0008.jpg)
{{< /fig >}}

One problem with the board interconnects on the upper card is that 
it does make soldering a little fiddly as you have something protruding up 
from the board getting in the way ... plus that 'something' will melt (or at 
least the plastic parts of it will) if you apply a soldering iron to it.

For the LEDs I've continued using the newer method of soldering the 
LED cathodes together with bits of trimmed off diode/LED legs as it makes 
soldering much easier. This is the first time, however, that I've tried this 
technique on double height LED holders. Generally the concept stays the same 
... join all the cathodes together ... but for the holders that have LEDs in 
their upper slot I need to add a small Kynar wire link to get that LEDs anode 
to the wire wrap post. It's all a bit fiddly but as long as you have patience 
and a steady hand it usually comes off OK.

Next up were the relay 
sockets and associated wire wrap posts:

{{< fig >}}
![Sequencer relay sockets and wire wrap pins (top view)](/img/posts/2015/2015-07-08-0009.jpg)
![Sequencer relay sockets and wire wrap pins (rear view)](/img/posts/2015/2015-07-08-0010.jpg)
{{< /fig >}}

I've actually soldered down the relay sockets 
for the upcoming 10 and 12-cycle relays on the lower card in addition to the 
required 8-cycle relay sockets. This is because soldering these sockets down 
is a really fiddly job and I know that when I come back to this card to add 
functionality later it'll be a real pain when there's relays and all the 
wiring getting in the way. I'll not bother soldering the underside of these 
sockets much further but at least the fiddly upper side is done. I've not done 
anything on the upper card although eventually this will hold further cycle 
relays all the way up to the full 24-cycle sequencer.

Next job was 
to solder in the flyback and feedback diodes (which ensure produced outputs 
don't feed back into parts of the sequencer's finite state machine):

{{< fig >}}
![Sequencer with added flyback/feedback diodes (top view)](/img/posts/2015/2015-07-08-0011.jpg)
![Sequencer with added flyback/feedback diodes (rear view)](/img/posts/2015/2015-07-08-0012.jpg)
{{< /fig >}}

The final soldering job was to put in the 
power and ground lines:

{{< fig >}}
![Sequencer with added power and ground lines (rear view)](/img/posts/2015/2015-07-08-0013.jpg)
![Sequencer with added power and ground lines (rear close up)](/img/posts/2015/2015-07-08-0014.jpg)
{{< /fig >}}

This time around I finally got bored of 
cutting and stripping all those short bits of coated wire for the ground lines 
and decided to give the same technique I use for grounding the LEDs a try for 
the relays. This does mean that all the grounds are exposed for their full 
lengths but on the plus side it was much quicker and easier to put everything 
together. I'll see how I feel about it but I'll more than likely do the same 
on the next card.

There's some temporary Kynar wires in the power 
and ground lines and these are just to 'hop' over future parts of the card 
where the lines will eventually go through. The Kynar wire, of course, can't 
handle all that much current but it should be fine for now.

With 
the soldering done it's on with the wire wrapping. The sequencer probably has 
the most complicated wiring yet (second only, maybe, to the ALU arithmetic 
unit).

{{< fig >}}
![Sequencer with added internal connection wire wraps](/img/posts/2015/2015-07-08-0015.jpg)
![Sequencer with added power wire wraps](/img/posts/2015/2015-07-08-0016.jpg)
![Sequencer with added result wire wraps](/img/posts/2015/2015-07-08-0017.jpg)
![Sequencer with added control wire wraps](/img/posts/2015/2015-07-08-0018.jpg)
{{< /fig >}}

With the wire wrap done the relays can then be placed in their 
sockets: 

{{< fig >}}
![Sequencer with relays inserted](/img/posts/2015/2015-07-08-0019.jpg)
{{< /fig >}}

This is almost the last step however to make the sequencer useable 
up to the 8th cycle I need to add a couple of extra temporary Kynar links that 
will connect stages 7 and 8 back to stage 1 and 0. Later on when longer cycles 
are implemented stage 9 and 10 will provide the required lines to keep stages 
7 and 8 alive ... for now, in their absence, the first stages will do the same 
job. With the temporary links in place the lower card looks like this:

{{< fig >}}
![Sequencer with added temporary wire links](/img/posts/2015/2015-07-08-0020.jpg)
{{< /fig >}}

So, finally, that's the sequencer complete for 8-cycle 
instructions. The card will be extended over time as longer cycle instructions 
are introduced but for now the sequencer as a whole looks like this:

{{< fig >}}
![Completed 8-Cycle Sequencer (front view)](/img/posts/2015/2015-07-08-0021.jpg)
![Completed 8-Cycle Sequencer (rear view)](/img/posts/2015/2015-07-08-0022.jpg)
{{< /fig >}}

As usual I've put a video together that demonstrates the sequencer 
in operation. In this video I give a quick overview of the cards and then 
demonstrate running through the 8 stages of the finite state machine and 
producing the three derived pulses C, D and E.

{{< youtube P2G8LHeWb80 >}}

That's it for the sequencer ... at least for 
now. It produces all the pulses that will be needed for the computer to 
perform copying values between registers, loading values from the opcode and 
performing ALU operations. The final step in making these operations a reality 
is to construct the control unit ... again though, just enough to operate 
these three 8-cycle instructions. The control unit is similar to the sequencer 
in that it will also be spread over two cards although fortunately it's wiring 
will be quite a lot simpler as most of it is just combinatorial logic. 
