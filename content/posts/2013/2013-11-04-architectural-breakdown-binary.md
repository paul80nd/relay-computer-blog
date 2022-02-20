---
layout: post
title: 'Architectural breakdown: Binary'
date: '2013-11-04T10:35:00.001Z'
author: Paul Law
tags:
- theory
- Architecture
modified_time: '2013-11-20T23:03:22.828Z'
blogger_id: tag:blogger.com,1999:blog-6989692556630001604.post-6346513942404318337
blogger_orig_url: http://relaycomputer.blogspot.com/2013/11/architectural-breakdown-binary.html
---

... and it all begins with binary. Binary is a 'base 2' numbering system which 
means it uses the numbers 0 and 1. In contrast humans tend to use decimal 
(base 10) for their day-to-day numerical needs which, of course, uses the 
numbers 0 to 9. Binary is particularly suitable for electronics as the numbers 
0 and 1 can be represented by a circuit being on (1) or off (0), or more 
relevantly to this computer, a wire may be carrying power (1) or not (0). If 
you wanted to be able to carry a single decimal digit (0-9) on a wire you'd 
need to pull some fancy tricks - perhaps have a different level of power 
signifying the different digits or send pulses counting up the number. All 
this gets very complicated though - binary keeps it nice and simple.

So, given a single wire we can represent the numbers 0 
and 1 - which isn't much use if you want a computer to hold, say, the number 107. 
So how do we store larger numbers? Well, we do it much the same way we do 
in our base 10 decimal system. Think about what the number 107 actually 
represents:

     100s | 10s |  1s
    ------------------
       1  |  0  |  7

... 107 is one 100 plus zero 10s plus seven 1s. Binary works exactly the same way 
just rather than the columns being powers of 10 (because it's a base 10 
system) it's powers of 2:

     64s | 32s | 16s |  8s |  4s |  2s |  1s
    -----------------------------------------
      1  |  1  |  0  |  1  |  0  |  1  |  1
     
... 1x64 + 1x32  + 0x16 + 1x8 + 0x4 + 1x2 + 1x1 = 107. If we changed the 
value under the 16s column from 
a 0 to a 1 we'd then get a total of 123. Each column represents a single 
binary digit (or 'bit' for short). Easy :)

So, what do we mean when we say a computer is 8-bit or 16-bit (or 
64-bit for a more modern computer)? Well, taking the example above again, we 
can see that if we added one more column to the left (128s) we'd now have 8 
binary digits — that's an 8-bit number. Double the number of digits and we 
would have a 16-bit number. It doesn't matter if we're actively using all of 
the bits or not — you could represent 107 using 8-bit or 16-bit you just set 
all the unneeded values to 0 (1000 = 00001000 = 0000000000001000). What the 
'bittyness' of a number does impact is the largest number you can represent — 
so a 4-bit number can represent a maximum of 15 (8 + 4 + 2 + 1), an 8-bit 
number can represent up to 255 (128 + 64 + 32 + 16 + 8 + 4 + 2 + 1), a 16-bit 
number goes up to 65535 (32768 + 16384 + ... + 4 + 2 + 1). Notice how doubling 
the number of bits each time exponentially increases the maximum number you 
can represent. So, those modern 64-bit computers ... they can hold a number up 
to (2^64)-1 or, are you ready for this, 18,446,744,070,000,000,000 - that's 
eighteen quintillion, four hundred and forty-six quadrillion, seventy 
trillion. 

