---
layout: post
title: 'Intermission'
slug: 'intermission'
date: '2022-05-02T11:00:00.000Z'
author: Paul Law
tags:
- musings
thumbnail: /img/posts/2020/2020-02-01-4000.png
---

So, is fair to say that things have been a bit quiet around here of late … and if you’ve been following my 
[YouTube channel]({{< param youtube_channel_url >}}) I do hope you haven’t been holding your breath for the 
next episode of ‘making a relay computer clock’ as the last episode came out just over a year ago!

What’s been going on then? Well first of all I’m fine (and actually writing this on one of the lazier days of 
a holiday in Crete … so I’m especially ‘fine’ and relaxed) but like most people the Covid lockdown has had its 
impact. My day job was always quite busy but over the last couple of years it’s been particularly busy and then 
combined with not having holidays to recharge I’d frankly lost all interest (and time) for my hobbies. Normality 
ultimately returns though (even if it's a 'new normal') and so does my appetite for hobbies. 

Does this mean I’ll be full steam ahead on the relay computer again then? Well not necessarily. Notice above that I 
mention ‘hobbies’ and not ‘hobby’ as there’s a ton of things I like to get up to ... generally anything within a theme 
of ‘making stuff’ ... so DIY home and garden improvements feature highly, I also quite fancy making some more batches 
of wine and it’s been a while since I got the sewing machine out ;)

One thing the last couple of years has taught me though is to go with my mood and not turn a hobby into just another 
form of work. YouTube videos are a particular case in point here as it takes a lot of effort (more than you potentially 
think) to film and edit down a video to something remotely watchable (and I’m definitely a YouTube novice in that 
regard). 

So, what does this all mean for my YouTube channel, this blog and ultimately my relay computer? Well, I _am_ still 
here and I’m still interested in building my computer but it’s going to be a bit more spread out (hopefully not
year long droughts of content though) and I might mix up what I work on a bit to keep it more interesting for me.

Something you may or may not know about me is I’m a software engineer by trade. I ended up in a management role 
though so I’m a bit rusty but the interest and love of code is still there. This occasionally surfaces in my 
hobbies and like most coders I have a ‘pet project’ I occasionally play with to learn new frameworks and try and 
keep the rust away from my programming fingers. Why am I telling you this? Well it just so happens that I have been 
working on my relay computer the last couple of months but maybe not in the way you’d expect. 

If you have been following my work and videos you’ll know programming a computer (any computer) in machine code 
(1s and 0s) is a pain and so using an assembly language makes that a bit easier. Problem now is that you need 
something to take the assembly language program and convert it to machine code … an assembler. Well that’s what 
I’ve been up to. If you’re curious you can find my [GitHub profile here]({{< param github_profile_url >}}) 
that contains that, this blog plus a host of other bits and bobs. I’ll be doing a post soon that explains more 
about the assembler but if you want to have a play the end result is here and using this you can make programs 
and run them on a simulation of my relay computer here. 

Other than that then what’s coming up - well what was true in my 2020 update videos is still true now and the todo list looks something like this:

Finish off the clock card
Prototype full relay clock circuit (with halt and restart)
Design digital secondary clock (higher accuracy, variable speeds but inauthentic)
Prototype digital secondary clock
Design PCB for dual clock
Build dual clock
Fit clock to computer and test/demonstrate
Add instruction classes
Load/Store - to copy values between registers and memory
Mov8/Mov16 - to copy values between all main registers (8 bit and 16 bit)
IncXY - to increment the XY register (useful for indexing operations and stacks etc)
Upgrades
Replace wire wrap cards with PCBs
Replace old backplanes with stacked PCBs
Replace power distribution board with PCB equivalent
Rebuild enclosure/case enabling:
New ‘DisplayC’ which will be a very low resolution matrix display
New paper tape reader (for easy entry of programs)
Landscape case rather than portrait making videos much easier to record ;)

You’ll notice that most of the above fits in to the same ‘hobby’ category so this is where I’ll break things up a bit by working on the relay computer simulator and assembler but also, of course, the aforementioned ‘other stuff’. 


XXXXX

As the clock struck midnight at the very end of 2019 I decided, over a glass of something sparkling, that I'd set myself a
challenge to put out a series of six YouTube videos within the space of one month. This, I thought, seemed timely as I've now
got my relay computer to the point where it can perform branching operations and therefore run more interesting programs.

Well, somehow I managed to stick to my challenge and although it turned out to be a gruelling schedule below are the six
videos I published. If you've been following me on YouTube you'll no doubt have seen these by now but just for completness
I've repeated them below.

In episode 1/6 I gave an overview of the underlying architecture of my relay computer and dipped in to some of the decisions
that led to that architecture:

{{< youtube NfvgQCoFykE >}}

In episode 2/6 I covered the instruction set (collection of opcodes) which can be used to tell the computer what to do:

{{< youtube szvNLpovAGM >}}

Given opcodes are made up of 8-bit binary values they're not particularly user friendly and so in episode 3/6 I introduced an
assembly language which makes it much easier to program the computer:

{{< youtube IQW445iMnrc >}}

In episode 4/6 I used the architecture diagram and  assembly language from the earlier videos to create a program that can
calculate a portion of the Fibonacci series. I then used the list of opcodes to 'hand assemble' the program making it suitable
for loading into the computer:

{{< youtube _iBnu5HXscI >}}

Episode 5/6 I took a visual tour around my relay computer as it stands today:

{{< youtube B_U0LM3CCgA >}}

In the last video, arguably the main attraction, I take everything covered so far and put it all together to demonstrate
running the Fibonacci program, for real, on my relay computer:

{{< youtube JZyFSrNyhy8 >}}

So, all in all, there's around 144 minutes of content in those videos above but I can assure you it took a lot longer than
that to create them so I'm pretty much video'd out for the moment ;) That said though, in February I'm going to have a think
about what comes next and what things I'd like to work on for my relay computer in the coming year ... I'll no doubt make a
video covering what I come up with and I'll be blogging, of course, about it here.