---
layout: post
title: 'Controller Construction'
date: '2019-12-21T03:03:00.004Z'
author: Paul Law
tags:
- control
- completion
- construction
- video
modified_time: '2019-12-21T03:03:00.004Z'
thumbnail: /assets/img/posts/2019/2019-12-21-4000.jpg
---

In my last couple of posts I covered off the full design for the controller unit. As the PCBs have now arrived I
can get on with soldering up the cards and giving them a test. As mentioned in my last post, although the controller
supports all the instruction classes the computer will eventually use I'm only soldering up the ALU, GOTO, MOV8 and
SETAB instructions for now.

Let's start with the lower card and, as before, I've put together a video which covers the highlights:

{% include youtube-player.html id="kMu4q65IUk8" %}

Likewise, here's a video covering the upper card construction;

{% include youtube-player.html id="iCu2DRJhtUc" %}

Finally here's a video which brings the two cards together and gives the whole controller unit a test (on its own to
begin with and then installed as part of the computer):

{% include youtube-player.html id="Z1RIFHWTGRo" %}

So, with the controller done I'm really close to getting branching working in the computer. However, as I covered in the last
video above, the computer can't currently identify a GOTO opcode even though the controller can perform one. What's needed
then is an update to the decoder card to fix that and then branching is finally possible. Fortunately the decoder is one of
the simplest cards in the computer so it shouldn't take long to do.