So far we've only looked at storing 
positive numbers which is quite straightforward. Things get a little more 
complicated when storing negative numbers. In decimal when we want to signify 
a number is negative we stick a negative sign in front of it. Computers 
perform much the same trick but they store the sign in the number itself so in 
an 8-bit number the highest bit (the 128s column) is reserved for signifying 
whether the number is positive (0) or negative (1). This does however mean we 
have less room for holding the number itself so the highest number we can hold 
is halved (because a 7-bit number could hold a maximum of 127) although as 
we'll see the total unique numbers we can store stays much the same. There's 
an extra complexity added to all this which is called two's complement: a 
negative number is represented by turning all the 1s to 0s and 0s to 1s in the 
number and then adding one to the result. The reason for this is that by 
storing negative numbers in this fashion the computer can add negative and 
positive numbers together without any further manipulation and the calculation 
just works. Here's an example of simple binary addition first:

                S | 4s | 2s | 1s
                ----------------
            3   0 |  0 |  1 |  1
          + 3   0 |  0 |  1 |  1
          = 6   0 |  1 |  1 |  0
            
Hold on, how did that all happen. Well, 
in the same way addition works in decimal ... we add the smallest numbers 
first and then carry. So starting in the 1s column: 1 + 1 (in binary) = 10, we 
keep the 0 and carry the 1. Next, in the 2s column: 1 + 1 = 10 plus the 
carried 1 = 11, we keep the 1 and carry the 1. Next, in the 4s column: 0 + 0 = 
0 plus the carried 1 = 1 and we're all done. Now, to get a negative number we 
make the two's complement:

                S | 4s | 2s | 1s
                ----------------
        3       0 |  0 |  1 |  1
    NOT 3       1 |  1 |  0 |  0
    NOT 3 + 1   1 |  1 |  0 |  1

So, we perform 
a NOT operation on each digit (0 -&gt; 1, 1 -&gt; 0) and then increment by 1. 
Minus three is therefore represented in binary as 1101 (remembering that the 
left most bit is now representing if the number is positive or negative). So, 
if we want to subtract 3 from 6 (using 6 + -3):

                S | 4s | 2s | 1s
                ----------------
         6      0 |  1 |  1 |  0
         + -3   1 |  1 |  0 |  1
         = 3    0 |  0 |  1 |  1
      
As before we add the smallest numbers first and then carry. So, 
starting in the 1s column: 0 + 1 = 1. Next, in the 2s column: 1 + 0 = 1. Next, 
in the 4s column: 1 + 1 = 10, we keep the 0 and carry the 1. Finally in the 
last column: 0 + 1 = 1 plus the carried 1 = 10, we keep the 0 and carry the 1 
(in this case the 1 is thrown away as there's nowhere to carry it to). There 
we are, back at three again. Another example is adding 1 to -1 which brings us 
back to 0:

               S | 4s | 2s | 1s
               ----------------
         -1    1 |  1 |  1 |  1
         + 1   0 |  0 |  0 |  1
         = 0   0 |  0 |  0 |  0
    
Notice that effectively the values roll on from negative to positive 
when you add one as you'd expect. Something interesting happens though when 
you take your highest possible positive number and add one:

               S | 4s | 2s | 1s
               ----------------
        7      0 |  1 |  1 |  1
        + 1    0 |  0 |  0 |  1
        = -8   1 |  0 |  0 |  0

Notice that if we weren't treating our result as being possibly 
negative this would be ordinary addition (7+1 = 8) but because our 'sign bit' 
means we have a negative number we've ended up with -8. One way to imagine 
this is that the numbers -8 through 0 and through to 7 are on the edge of a 
wheel — when you tip past the 7 you come back to -8. Effectively you could 
keep adding one to the number and you'd go around the wheel for ever and ever 
and ever. The interesting thing to note here though is that none of this makes 
any difference to the part of the computer doing the addition. It doesn't care 
whether you interpret the result as a negative or positive number it can do 
the same operation regardless and it's this that makes two's complement so 
useful. When we program the computer we can choose which interpretation to use 
depending on if we want to store negative numbers or only positive numbers. 
The trade off is that if we're using negative numbers we loose one bit for the 
sign so our number range changes accordingly. For an unsigned 8-bit number we 
can store anything from 0 through to 255. For a signed 8-bit number we can 
store anything from -128 through to 127.

OK, so that's the basics of binary done with. Next time I'll have a 
crack at describing what busses and registers are all about.