---
title: NHS Digital Spine and Riak
---

OK the NHS Digital Spine Story is interesting.
Theres a clear open-source, public good win, and then a much more ambiguous cloud migration


In 2007 amazon publishes the dynamo paper. a db you can scale.
In 2009 Riak is born

Riak moved to an entirely open-source project in August 2017

the beats
- SPINE 1 was bad. a baby of NPfIT. huge team, huge cost, big mess.
- SPINE 2 was built by a team 1/10 the size, quickly in 2014
- SPINE 2 built on Riak (OS DB built on Erlang from the ideas in the Dynamo paper from AWS)
- In 2017 basho went bust.
- Riak bought by bet365 the largest commercial user.
- it open-sourced it!
- the lead archtiect of NHS SPINE 2, Martin Sumner, also became the lead maintainer of Riak!
- This is an open source success story.
- As Martin says: "i was very pleased with the maturity of the NHS as a large public org prepared to carry on with an open source project after the death of its vendor!"
- this was in part because "the reality we find it really hard to find another db taht gives us the guarantee of durability and availability and deep down we didnt want to move."
- but the story continues. in 2023 NHS Digital began "SPINE Futures" program to movie SPINE 2 from self hosted to aws.
- "our initial plan was to migrate each Spine service to the cloud, transforming it where appropriate, to make best use of cloud technology and build independence between products and services."
- however
- "significantly more challenging and complex than was first thought and continuing this approach for the remaining services would not be achievable within the 3-year programme."
- so
- In order to reduce the risk of multiple complex transition steps...we plan on migrating all services together in one go and re-hosting them into AWS (Amazon Web Service) to run in EC2 instances.
- oh no.
- so now the largest bit of national digital infra we have is a giant riak db running in ec2 containers.
- ec2 is wildly expensive.
- and you know what else came out of the dynamo paper? dynamodb.
- so we've still got the ops burden of managing containers, plus the additional cost of ec2 over self hosting, on a platform that offers a fully managed similar product.
- an infra fail.

https://www.youtube.com/watch?v=zx26KmQ8Cv0

https://digital.nhs.uk/blog/tech-talk/2023/our-new-approach-to-migrating-spine-to-the-cloud

