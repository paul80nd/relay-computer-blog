---
layout: post
title: Making a PCB
date: '2019-03-04T11:00:00.001Z'
author: Paul Law
tags:
- construction
- video
modified_time: '2019-03-04T11:00:00.001Z'
thumbnail: /img/posts/2019/2019-03-04-4000.jpg
---

After years of using pad/prototyping boards to build my computer I've decided to switch things up a bit and
have a go at making a custom PCB. The thinking is that it should save me loads of time soldering and wire
wrapping which will come in handy as I'll soon be constructing three fairly-identical register cards and my
patience is notoriously short. That said though it probably makes sense that my first PCB should be something a
bit simpler. As it happens I do need to construct the Y backplane (which the 5 'Y' type cards connect in to)
which is a much simpler design and therefore an excellent 'first PCB' candidate.

I covered the basic design of the backplane in my last post so this one is all about how I got on making the
PCB. Those who follow me on YouTube will have, by now, seen the series of videos I've been uploading
covering my adventures in this area. Rather than just re-iterate what's in those videos I'll link them here
but I'll also try and add some additional thoughts now I'm writing this post and effectively looking back
over how it all went.

So, let's start at the beginning where I prepare the copper clad board and print out the PCB design:

{% include youtube-player.html id="c-LOiyI5N-g" %}

One thing that does strike me watching this video (apart from cringing at hearing my own voice) is just how
uncertain and unsure I am of everything I'm doing. It's fair to say that my previous videos have been pretty
heavily edited affairs with voice-overs added at the very end of the editing process. This time I decided to
just video as I went along ... no script, no editing ... just me and a camera. All this effectively means
you're witnessing the disaster/success unfold the same time I am. The uncertainty you're seeing is because I
have no idea how it'll turn out.

In part 2 I give the printed design a check and attempt to transfer it to the copper clad board:

{% include youtube-player.html id="RouOhDSAcRA" %}

This video's featured disaster-du-jour is toner transfer, well, not transferring. In hindsight I think using an
iron does introduce plenty of scope for the transfer not working ... especially when it's an iron as tiny as
the one I've been using. It does seem to be all about getting a sweet spot of temperature and pressure and in
the end I just 'got a feel for it'. I have seen better results in other YouTube videos using a laminator so
that the pressure/temperature is better controlled but I'm not wholly convinced I can be bothered to buy one
at the moment. I did look but I'd have to make sure it can take the thickness of a PCB (or modify it so it
can).

One thing I've definitely learnt is that if there's any issues in the toner transfer it's better just to wipe
the board clean with acetone and start again. There's always a temptation to just plough ahead given the time
invested up to that point but this really is the one opportunity where you can (literally) wipe the slate
clean.

In part 3 I finally manage to get the design transferred to the board and move on to etching:

{% include youtube-player.html id="Su1j4IVEBzw" %}

I think it'll be worth me investing in some decent etch resist pens so I can touch up any small issues in the
toner transfer. As this is the point of no return for the board it's definitely worth getting it as tidy and
accurate as I can. I tried to do this with a Sharpie pen and then with a white ink pen ... neither of which
were particularly suitable for the job at hand and the results show post-etch.

Whilst touching up the board I did notice how the toner doesn't perfectly cover the copper ... especially in
larger areas. You can see lots of tiny pin-holes in the toner which let the etchant though and this results in
a 'dirty' looking etch. I think the way around this is to use the UV resist method where you laser print the
design twice on clear sheets and then layer them on top of each other creating a nice solid mask. With that
mask you can then expose a specially coated board under a UV light which, after chemically developing, gives
you the design ready for etching. It looks like this method is generally preferred (and I think it's used in
professional PCB production) but, again, it's extra equipment and cost. No doubt if I start making more and
more PCBs it'll be worth the investment but in the meanwhile the toner transfer method is cheap, relatively
easy and gives good enough results.

Speaking of etching ... that wasn't without problems either. In this case though it's totally down to my own
impatience. I should have just left the etchant alone to do its thing and just occasionally agitated the tub
to keep the etchant moving around. The other thing that didn't help was the temperature ... this was all done
in late January and it was really cold outside ... combine that with not having any radiators in the kitchen
and you've got very cold etchant. I think in future I'll make a little bain-marie just to get the temperature
up a little bit and that should help. One thing I definitely won't do again is paw at the board with a sponge
removing not only the copper but also the etch resist in places.

By part 4 the board is etched and it's on to tin plating, inspecting the board and attempting (in vain) to fix
some of the broken tracks:

{% include youtube-player.html id="bNQbhyC7etU" %}

The tin plating actually went quite well although admittedly it's not a cheap product but it does make the PCB
look good and protects the copper. I could probably have done with leaving the board in a bit longer than I
actually did as the tin will thicken up the longer you leave it (to a point) but I was happy enough with the
result.

Later on in the video I get the multimeter out and give the traces on the PCB a test. As expected
there's quite a few tracks broken either where the toner didn't transfer properly or where I scrubbed the
resist away with my manic sponging. I always remember the 'measure twice cut once' adage when working with
wood and there's a parallel in making PCBs ... you can always etch more copper away but you can't put it back
on the board. That's painfully apparent as I try 'repairing' some of the tracks ... even on this simple board.
I think in future I'll try and focus on getting a good toner transfer and etch and then if there are any issues
post-etch I'll just use Kynar wire to fix things up.

