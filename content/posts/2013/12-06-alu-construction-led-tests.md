---
layout: post
title: 'ALU Construction: LED Tests'
date: '2013-12-06T20:55:00.000Z'
author: Paul Law
tags:
- construction
- video
- ALU
modified_time: '2013-12-06T20:55:08.192Z'
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-5299767763719193145
blogger_orig_url: http://relaycomputer.blogspot.com/2013/12/alu-construction-led-tests.html
---

Following on from my last post I can now test the LEDs that have been soldered 
and hooked up to the header pins on each of the three ALU cards (Logic, 
Arithmetic and Control). As promised, here are the videos of said testing:

{% include youtube-player.html id="v5X9MSLctaM" %}

{% include youtube-player.html id="FYBwbvHwhFc" %}

{% include youtube-player.html id="bl5los2hLNQ" %}

You might notice I'm prodding around slightly 
more carefully on the arithmetic and control cards ... due to a lack of 
foresight I've ended up with every second header pin being a direct line to 0v 
... which is not great when the thing I'm holding has 12v at the tip. Luckily 
my power supply handles short circuits well but even the briefest of sparks 
can be a tad embarrassing. At some point I'll chop off the extraneous header 
pins (as they're not needed) to ensure I don't accidentally wire-wrap to one 
of them later on. 