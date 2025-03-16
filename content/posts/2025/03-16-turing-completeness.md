---
layout: post
title: 'Turing Completeness'
slug: turing-completeness
date: '2025-03-16T06:00:00.004Z'
author: Paul Law
cards:
- controller
tags:
- control
- completion
- video
thumbnail: /img/posts/2025/2025-03-16-4000.png
---

Well, it's only taken 12 years but my computer has finally reached a major milestone - Turing completeness.

The architecture of my computer has, of course, been
[Turing complete](https://en.wikipedia.org/wiki/Turing_completeness) all along, that is, it's capable of simulating
a Turing machine and therefore represents the design of a general purpose computer.

{{< fig caption="Relay Computer Architecture ([larger](/img/posts/shared/architecture-lg.png))" >}}![Relay Computer Architecture](/img/posts/shared/architecture-sm.png){{< /fig >}}

The challenge has been bringing that architecture and design into physical reality and that's where the last 12 years
have gone. Now, obviously it doesn't take that long to build a relay computer if you're working on it full time but for
me this has been a part time hobby and something I've fallen in and out of fondness for. Nonetheless, my relay computer
is *now* Turing complete.

So, what's changed to make this a milestone event? ... I've soldered some relays in to the controller card.

In my [last post]({{< relref "/posts/2025/03-09-controller-load-store-incxy-design" >}}) I covered the LOAD, STORE and
INCXY instruction classes. These are the last of the major instructions to be completed on the controller cards and of
all of these it's STORE that tips me over to Turing completeness. To date, my computer has been rather constrained in
that the only place data can be written and amended is in the eight general purpose registers. That'll support
running simple programs but to do anything more complicated you really, really need to be able to write values
to memory.

This is what the upper controller card looked like before the milestone:

{{< fig caption="upper controller card before ([larger](/img/posts/2025/2025-03-16-1000.jpg))" >}}![upper controller card before](/img/posts/2025/2025-03-16-0000.jpg){{< /fig >}}

... and this is what it looks like after ...

{{< fig caption="upper controller card after ([larger](/img/posts/2025/2025-03-16-1001.jpg))" >}}![upper controller card after](/img/posts/2025/2025-03-16-0001.jpg){{< /fig >}}

... and that completes the controller cards generally ...

{{< fig caption="complete controller cards ([larger](/img/posts/2025/2025-03-16-1002.jpg))" >}}![compete controller cards](/img/posts/2025/2025-03-16-0002.jpg){{< /fig >}}

... and with that my computer becomes Turing complete and I can start writing much more complicated programs. How much
more complicated? Well, how about calculating Pi to 20 decimal places?

If you've been following my YouTube channel you'll know calculating Pi is exactly the challenge I'm currently
undertaking. At the point of writing this I'm roughly half way through the challenge and although I don't know
exactly how I'll get my computer to calculate Pi (it'll involve long division, addition and subtraction at the very
least) I know that because calculating Pi *is* computable then it can be calculated by a computer and because my
relay computer now is worthy of the title 'computer' it can theoretically do it. The challenge, if anything, will be
will my relay computer run reliably enough for long enough to achieve the result.

Here's the video in the Pi series where my computer becomes Turing complete and at the end I run a revised version of
my Fibonacci series program but this time the values are written into memory rather than being overwritten in the
registers at each iteration.

{{< youtube subFMbYxcc8 >}}

So, is the computer 'done' now? Well, not really ... it's definitely a true computer now but there's plenty of scope for
extending and improving the computer. Particularly in the arena of input and output there's much that can be improved.
Loading programs at the moment is a particular pain point and requires entering hex instructions line-by-line so that
could do with 'something clever'. Likewise, writing values to memory is fine but it's not that easy for the human
operator to see those values so some form of output be that a display of some kind or maybe even a printer would be a
great addition.

For now though I wanted to mark the point my computer became a 'computer' and I think the next milestone is getting it
to do something 'useful' ... perhaps calculating Pi if things go well.