I think at this point in the video you can probably hear in my voice that I was getting a bit
depressed/frustrated. When things are going wrong like this you can either plough forward or start again and
at this point I was feeling that starting again might be the best option. That's a difficult choice when you
know just how much time it took to get to that point. It was around this time that I was seriously thinking
about giving up and farming the whole thing out to a professional PCB manufacturer.

I didn't give up though and in part 5 I move on to drilling lots and lots of tiny holes in the PCB:

{% include youtube-player.html id="GqdT_CnAjHU" %}

Actually, this part went a lot better than I was expecting especially given how wobbly my Dremel drill stand
seemed and how notorious those tiny drill bits are for snapping. In the end I only broke one drill bit and
given there's over 350 holes in that board that's pretty impressive. I think what really did make a difference
here was using a centre punch so the drill would 'walk' in to right place as it's really difficult to line up
the drill bit by eye when you're using a 1mm drill bit. One thing that I did edit out here in the video was
the noise the Dremel produced ... I ended up popping ear plugs in after the first couple of holes as it
really was unbearably loud.

Nearly there then and at part 6 it's time to get soldering:

{% include youtube-player.html id="HQw2D_RnhKk" %}

In this video I use a product that I've not previously heard much about ... Green Coating by Bungard. It comes
in a spray can and effectively acts as a protective layer once dry but whilst it's drying you can solder
through it. That does mean you get a 'window of opportunity' to do all your soldering and in practice I found
it a bit sticky to work with intially. It's fair to say that it's nowhere near as good a finish as a
professional solder resist but then again a 'proper' solder resist doesn't come in a can. Actually, it is
possible to make a descent resist at home by using the same UV technique for creating an etch resist. You can
use either a dry film or a special paint and then you lay over a clear sheet with a laser printed design that
blocks out UV over the pads. Once exposed you can then wash away the resist over the pads and it's done. I
think if I ever use the UV method for the etch resist then it makes perfect sense to re-use that equipment and
use the UV method for the solder resist.

Something that doesn't go too well in this soldering video is the, erm, soldering. I end up having so many
problems that all seem to point back to having a iron tip that's, frankly, beyond saving and then I notice
I've probably been working at too low a temperature. Actually, it turned out a couple of weeks later that I
had a much bigger problem which was down to a broken wire in the soldering iron cable that'd cause the iron
temperature to mis-report back to the base unit. This resulted in the iron going well over/under temperature
at any point depending how I held the iron. In the end I gave up and bought a decent soldering iron unit which
will no doubt appear in my future videos. Soldering is now a pleasure again and my solder joints are coming
out much better. In the video I do start blaming the Green Coat for the bad soldering but chances are it's all
down to a broken soldering iron.

This all leads us to the final video ... part 7 ... which covers testing the PCB and making some final fixes:

{% include youtube-player.html id="xIuX-k8bzhM" %}

So, with the PCB completed what have I learnt? Well, I know how to make a PCB at home and, perhaps more
importantly, I know how not to make a PCB at home. Being fair to myself I'm pretty sure my next DIY PCB will
be a much tidier affair and if I'm going to start making lots of PCBs then I'll likely invest in some better
equipment which will also help. The thing is though is any of this even worth it given how cheaply you can
get a PCB made from one of the China manufacturers? Well, it depends what your goal is. This time I really
wanted to see if I could make a PCB from scratch and I guess that I could probably knock one out quicker than
it'd take one to be made professionally and shipped to me. That said though could I make a PCB that's more
complex and perhaps double sided? Probably not. Could I make one that looks as good as a professionally
produced one? Definitely not.

One thing I have quite enjoyed this time was the videoing in real time, lightly editing and then pushing more
regular content out to YouTube. I'm hoping to continue doing this going forward letting you get a bit more of
an insight in how I'm building my relay computer (assuming that's what you were after of course). As a result
of doing more videos I'm also learning a bit more about video production and as I've gone through the videos
in this series you can hopefully see the camera work getting a bit less wobbly and the audio getting a bit
more consistent. I've bought some tripods and learnt not to mount the tripod on the surface that I'm drilling
on and I've also bought a lapel mic and tried to master the volume controls in iMovie. Speaking of which, my
next videos will likely be produced in DaVinci Resolve as I'm getting bored of the various limitations in
iMovie.

So, what's next then. Well, the video series does rather abruptly end before the backplane is prepared for
installing in the computer. I felt that being as this series was 'touted' as being all about making a PCB
then what I was about to move on to didn't really qualify as being about the PCB any more ... it was back
to 'business as usual' in constructing my computer. As such, my next post will cover fitting the backplane
in to the computer and I'll do an accompaning video that's under the banner of 'making my relay computer'.

Behind the scenes I've also completed the design for the upcoming register cards and had them manufactured.
Yup, you heard me right, I've farmed it out to the professionals being as those cards are much more complicated
and given I need three of them the five board minimum order works well for me. As you'd no doubt expect I'll
make sure I cover the design and construction of those cards in upcoming posts and videos.

Finally then I should probably thank you, dear viewer, for either reading this far or watching the videos in
this PCB series. That's 166 minutes over 7 videos and so if you have watched them end-to-end that's quite a
comitment on your part ... and if you've skipped your way through them ... well I can't say I blame you ...
I've just had to watch them to write this post and I'm thoroughly bored of my own voice now ... I'm off to
watch some YouTube videos on kittens doing crazy things or somesuch to give my eyes/ears/mind a rest.
