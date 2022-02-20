---
layout: post
title: Sequencing & Control Test
date: '2016-05-24T21:12:00.000+01:00'
author: Paul Law
tags:
- completion
- video
modified_time: '2016-05-24T21:13:02.102+01:00'
thumbnail: /img/posts/2016/2016-05-24-4000.jpg
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-4706632519475100222
blogger_orig_url: http://relaycomputer.blogspot.com/2016/05/sequencing-control-test.html
---

It's finally time to give all the cards created so far a test so I can check 
everything works together as expected. This represents quite a bit of a 
milestone as the computer can now perform a single ALU, SETAB or MOV-8 
instruction. This means a user can technically run a program by entering and 
running each instruction in turn and although the computer is still a long way 
from completion with this latest round of functionality it's a lot more usable 
than before.

Viewed from the front the computer now looks like 
this:

{{< fig >}}
![Relay Computer (front view)](/img/posts/2016/2016-05-24-0000.jpg)
{{< /fig >}}

I've put together a new video to mark this construction milestone 
which gives an overview of what's changed since the last milestone, a tour of 
the computer as it currently stands and finally a demonstration of running a 
program through the computer.

{{< youtube d3_WiqAKCds >}}

So, 
with a line drawn under what's been built so far it's time to look at what 
comes next. There's quite a few different ways to go from here but I'd like to 
concentrate on getting the computer to run a full program all by itself.

Unfortunately there's quite a bit involved in implementing that simple 
statement of 'all by itself'. The first thing the computer will need is some 
memory so that each line of the program can be stored. Once that's in place 
it'll then need a program counter so that the current position in the program 
can be tracked and it'll also need an incrementer to move the program counter 
on following each instruction.

As before, I'll start with covering 
the design of each of the required upcoming cards (memory, program counter and 
incrementer) and then move on to construction and finally that'll get the 
computer to the next milestone where everything can be tested together. Here 
we go again ... 
