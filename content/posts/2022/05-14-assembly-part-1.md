---
layout: post
title: 'Assembling an assembler - overview'
slug: 'assembly-part-1'
date: '2022-05-14T11:00:00.000Z'
author: Paul Law
tags:
- coding
thumbnail: /img/posts/2022/2022-05-14-4000.png
---

To make my relay computer do something interesting (or anything at all) it needs a list of instructions held in 
memory. Each instruction consists of an 8-bit value called an opcode (portmanteau of operation and code) optionally
followed by one or two further 8-bit values (usually referencing a location in memory). The computer will work 
through them one at a time doing whatever operation that opcode represents. Here’s an example program:

```
41
60
11
08
81
E8 00 05
E6 00 02
```

Can you guess what it does? If you’ve not seen it before or you aren’t extremely familiar with this computer’s
instruction set it’s going to be a tough ask. Imagine then that you need to write a much more complicated program 
with 100s of lines ... a tough ask becomes a Herculean task. This is why ‘higher level’ languages came about as it makes
writing a program easier for the user but then, of course, there’s some translation needed to get that back to the 
‘low level’ list of machine code/instructions. 

Assembly language is a good choice for something that’s well balanced between human and machine. In the simplest cases
most assembly language instructions have a 1:1 relationship with an equivalent 8-bit machine operation but beyond the 
basics assembly language can make looping, logic branching, handling data and so on much, much easier. Try this example:

```
start:  ldi a,1     ; initial setup A = 1
        ldi b,0     ;               B = 0

loop:   mov c,b     ; slide B -> C
        mov b,a     ;       A -> B
        add         ; and add together

done:   bcs done    ; infinite loop if overflowed

        jmp loop    ; otherwise have another go
```

If you haven’t spotted it (and don’t feel bad if you haven’t) this is the exact same program you saw before ... just the 
assembly language equivalent. So, how do we get from one to the other then? Well that’s the job of an assembler. Let’s try the example above by hand first to get a feel for what's involved.

To start with let's look at our first set of assembly language instructions - `ldi`, `mov` and `add`:

<figure>
<svg class="railroad-diagram" width="420" height="92" viewBox="0 0 420 92">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g class="terminal ">
<path d="M50 31h0"></path>
<path d="M94 31h0"></path>
<rect x="50" y="20" width="44" height="22" rx="10" ry="10"></rect>
<text x="72" y="35">ldi</text>
</g>
<path d="M94 31h10"></path>
<g>
<path d="M104 31h0"></path>
<path d="M172 31h0"></path>
<path d="M104 31h20"></path>
<g class="terminal ">
<path d="M124 31h0"></path>
<path d="M152 31h0"></path>
<rect x="124" y="20" width="28" height="22" rx="10" ry="10"></rect>
<text x="138" y="35">a</text>
</g>
<path d="M152 31h20"></path>
<path d="M104 31a10 10 0 0 1 10 10v10a10 10 0 0 0 10 10"></path>
<g class="terminal ">
<path d="M124 61h0"></path>
<path d="M152 61h0"></path>
<rect x="124" y="50" width="28" height="22" rx="10" ry="10"></rect>
<text x="138" y="65">b</text>
</g>
<path d="M152 61a10 10 0 0 0 10 -10v-10a10 10 0 0 1 10 -10"></path>
</g>
<path d="M172 31h10"></path>
<g class="terminal ">
<path d="M182 31h0"></path>
<path d="M210 31h0"></path>
<rect x="182" y="20" width="28" height="22" rx="10" ry="10"></rect>
<text x="196" y="35">,</text>
</g>
<path d="M210 31h10"></path>
<path d="M220 31h10"></path>
<g class="non-terminal ">
<path d="M230 31h0"></path>
<path d="M370 31h0"></path>
<rect x="230" y="20" width="140" height="22"></rect>
<text x="300" y="35">value (-16..15)</text>
</g>
<path d="M370 31h10"></path>
<path d="M 380 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</figure>

