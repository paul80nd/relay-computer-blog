---
layout: post
title: The problem with memory
date: '2017-08-18T22:58:00.000+01:00'
author: Paul Law
cards:
- memory
tags:
- theory
- design
- memory
- video
- musings
modified_time: '2017-08-18T22:58:43.082+01:00'
thumbnail: /img/posts/2017/2017-08-18-4000.jpg
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-8906956484545056611
blogger_orig_url: http://relaycomputer.blogspot.com/2017/08/the-problem-with-memory.html
---

It's time, at last, to start looking at the design for the computer's memory 
and this is a bit of a game changer as it's the final part of the jigsaw that 
lets the computer run a program. However, it's also the part of the computer 
that leaves me in a bit of a quandary.

The problem with memory is 
that typically you need quite a lot of it and that's something that doesn't 
come easy with relays. In a way the registers already present in the computer 
are a kind of memory ... they store a single byte of data. So, effectively you 
can get two bytes worth of storage on one of the usual computer cards. You can 
maybe see where this is going.

Each instruction in a program takes 
a byte of memory therefore a 10 line program needs 10 bytes of memory. How 
long does a program need to be? Well is depends but for this kind of computer 
20 to 30 wouldn't be unreasonable it you're going to do something 
'interesting'. It's not just the instructions that need storing though. 
Eventually the computer will also have instructions to load and store values 
in memory so that you can have more values 'on the go' than could be held in 
the registers alone. Storing the program as well as data in the same physical 
memory is known as a Von Neumann architecture (named after the mathematician 
and physicist who wrote a paper on it). Alternatively a computer could use a 
Harvard architecture where the program is stored separately.

So can 
you see the problem? Let's say we have a program that's 30 lines long plus we 
want to store an additional ten data values (as bytes) to work upon then we're 
looking at a total of 40 bytes of memory. That doesn't sound much if you think 
of modern computers with 8 or 16Gb but in this case I'd have to make 20 
register type cards to store those 40 bytes. Apart from that boring me to 
tears constructing that many registers it'd also take up a lot of room and 
making a compact relay computer was one of my primary goals. Also, if you want 
to add an extra line to the program then it's time to get the soldering iron 
out again.

What's the alternative then? Well, there's not much 
choice if I'm to stick with relays. I wanted to try and keep the computer 
'authentic' and with a traceable route right back to the 
[Konrad Zuse Z3](https://en.wikipedia.org/wiki/Z3_(computer)). 
Now you could say that by using LEDs it looses authenticity but it's 
just a newer version of a lightbulb in the same way the miniature relays I use 
are a modern equivalent of the Z3 relays - the 'feeling' is the same and the 
experience of the computer running is very similar. The Z3 was the original 
inspiration for making this computer which, via a bit of surfing on the net, 
found me at the [Harry Porter relay computer](http://web.cecs.pdx.edu/~harry/Relay/) and that's where the seed was 
truly sown. Actually, I re-discovered the video of the Z3 that started it all 
so I thought I'd share it below (it's in German but you'll get the general 
idea):

{{< youtube aUXnhVrT4CI >}}

So, if I'm going to get more memory in less space I 
need to wind the clock forward a bit and choose a newer technology. I was 
seriously tempted by [magnetic core memory](https://en.wikipedia.org/wiki/Magnetic-core_memory) ... I saw one of these at the 
National Museum of Computing in Bletchley Park, UK (yes, the 'Alan Turing' 
Bletchley Park) I was immediately smitten. Core memory is just so intricate 
... however, it's therefore an absolute pain to build and although it's much 
smaller than the relay equivalent you still don't get a decent density of 
memory for the space taken.

What did I do then? ... I gave up and 
rolled the clock all the way forward and decided to use a modern(ish) memory 
chip instead. If you need any justification I think this [picture says](https://en.wikipedia.org/wiki/Magnetic-core_memory#/media/File:8_bytes_vs._8Gbytes.jpg) 
it all. Now, I'm not suggesting I'm going to 
add 8Gb of memory to my computer (which would be quite extreme) but bigger is 
usually better when it comes to memory. However, the memory itself is not the 
only consideration that needs to be made. You need a way of telling the memory 
which location to store or retrieve the value from and that's where the 
address bus comes in.

The size of the address bus has a direct 
impact on how much memory the computer can actually use. A good place to start 
is by having an 8-bit address bus to match the 8-bit data bus. How much memory 
does that let us address? Effectively 8-bits have 2^8 unique values (256) so 
an 8-bit address bus would give you 256 bytes of memory. Of course, the 
interesting thing about this is that as you add more bits to the address bus 
the addressable memory grows exponentially. Although I'd be happy enough with 
256 bytes of memory I couldn't find any memory chips with that little memory - 
the smallest I could find that was readily available was 32K. That would need 
a 15-bit address bus to address the 32,768 memory locations but 15 is a bit of 
an odd number so I opted for 16-bits.

To fully utilise the 16-bit 
address bus I'd need two 32K memory chips but I decided to stick with just the 
one chip as I couldn't ever see a case where I'd need that much memory anyway. 
It then struck me that I could use the higher addresses for 'other things'. I 
eventually plan to expose all the busses out the back of the computer allowing 
for future expansion and by having those spare addresses (all 32,768 of them) 
I could drive either more memory or more likely things like displays etc. This 
also works out quite nicely as I can enable/disable the internal memory chip 
based on the most significant bit of the address bus ... if it's 0 then the 
internal memory is active ... if it's 1 then the internal memory chip is 
disabled and something else takes over.

So, with all that out of 
the way I can now get stuck in to the actual design of the memory card but 
it's slightly more complex this time because whereas all of the computer so 
far has been based on connecting and disconnecting power via relays the memory 
chips don't work that way and there'll need to be some interfacing work done. 
Anyway, that's all to come in the next post. 
