---
date: 2016-08-17 19:00:00
layout: post
title: "Merging Partitioned Data Without Conflicts (Ever!): The Magic of CRDTs"
speaker: "R. J. Osborne"
---

Your Sets, Dictionaries and Graphs have a problem. It is difficult to merge changes made in your domain -- especially
if they happen simultaneously with shared data across nodes. This compounds once you consider disconnected apps and
partitioned networks in or between data centers. Convergent Replicated Data Types solve these problems by allowing
updates to arrive out of order, or even replayed without risk of corruption. You will be introduced to these data
structures and given a tour of the tradeoffs and advantages of using them. While the technology is fairly new,
libraries are cropping up across platforms. You’ll be ready to assess them and make decisions about what they might
do for your domain.