<figure>
<svg class="railroad-diagram" width="451" height="152" viewBox="0 0 451 152">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g class="terminal ">
<path d="M50 31h0"></path>
<path d="M94 31h0"></path>
<rect x="50" y="20" width="44" height="22" rx="10" ry="10"></rect>
<text x="72" y="35">mov</text>
</g>
<path d="M94 31h10"></path>
<path d="M104 31h10"></path>
<g class="comment ">
<path d="M114 31h0"></path>
<path d="M159 31h0"></path>
<text x="136.5" y="36" class="comment">dest:</text>
</g>
<path d="M159 31h10"></path>
<g>
<path d="M169 31h0"></path>
<path d="M237 31h0"></path>
<path d="M169 31h20"></path>
<g class="terminal ">
<path d="M189 31h0"></path>
<path d="M217 31h0"></path>
<rect x="189" y="20" width="28" height="22" rx="10" ry="10"></rect>
<text x="203" y="35">a</text>
</g>
<path d="M217 31h20"></path>
<path d="M169 31a10 10 0 0 1 10 10v10a10 10 0 0 0 10 10"></path>
<g class="terminal ">
<path d="M189 61h0"></path>
<path d="M217 61h0"></path>
<rect x="189" y="50" width="28" height="22" rx="10" ry="10"></rect>
<text x="203" y="65">b</text>
</g>
<path d="M217 61a10 10 0 0 0 10 -10v-10a10 10 0 0 1 10 -10"></path>
<path d="M169 31a10 10 0 0 1 10 10v40a10 10 0 0 0 10 10"></path>
<g class="terminal ">
<path d="M189 91h0"></path>
<path d="M217 91h0"></path>
<rect x="189" y="80" width="28" height="22" rx="10" ry="10"></rect>
<text x="203" y="95">c</text>
</g>
<path d="M217 91a10 10 0 0 0 10 -10v-40a10 10 0 0 1 10 -10"></path>
<path d="M169 31a10 10 0 0 1 10 10v70a10 10 0 0 0 10 10"></path>
<g class="terminal ">
<path d="M189 121h0"></path>
<path d="M217 121h0"></path>
<rect x="189" y="110" width="28" height="22" rx="10" ry="10"></rect>
<text x="203" y="125">d</text>
</g>
<path d="M217 121a10 10 0 0 0 10 -10v-70a10 10 0 0 1 10 -10"></path>
</g>
<path d="M237 31h10"></path>
<g class="terminal ">
<path d="M247 31h0"></path>
<path d="M275 31h0"></path>
<rect x="247" y="20" width="28" height="22" rx="10" ry="10"></rect>
<text x="261" y="35">,</text>
</g>
<path d="M275 31h10"></path>
<path d="M285 31h10"></path>
<g class="comment ">
<path d="M295 31h0"></path>
<path d="M333 31h0"></path>
<text x="314" y="36" class="comment">src:</text>
</g>
<path d="M333 31h10"></path>
<g>
<path d="M343 31h0"></path>
<path d="M411 31h0"></path>
<path d="M343 31h20"></path>
<g class="terminal ">
<path d="M363 31h0"></path>
<path d="M391 31h0"></path>
<rect x="363" y="20" width="28" height="22" rx="10" ry="10"></rect>
<text x="377" y="35">a</text>
</g>
<path d="M391 31h20"></path>
<path d="M343 31a10 10 0 0 1 10 10v10a10 10 0 0 0 10 10"></path>
<g class="terminal ">
<path d="M363 61h0"></path>
<path d="M391 61h0"></path>
<rect x="363" y="50" width="28" height="22" rx="10" ry="10"></rect>
<text x="377" y="65">b</text>
</g>
<path d="M391 61a10 10 0 0 0 10 -10v-10a10 10 0 0 1 10 -10"></path>
<path d="M343 31a10 10 0 0 1 10 10v40a10 10 0 0 0 10 10"></path>
<g class="terminal ">
<path d="M363 91h0"></path>
<path d="M391 91h0"></path>
<rect x="363" y="80" width="28" height="22" rx="10" ry="10"></rect>
<text x="377" y="95">c</text>
</g>
<path d="M391 91a10 10 0 0 0 10 -10v-40a10 10 0 0 1 10 -10"></path>
<path d="M343 31a10 10 0 0 1 10 10v70a10 10 0 0 0 10 10"></path>
<g class="terminal ">
<path d="M363 121h0"></path>
<path d="M391 121h0"></path>
<rect x="363" y="110" width="28" height="22" rx="10" ry="10"></rect>
<text x="377" y="125">d</text>
</g>
<path d="M391 121a10 10 0 0 0 10 -10v-70a10 10 0 0 1 10 -10"></path>
</g>
<path d="M 411 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</figure>

