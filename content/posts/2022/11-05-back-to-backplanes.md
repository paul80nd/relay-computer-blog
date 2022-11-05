---
layout: post
title: 'Back to Backplanes'
slug: 'back-to-backplanes'
date: '2022-11-05T11:00:00.000Z'
author: Paul Law
cards:
- backplane
tags:
- design
- construction
thumbnail: /img/posts/2022/2022-11-05-4000.png
---

Quite a while ago I 
[decided to give up on the tedious wire wrap technique]({{< relref "posts/2019/01-14-change-of-approach" >}})
for building my cards. Although it was certainly more authentic and in-keeping with my computer's theme it was
massively time consuming for me and was ultimately putting me off making progress on construction.

Another problem with my previous construction methods was creating monstrosities like this:

{{< fig >}}![W Backplane Rear View](/img/posts/2016/2016-04-11-0001.jpg){{< /fig >}}

This is the 'W' backplane connector which connects five of the 'W' type cards together ... and its as precarious as
it looks and over time I've found the ribbon cable on the back of these backplanes are getting a bit temperamental.
If left well alone they're fine but any knocks or pokes and whole lines can become disconnected. To solve this I
[made my own PCB]({{< relref "posts/2019/03-04-making-a-pcb" >}}) for the Y backplane removing the need for the ribbon cable:

{{< fig >}}![Backplane Y PCB](/img/posts/2019/2019-01-14-0002.png){{< /fig >}}

Unsurprisingly then I'm fully intending to replace the remaining backplane cards utilising a similar approach. However,
I'm not completely mad ... I won't be making these PCBs by hand and will get a proper PCB company to manufacture these cards
instead. As such, I've already got the design underway with bays W, Y and Z designed so far:

{{< fig caption="W Backplane" >}}
![Photo view (top)](/img/posts/2022/2022-11-05-0001.png)
![Photo view (top)](/img/posts/2022/2022-11-05-0002.png)
{{< /fig >}}

{{< fig caption="Y Backplane" >}}
![Photo view (top)](/img/posts/2022/2022-11-05-0005.png)
![Photo view (top)](/img/posts/2022/2022-11-05-0006.png)
{{< /fig >}}

{{< fig caption="Z Backplane" >}}
![Photo view (top)](/img/posts/2022/2022-11-05-0003.png)
![Photo view (top)](/img/posts/2022/2022-11-05-0004.png)
{{< /fig >}}

Now, this is a big step forward in reliability for the backplane cards but there still something I'm not totally happy about:

{{< fig >}}![Photo view (top)](/img/posts/2022/2022-11-05-0007.jpg){{< /fig >}}

It's (what I can only describe as) a 'nest' of ribbon cables. To be fair, this is a photo taken on one of the computer's
'tidier' days and more usually there's cables all over the place and everything is visually chaotic. This is something that's
always bothered me especially when I'm tracking down a fault or need to work around the backplanes.

So, the thought process went like this ... if I can replace ribbon cables on the backplane itself why can't I do something
similar for the ribbon cables running between the backplanes? ... and then it hit me ... why not just replace the ribbon cables
in that area with another PCB ... a 'daughterboard' that plugs into the back of each backplane.

Well, yup, there's designs for those too ...

{{< fig >}}![Photo view (top)](/img/posts/2022/2022-11-05-0008.png){{< /fig >}}

These daughterboards then connect to each other via a single ribbon cable and you can see where the backplane 'X' daughter
board will go in this pattern at the top left.

I'm really pleased with the aesthetics of these and, actually, I had the W backplane manufactured a while ago along with a
slightly earlier version of the W daughterboard design above. I didn't get around to blogging about it at the time (that's now
_this_ post) but here's some pictures:

{{< fig caption="W Backplane" >}}
![Photo view (top)](/img/posts/2022/2022-11-05-0009.jpg)
![Photo view (top)](/img/posts/2022/2022-11-05-0010.jpg)
{{< /fig >}}

{{< fig caption="W Backplane Daughterboard" >}}
![Photo view (top)](/img/posts/2022/2022-11-05-0011.jpg)
![Photo view (top)](/img/posts/2022/2022-11-05-0012.jpg)
{{< /fig >}}

{{< fig caption="W Backplane + Daughterboard" >}}
![Photo view (top)](/img/posts/2022/2022-11-05-0013.jpg)
{{< /fig >}}

If you've been keeping an eye out on my [YouTube channel](https://www.youtube.com/user/paul80nd) you'll know I'm nearing
the completion of the design for the clock card. Well, as always, these videos are produced quite a bit ahead of the date
I publish them so actually I've already received the manufactured clock PCB but also received the revised W backplane
daughterboard along with the Z and Y backplane/daughterboard pairs. I'll fit these to the computer in due course and
blog or video them if there's anything of particular note but failing that they'll just 'magically' appear at some point.

If you'd like to take a closer look at any of these you can find the full colour previews in PDF format as follows:

* [Backplane W](/pdf/backplane-w-pcb.pdf) + [Daughterboard W](/pdf/backplane-db-w-pcb.pdf)
* [Backplane Y](/pdf/backplane-y-pcb-2.pdf) + [Daughterboard Y](/pdf/backplane-db-y-pcb.pdf)
* [Backplane Z](/pdf/backplane-z-pcb.pdf) + [Daughterboard Z](/pdf/backplane-db-z-pcb.pdf)

You can also see the schematic for these cards (or even download the Gerber files and manufacture one of your own) at
the [progress page]({{< relref "/pages/progress" >}}) and [cards page]({{< relref "/cards/backplane" >}}).
