---
date: 2022-05-04 19:00:00 EDT
layout: post
title: "Chopping the Monolith"
speaker: "Nicolas Frankel"
emoji: 🎤
rsvp: https://www.meetup.com/columbusjs/events/285043401/
banner: /banners/2022-05-04-nicholas-frankel.png
---

Micro services are ubiquitous. However, most companies that implement micro services do not reap their full benefits - at best. At worst, it’s an epic failure.

There are reasons for micro services: independent deployment of business capabilities. However, the unspoken assumption is that you need to deploy all capabilities all the time. My experience has shown me that it’s plain wrong. Some capabilities need frequent deployment, while some are much more stable. In “the past”, we used Rule Engines to allow updating business rules without deployment. While it solved the problem, this approach had issues. Between introducing a Rule Engine and migrating your complete system to micro services, I believe that there’s a middle path, and that this path is Function-as-a-Service.

In this talk, I’ll detail every point I’ve made above, and show how one can use Serverless to pragmatically design a system that allows deploying as often as you need.

### About Nicolas

Nicolas is a Developer Advocate with 15+ years experience consulting for many different customers, in a wide range of contexts (such as telecoms, banking, insurances, large retail and public sector). Usually working on Java/Java EE and Spring technologies, but with focused interests like Rich Internet Applications, Testing, CI/CD and DevOps. Also doubles as a trainer and triples as a book author.

Follow Nicolas on Twitter at [@nicolas_frankel](https://twitter.com/nicolas_frankel) and check out his blog at [https://blog.frankel.ch](https://blog.frankel.ch).