<figure>
<svg class="railroad-diagram" width="277" height="112" viewBox="0 0 277 112">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g class="terminal ">
<path d="M50 31h0"></path>
<path d="M94 31h0"></path>
<rect x="50" y="20" width="44" height="22" rx="10" ry="10"></rect>
<text x="72" y="35">add</text>
</g>
<path d="M94 31h10"></path>
<path d="M104 31h10"></path>
<g class="comment ">
<path d="M114 31h0"></path>
<path d="M159 31h0"></path>
<text x="136.5" y="36" class="comment">dest:</text>
</g>
<path d="M159 31h10"></path>
<g>
<path d="M169 31h0"></path>
<path d="M237 31h0"></path>
<path d="M169 31h20"></path>
<g>
<path d="M189 31h28"></path>
</g>
<path d="M217 31h20"></path>
<path d="M169 31a10 10 0 0 1 10 10v0a10 10 0 0 0 10 10"></path>
<g class="terminal ">
<path d="M189 51h0"></path>
<path d="M217 51h0"></path>
<rect x="189" y="40" width="28" height="22" rx="10" ry="10"></rect>
<text x="203" y="55">a</text>
</g>
<path d="M217 51a10 10 0 0 0 10 -10v0a10 10 0 0 1 10 -10"></path>
<path d="M169 31a10 10 0 0 1 10 10v30a10 10 0 0 0 10 10"></path>
<g class="terminal ">
<path d="M189 81h0"></path>
<path d="M217 81h0"></path>
<rect x="189" y="70" width="28" height="22" rx="10" ry="10"></rect>
<text x="203" y="85">d</text>
</g>
<path d="M217 81a10 10 0 0 0 10 -10v-30a10 10 0 0 1 10 -10"></path>
</g>
<path d="M 237 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</figure>

These 'railroad' diagrams show the acceptable syntax of each assembly language instruction:
 
* `ldi` loads an immediate value in to either register a or b
* `mov` copies a value from one register (a, b, c or d) to another register (again - a, b, c or d)
* `add` adds the values in register b and c together placing the result in register a or d (if the destination 
  isn't specified it'll assume register a).

As mentioned above each of these assembly instructions has a direct equivalent opcode and we can use our opcode charts 
to work out what they should be:

{{< instruction SETAB >}}
{{< instruction MOV8 >}}
{{< instruction ALU >}}

We see here then that `ldi` is a specific variant of a SETAB class opcode, `mov` similarly for the MOV8 class and
`add` for the ALU class. Taking all this together then we arrive at:

```
01000001  |  start:  ldi a,1     ; initial setup A = 1
01100000  |          ldi b,0     ;               B = 0

00010001  |  loop:   mov c,b     ; slide B -> C
00001000  |          mov b,a     ;       A -> B
10000001  |          add         ; and add together

????????  |  done:   bcs done    ; infinite loop if overflowed

????????  |          jmp loop    ; otherwise have another go
```

