---
title: Leeds Digtal Health Meetup
---

_24 Sept 2025_ Connected Care: Digital innovation in Social Care

_Raw notes. Do not consume._

Summary
- Paul Brown - FHIR is interesting. OpenEHR may be more precise/specific for some use-cases but no one is using it
- there is no pinch point. no browser to force use of standards.
- DTAC is the digital compliance hurdle that brings the groans from implementers
- Leeds is healthtech hub, largest training hospital in europe, EMIS and TPP(?) based here.
- Tim East is the local super connector, working at Health innovation network.


## train notes

honeycomb  - https://github.com/node-on-fhir/honeycomb (awatson1978, from meteor community back in the day! has been working on full stack framework for clinical settings for over a decade now!)

HL7 FHIR - openEHR - https://6b.health/insight/working-with-openehr-and-hl7-fhir/

HL7 FHIR 
- auditing of data access is nice. "a purpose of use is asserted for every action that’s requested." - https://6b.health/insight/how-information-is-secured-with-hl7-fhir/



https://propelhealthtech.com/

## why we need to talk about social care and its place in community

adult social care underpins our society but is so often forgotten and underfunded

care at home is not new. often used in political manifestos.

disconnected care means sam is non-verbale and struggles with strip lights and loud noise and has an accident. is thrust into A&E and the info about his needs are not available.

connected care should be about outcomes and i, the patient, should be able to decide how best to get them with the money i've been given.

mr cauthery had telecare, but it wasn't linked to the fire services. he died from smoking in bed. the telecare operator didn't know what was going on 

"are you a service user or a person" - strong pref for person.
"access the community" - bizarre.
"pathways, signposting, demand"

collect info -> connect people to support -> give advice -> provide early help
... power is always with me the provider not the person... connected care is about pushing that power more to the person

connected care as chance to redress the balance between hierachical org and person
- can it be used to find reasons to work with people.
- find reasons to support you
- tech that makes us more human
- place based care interconnecting with local economies.

tech is going to go with people as they go into care.

connected care needs to be like 'home' (safe, cosy, familiar)

## Tech enabled remote care program across Leeds

Stephen Blackburn - leeds academic Health partnership
Hannah Roden - Leeds City Council

primary care - luscii apa
- daily questionaire
- track vital stats
- monitored by staff PCN staff
- 9 month trial with 48 participants (small, but...)
- showed significant reduction in hospital admission
- significant reduction from over-reporters and vice-versa for underreported

adult social care - miicare
- ambient sensors and health coach
- identify normal patterns and alert on deviation from normal
- allowed care workers to right-size care packages
- e.g. elderly man who is not going to bed. not sleeping well. care package updated to include putting to bed.
- monitored by family. reassuring.


### 10 year plan

how do we shift from hospital to community?

five big bets 
- data
- ai
- genomics
- robotics
- wearables

### virtual wards - hospitals at home

leeds teaching hospital is working with a monitoring app...

so a heart attack suffer might be allowed out with a box of sensors, and you can recuperate at home rather than on a ward.

primary care - remote monitoring. e.g. same individual has long term heart condition. GP will use remote monitoring to keep an eye on it.

social care - tech enabled care - (remote montioring but in a social care...)

each monitoring system would be different, and none of it talks to each other. so the person may be bombarded with gizmos and generate 3 silos of info.

whats a patient-centered approach. (this has to be worked out)

you should get the right equipment (once), and who receives the feed can change over time, as you move from hospital to gp, to social care.

hospital (PPM+), gp (EMIS SystemOne), social (??? mised it)

### Leeds Tech enabled care (TEC) strategy

- person centered
- collaboration
- financial model
- service model
- governance
- procurement framwork
- comms
- data and tech stack
- skills and training (staff and people)

interop is almost the easy part. when every one has own budget and procedures it gets hard.

### Falls prevention pilot

Leeds ICB, LCB (care partnership), PCN, LCC all working together
- "home first phase 2" how to get people out of hospital
- have we done all we can to promote independence
- for people with risk of fall or have fallen in 12 months
- targeted proactive care using ambient sensors and gait monitoring
- Leeds telecare team already respond to alerts. they will triage these new alerts too. urgent alerts to hospital. non-urgent to PCN/LCP neighborhood team
- aligning with the 10 year plan move to prevention, and move to home.

challenges. ICB governance and council governance.
DTAC compliance. dont we just love it. working in an innovation space. using tech in a new way. we are not replacing anything, we are not removing. can we deploy a new thing. no it has to be compliant with DTAC. i'm working on it.

a collaboration of the willing in leeds.

### Questions

social care workers wanted a big text box. word soup.
health care - it's got a strict vocabulary.

this is the diff between health model of care and the social model of care. (structued (we can do this) vs holistic view)

we are starting to make standardised vocabularies for social care software providers.

LLMs can help with this.

the data does not have to be identical to be useful... seeing the health data and the social data at the same time can be really useful.

- EMIS - aiming for interop using the FHIR standard.
- shared care records (North yorkshire directors health care forum)
- looking at different options to find that central point of where health data is going to be kept
- nhs app going to be the front door
- 3 different trials. for 3 different approaches.
- needs to be more of a willingess from suppliers to be more collaborative.
- there are standards out there. this should be easy. suppliers need to more open to it.



---


## Empowered Unpaid Carers: Shaping the future of digital social care

Alexis Twigg - CareNetworx

strategy was integration. scaled. already did a business outside of care. gave confidence to tackle health and social care.

### vision

deliver right info to right people where they need it in heath and social care setting

creating a single connected experience.

### landscape

5 to 10 million unpaid carers. cost to the state saved is 1.6 billion.
600 people leave employment every day to care


### case study

West yorkshire ICB app - involves 5 local authorities, 5 different paper based emergency plans. 18 months of compliance checks

not a standalone siloed tool. Its a module inside our existing feature rich app! omni-app pattern!
- digital contingency plan as a module inside our "feature rich app"
- cretes a care plan
- launching in october.
- a compliant system that can be used across other pathways due to 18 months of compliance integration with Yorkshire and Humber.

 ### case study - NE london Hospital discharge project.

 ### future

 NHS app will remain core gateway for auth and healthcare data.
 winners will integrate with the nhs app.
 compluance and integration (NHS login, DTAC, security, interop) are not optional they are essential and should be a USP
 multi-lingual for reach

 tech must help carers and patients take more responsibility to reduce pressure on professionals??

 we are building the the the NHS app for social care.

## takaways

great app, but they are not integrated.

