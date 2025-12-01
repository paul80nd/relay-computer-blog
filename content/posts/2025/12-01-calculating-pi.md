---
layout: post
title: 'Calculating Pi'
slug: 'calculating-pi'
date: '2025-12-01T08:00:00.000Z'
author: Paul Law
tags:
- coding
- theory
- video
thumbnail: /img/posts/2025/2025-12-01-4000.jpg
---

Talk about raking over old coals! Well, for those of you who follow my YouTube channel this’ll mostly be old news but here I
am, six months after the event, finally updating my blog. There's new news on what’s next though, so hang in there.

For some reason lately I seem to be adopting a pattern of completely overstretching myself with a mammoth video series and then
having to take the rest of the year off ... and 2025 was no exception - this time with my ‘grandest’ challenge yet: to see if I could get
my relay computer to calculate Pi to 20 digits.

This all started innocently enough with a gauntlet thrown down in a video comment:

{{< fig caption="Gauntlet thrown down" >}}![Gauntlet thrown down](/img/posts/2025/2025-12-01-0000.png){{< /fig >}}

Now, to be fair, I don’t take every YouTube comment as a call to action (otherwise I’d have spent the last three or four years
building a relay computer port of Doom), but this one seemed within reasonable grasp while also being a decent intellectual challenge.

In theory it’s totally possible for any [Turing complete]({{< relref "/posts/2025/03-16-turing-completeness" >}}) computer but, as
with most things computing, run-time would be the major factor. Well, that and I couldn’t remember how to do long division.

So, where to start?! At the beginning I guess ...

{{< youtube tcgfeRkKpMU UAIYP3sQdtc >}}

... and I’ll fully admit I started the video series before I had a clear idea of exactly how I’d arrive at Pi. For some that might seem
foolhardy but, in many ways, it was my way of avoiding procrastination. By laying down the first video I'd committed myself to seeing
the project through to some degree of completion.

After setting out the general direction in the first video there were some basics I needed to cover (and reaffirm for myself) and this was
all about breaking down the challenge into smaller programming tasks.

{{< youtube 7DCDP3Giywg 0N6kBriM2z0 >}}

I knew I’d be writing a lot of new subroutines and mathematical functions to do the heavy lifting which led me to using a high-level language
(Microsoft .NET) to prove out the approach before spending considerable time writing assembly code.

I continued breaking the challenge into smaller problems until episode 5 where I hit a celebratory milestone:

{{< youtube subFMbYxcc8 V-U6E-uJrpM>}}

That milestone was, of course, achieving [Turing completeness]({{< relref "/posts/2025/03-16-turing-completeness" >}}). In effect the
relay computer had been ‘Turing ready’ for some time ... it just needed a handful of relays soldered in to complete the controller cards
thereby gaining the ability to save and retrieve values to and from memory. In my typical self-deprecating way I only made a
fair-to-medium fuss over this milestone but internally I was immensely proud.

With the ability to shuffle values around in memory it was time to put that to good use and lay down the long addition and subtraction
approaches in episode 6. So far so good — which just left the unavoidable challenge I’d been quietly dreading ...

{{< youtube qEJRCGBKgwo 1axNdrTlE7Q >}}

... binary long division. This took two episodes to cover - not just to get the routine working but to optimise it as best I could. This
was important as the division routines are core to the overall calculation and run many-many times meaning their run-time make a bit
impact in the overall run-time.

By this point I had all the ‘ingredients’ I needed to pull off the Pi calculation so the next step was to bring it all together:

{{< youtube BP_x1ufQpiw >}}

Which turned into to a mamoth 45-minute episode and became quite a deep dive into assembly programming ... but it
was all worth it in the end, wasn’t it?

Well, not quite. I absolutely achieved calculating Pi to 20 decimal places — but only in my emulator. The problem was that the
projected run-time was around twelve and a half hours — way too long for my computer to realistically run. There was no doubt about
the theory but could I guarantee perfect execution for that length of time? No chance.

Behind the scenes I’d been having numerous reliability problems running my computer and getting a successful run of even simple routines
was becoming a bit of a dice roll — which was especially annoying when a fault would appear in the last couple of instructions (as it
often did). The main culprit was dry joints in my ground lines which is where the ‘randomness’ of the faults came from.

{{< fig caption="Dry - so very, very, dry." >}}![Dry - so very, very, dry.](/img/posts/2025/2025-12-01-0001.jpg){{< /fig >}}

Fixing those problems isn’t the only answer to unlocking Pi (although fix them I must). There’s no escaping that twelve hours is still an awfully long
time to run a relay computer - even with perfect reliability. My computer also has a finite lifespan dictated by the relays themselves and,
well, I don’t want to spend it all on one challenge.

Is there another way? I didn’t want to give up on the idea of Pi just yet so I spent the summer ‘having a think’ and it dawned on me that I
should just do what others have done before me: if it’s too slow to run in code then implement it in hardware. Yup, the way forward was clear:
I needed to implement a hardware divider unit.

So, I spent the next couple of months prototyping that and then seeing what impact it’d have on the Pi routine and ... well ... it’s twelve hours
down to around four. Quite the saving and it basically puts Pi back within reasonable reach. The question now is ... should I keep going? This
will be another considerable build (and at considerable cost) and today I’m right on the decision point of whether to proceed or not.