We've now got the 8-bit opcodes for most of our assembly instructions. Typically when writing these 8-bit values we do
it in hexadecimal rather than binary (as it's shorter) - let's update what we've got:

```
41  |  start:  ldi a,1     ; initial setup A = 1
60  |          ldi b,0     ;               B = 0

11  |  loop:   mov c,b     ; slide B -> C
08  |          mov b,a     ;       A -> B
81  |          add         ; and add together

??  |  done:   bcs done    ; infinite loop if overflowed

??  |          jmp loop    ; otherwise have another go
```

Notice how this is now starting resemble the 'random numbers' at the top of this post?

So what about those last two lines? What do we do about the loop and jump? Let's start with the railroad diagram
for branching operations:

<figure>
<svg class="railroad-diagram" width="416" height="92" viewBox="0 0 416 92">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<g>
<path d="M40 31h0"></path>
<path d="M296 31h0"></path>
<path d="M40 31h20"></path>
<g>
<path d="M60 31h25.5"></path>
<path d="M250.5 31h25.5"></path>
<g class="comment ">
<path d="M85.5 31h0"></path>
<path d="M186.5 31h0"></path>
<text x="136" y="36" class="comment">unconditional</text>
</g>
<path d="M186.5 31h10"></path>
<path d="M196.5 31h10"></path>
<g class="terminal ">
<path d="M206.5 31h0"></path>
<path d="M250.5 31h0"></path>
<rect x="206.5" y="20" width="44" height="22" rx="10" ry="10"></rect>
<text x="228.5" y="35">jmp</text>
</g>
</g>
<path d="M276 31h20"></path>
<path d="M40 31a10 10 0 0 1 10 10v10a10 10 0 0 0 10 10"></path>
<g>
<path d="M60 61h0"></path>
<path d="M276 61h0"></path>
<g class="comment ">
<path d="M60 61h0"></path>
<path d="M147 61h0"></path>
<text x="103.5" y="66" class="comment">conditional</text>
</g>
<path d="M147 61h10"></path>
<path d="M157 61h10"></path>
<g class="comment ">
<path d="M167 61h0"></path>
<path d="M212 61h0"></path>
<text x="189.5" y="66" class="comment">carry</text>
</g>
<path d="M212 61h10"></path>
<path d="M222 61h10"></path>
<g class="terminal ">
<path d="M232 61h0"></path>
<path d="M276 61h0"></path>
<rect x="232" y="50" width="44" height="22" rx="10" ry="10"></rect>
<text x="254" y="65">bcs</text>
</g>
</g>
<path d="M276 61a10 10 0 0 0 10 -10v-10a10 10 0 0 1 10 -10"></path>
</g>
<path d="M296 31h10"></path>
<g class="non-terminal ">
<path d="M306 31h0"></path>
<path d="M366 31h0"></path>
<rect x="306" y="20" width="60" height="22"></rect>
<text x="336" y="35">label</text>
</g>
<path d="M366 31h10"></path>
<path d="M 376 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</figure>

`jmp` will set the program counter to a given location unconditionally (i.e. always). `bcs` will also set the program
counter to a given location but only if the last arithmetic operation set the 'carry' flag (i.e. it overflowed)
otherwise the program counter will move on to the next location in memory. In the case of our code above the
arithmetic operation is the immediately preceding `add`.

`jmp` and `bcs` have opcode equivalents of course but how do we translate those labels, as in, how do we say where we
want to jump to? Well, it turns out that whilst assembling we need to keep track of where the program counter will be. 
Let's assume the program starts at the first location in memory (address 0000 in hexadecimal) and counting up from there
we get the following:

```
0000: 41  |  start:  ldi a,1     ; initial setup A = 1
0001: 60  |          ldi b,0     ;               B = 0

0002: 11  |  loop:   mov c,b     ; slide B -> C
0003: 08  |          mov b,a     ;       A -> B
0004: 81  |          add         ; and add together

0005: ??  |  done:   bcs done    ; infinite loop if overflowed

0008: ??  |          jmp loop    ; otherwise have another go
```

We now have a 16-bit value at the far left of each line representing a location in memory (for where that program line is 
stored). Hang on though, why did the counter jump three places rather than one at the jumps? Well, those instructions need to be followed by a 16 bit value for where in memory you need to jump to like so:

{{< instruction GOTO >}}

… and those labels … they represent a certain location in memory making it much easier for the human to indicate where 
in the program they want to jump to without having to do the program counter tracking in their head. 

We can now finish the hand assembling by replacing those labels with the now known program counter values to arrive at:

```
0000: 41        |  start:  ldi a,1     ; initial setup A = 1
0001: 60        |          ldi b,0 

0002: 11        |  loop:   mov c,b     ; slide B -> C
0003: 08        |          mov b,a     ;       A -> B
0004: 81        |          add         ; and add together

0005: E8 00 05  |  done:   bcs done    ; infinite loop if overflowed

0008: E6 00 02  |          jmp loop    ; otherwise have another go
```

Removing all our 'working out' above we get back to where we first started:

```
41
60
11
08
81
E8 00 05
E6 00 02
```

Now, this is a really simple example but that’s the basics of an assembler. From here though you could extend the 
assembly language to allow the human programmer to change where the program counter starts from or maybe to allow some 
basic arithmetic around labels (so `label1 + 5` for example ... i.e. 5 locations further on from wherever `label1` points
to). Commercial assemblers can be much more sophisticated but it always comes down to producing a list of values that 
will be loaded into a computer’s memory for it to follow and operate on. 

In designing my assembly language I’ve drawn inspiration from several existing ones out there to produce something that 
I personally find aesthetically pleasing. The mnemonics are mostly inspired by 
[6502](https://en.wikipedia.org/wiki/MOS_Technology_6502) (used in computers like the Commodore 64 and BBC Micro) as I
like that they are all three characters which makes everything line up neatly (to my eye) but I also like the parameter format of [Z80](https://en.wikipedia.org/wiki/Zilog_Z80) (used in the Sinclair ZX Spectrum - my first computer). If you compare my assembly language with those I’m sure you can see the influences coming through and as I add more to my assembly language you’ll see this pattern continue. 

So, that’ll do for this post - next time in this mini series I’ll take a look at how I can write an assembler that will
automate this whole assembly language to machine code translation process. Looking at what I did by hand above you might
think it’s quite easy but think about what I’m doing above. There’s a lot comes for free with the human brain and I’m 
automatically extracting a lot of semantic meaning out of what really is just a series of characters - a file of text ... 
the assembler is going to need to be taught all of that. 

If you're hungry for more in the meanwhile though you can find the 
[complete railroad diagrams here]({{< relref "/pages/assembly" >}}) and there's also a video below going through my
chosen assembly language instructions ...

{{< youtube IQW445iMnrc >}}
