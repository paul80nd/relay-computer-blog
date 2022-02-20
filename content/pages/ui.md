---
title: UI Summary
---

The computer's user interface is comprised of two display cards (A and B) and then a row of data and control switches. Display A shows the state of the various control signals and allows the user to manually set those signals when the computer is placed in the 'diagnostic mode'. Display B likewise shows other control signals but these are read only. Additionally Display B also shows the state of the data and address busses and shows the current consumption of the computer. The two display cards are wired out to the various busses on the display distribution card.

The auxiliary control card reads in from the data and control switches and can perform a limited set of operations such as loading memory and increasing the PC register to make entering programs easier.

Details of the design, construction and testing of each of the user interface components can be found in the following posts:

| | Design | Construction | Testing |
|-|--------|--------------|---------|
| **UI**<br />*(in general)* | [Instruction, Clock and Sequencer]({% post_url 2015-04-08-user-interface-design-instruction-clock %}) | [Instruction, Clock and Sequencer]({% post_url 2016-03-29-user-interface-construction-instruction %}) | [ALU &amp; Registers A-D Test]({% post_url 2014-08-19-alu-registers-d-test-with-new-display %}) |
| **Control Switch Bar** | [Data Swtiches]({% post_url 2014-07-05-user-interface-data-switches %})<br />Auxiliary Control ([Part 1]({% post_url 2018-01-24-auxiliary-control-design-part-1-of-3 %}), [Part 2]({% post_url 2018-01-29-auxiliary-control-design-part-2-of-3 %}), [Part 3]({% post_url 2018-02-07-auxiliary-control-design-part-3-of-3 %})) | [Data Switches]({% post_url 2014-07-05-user-interface-data-switches %})<br />[Auxiliary Control]({{ site.baseurl}}{% post_url 2018-03-27-auxiliary-control-construction %}) | |
| **Display A** | [Initial Design]({% post_url 2014-07-12-user-interface-display-initial-design %}) | [Initial Construction]({% post_url 2014-07-12-user-interface-display-initial-design %})<br />[Address Bus]({% post_url 2017-11-05-miscellany-special-backplane-x-cable %}) | |
| **Display B** | [Initial Design]({% post_url 2014-07-20-user-interface-display-b-initial-design %}) | [Initial Construction]({% post_url 2014-07-20-user-interface-display-b-initial-design %})<br />[Address Bus]({% post_url 2017-11-05-miscellany-special-backplane-x-cable %}) | |
