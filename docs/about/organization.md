---
date:
  created: 2025-11-21
---
# Organization System
This has been one of the two great questions I felt the need to solve: how
should I organize so that I can find what I need again. Specifically, how to
maximize the density of useful information, since in this information age, it's
not often a question of useful information, but how to filter this from all of
the rest of the internet.

I will start with the solution and then explain why each part was necessary.

## The System Template
- Define what is the use case, aka what should I be able to now do that I was
  not able to before this change
- Define the runtime query that would enable this action
- Define the compiled system that would enable this query
- Define the process to fill out this system
- Execute a dry-run for any missing part

## A Univeral System
Every organizational system has to be flexible enough to handle everything I
need it to, but not a step more since then this would muddy the density of
usefulness.

The first attempt was to make an organizational system for general information
since that's the body of an organizational system is information, resulting in
my current note system, but each information has it's own shape and use case.
Adapting to each system proved untenable.

Instead, I landed on creating an system template for generating organization
system based around use case since everything worth organization has a use case
by definition.

Continuing on from this, instead of imagining what a system should be, this
system template imagines what the end goal is and allows the system to be
derived from this end goal. In face, the explanation of the system template is
derived from the goal defined in the first paragraph.

First was to define the use case, then what query would enable this use case,
and then the system to enable this use case, and then how to fill out this
system.

The reason for seperating the query from the system is that the system is like a
compiled program, and the query is the runtime process after the compiletime
using this compiled system, and the process is the compiler and database to
create the compiled system.

## Defining Use Case
Rather than imagine every possible use case, I simply wait for when I have a use
case that appears more than twice (this isn't percise, just that it felt
annoying).

And rather than allowing resources such as interesting links define the
organization system, the links have to inspire somekind of use case which the
system template will use to create an organization system that can take in the
inspiration resource as an input during the process stage. I will still keep the
original inspiration around to execute with a dry run to check the system.

Furthermore, a dry run is needed to just keep everything rooted in reality.
Rather than tyring to keep all the system aligned with the process at all times,
I simply let my intuition run and at the end check for issues, repeating with my
intuition until there is no issues left.

## Implementation Details
Is not as simple, since while the shape of the answer is already provided, each
step since needs adaptation. 

For example, given a list of albumns the defined use cases are

- Able to shuffle my music
- Able to jump between albumns
- Able to start and stop looking into expanding x artist's discography

To do the last step I need to tag the last time I looked into an artist's
disography and whether they are still uploading since the last time I checked so
I know which artists I have not finished downloading or has been so long that
they are likely to have new albumns.

Another set of resources is my photo collection with the initial defined use
case as:

- Able to jump between the group => Group photo's into days
- Able to start and stop the upload pipline => Split photo's into public vs.
  private and then tag each public photo for the each upload step

But the upon further reflection here are some corrections I needed:

- Allow the grouping to be optional, for the photo's I took in one off moments
  that don't belong to any group
- Seperate the visibility decision and upload pipeline decision since even
  private photo's must be considered for the upload pipeline, and if it passes
  for that photo to be transfered to the public folder.
