!!! Warning "Internal Notes"
    1) This is my own internal notes optimized for my own travel creation process and not explaining my travel system for an audience.

    2) This is a markdown export of my own org docs with a custom doom emacs instance as renderer, so the cannonical formatting that I see will be different than the markdown version you see.

    3) There will be broken links and other issues.
## Foot Guns!



### To be Automated / Fixed

-   Git restore &#x2013; <anything after &#x2013;>
-   jj undo, check the ops logs
-   opencode / ai tui restores
-   termpicker save file



## Learning Process

-   Notes:    of patterns
-   Practice: filling in the gap from patterns



## Intuitions */ (actual implementation => [Norn](../Norn.md):List of Links) /*

[Eric Raymond&rsquo;s: Blog](../authors.md)
[Australian Guy&rsquo;s: Blog](../authors.md)
[Language concepts and intuitions](../authors.md)
[Programming as Theory Building](https://pages.cs.wisc.edu/~remzi/Naur.pdf)
[Programming and AI thinking theory](../authors.md)



### Ideas of Impl

[マリウス: Holy shit a bit of everything I want](../authors.md)
[Xenodium: So much tech, has to hit something](../authors.md)
[Broot File Manager](https://github.com/Canop/broot)
[Lots of overlaps](../authors.md)
Using yazi with tag-studio tag system
[Free media heck yea](../authors.md)
[Systemd and more](../authors.md)

-   [docker info](https://blog.tjll.net/the-best-thing-about-docker/)
-   [monitoring](https://blog.tjll.net/to-monitor-backups-invent-the-universe/)



#### Wacom drawing tablets

using either dr grip or lamy pens



#### Asus duo 16!!!



#### E ink tablet for fully remote dev



#### Niri for better [multi workspace in 2d plane](https://www.reddit.com/r/NixOS/comments/1tikwm1/new_to_nixos/)



#### Emacs

[Emacs Redux: So much emacs](../authors.md)
Emac easy motion
[Emacs org mode workflows](https://github.com/james-stoup/emacs-org-mode-tutorial?tab=readme-ov-file)
[Plain DrOps: Emacs veteran](../authors.md)
[Public Void: Emacs, Info, etc.](../authors.md)
[Kyou: Actually using Elisp](../authors.md)
[Emacs as universal buffer motions](https://www.birkey.co/2026-03-28-emacs-as-a-programmable-workbench.html)



#### Nix

[Nix in practice 1](../authors.md)
[Nix in practice 2](../authors.md)
[Nix and Data Storage in practice](../authors.md)
[Nix vs docker for portable dev system](https://sivaplaysmc.github.io/posts/jails-not-containers/)
[Nix vs Docker for server](https://www.reddit.com/r/NixOS/comments/1s36u7t/for_nixos_home_servers_do_you_use_native_services/)
[Nix paper](https://edolstra.github.io/pubs/nspfssd-lisa2004-final.pdf)



#### Terminal style

Init: Terminal
  Plus fastboot global info
Next: (local) Yazi + Spawns temux sessions attached to x folder
Yazi:

1.  Zioxide
2.  Fuzzy search fallback
    1.  Undo options
    2.  Filter for only stow folders
3.  Yazi for individual files

Zioxide but for file autocomplete
Space space also special bind

1.  Wezterm / Temux

    -   Copy mode
    -   Quick select mode
    -   Multiplexing
    -   Scrollback



#### Window manager + [Modal Keybindings](https://github.com/agzam/tecla)



### Experimental Software Equation

Take current value vs implementation cost

-   Plus free work by simply waiting



### List of Links */ so much I can&rsquo;t ignore /*

[Palm Beach County Lady&rsquo;s: List of Links](../authors.md)
[Eric Raymond&rsquo;s: List of Projects](../authors.md)
[List of Blogs from Hackernews](../authors.md)



### &ldquo;Real Programmer&rdquo; / &ldquo;Good Design&rdquo;

<= [Understanding > Trial & Error](https://blog.information-superhighway.net/on-the-need-for-understanding)
<= Reading the src code + AI to talk to



## Dev Ops{ IDE, yasnippets, etc. } */ for modification /*

[Using github search function](https://github.com/search?q=language%3ANix+wallpaper-engine-kde-plugin&type=code)



### [Coding Challenge](coding-challenge.md)



### Any Language

Devenv + SecretSpecs



### Lang Specific

[Reference sheets](https://github.com/Fechin/reference)

-   System library
    -   Build: Compiled vs JIT vs Virtual Machine
    -   Templates? Text Macro? AST Macro?
-   Types
    -   Strong vs Weak: allow for implicit conversion
    -   Static vs Dynamic: compile or runtime type check
    -   Auto? Null pointers? Default const?
    -   Duck typing: if it has the name then good enough
    -   Sum type: either or
    -   Product type: struct
-   Allocators:
    how to get just the memory I need
-   Memory: Manual vs Auto vs Borrow
-   Errors:
    Exceptions, try catch
    Return Codes
    Sum types
-   Concurrency:
    Shared memory
    Message passing
    Coroutines / Async



#### Imperative vs. Functional vs. OOP vs Declarative

State is:
  Imperative:  outside of code
  Object:      within object
  Functional:  does not exist
  Declarative: I don&rsquo;t care about inbetween



#### In-notes

[Flash navigations](https://www.reddit.com/r/emacs/comments/1r5z58e/flash_flashnvimstyle_navigation_for_emacs_now_on/)
[Avy navigation](https://github.com/abo-abo/avy)

-   Vim game to learn from

Yazi Cheatsheet (yazi + &ldquo;~&rdquo;)



#### Out-notes

[Doom cheatsheet](https://github.com/niyumard/Doom-Emacs-Cheat-Sheet?tab=readme-ov-file)
[Awk cheatsheet](../20260404025327-awk_cheatsheet.md)
[Vim cheatsheet](../20260404025531-vim_cheatsheet.md)
[Bash cheatsheet](../20260404025630-bash_cheatsheet.md)
[Curl cheatsheet](../20260404025605-curl_cheatsheet.md)
[Fish cheatsheet](../20260404025614-fish_cheatsheet.md)
[Lua cheatsheet](../20260404025619-lua_cheatsheet.md)
[Rust cheatsheet](../20260404025622-rust_cheatsheet.md)
[Git cheatsheet](git.md)



#### Pattern Matching

when in switch statement, special syntax



#### Container Promotion

To replace a container instead of updating in place



### Literate Programming

[Research paper to check out](https://www.cs.tufts.edu/~nr/cs257/archive/literate-programming/01-knuth-lp.pdf)

-   Criticism: Another form of documentation that can lie



### Markers

Allow for non-search functions



### Overlay

To see the possible movements


### IDE optimization(Nvim > Emacs)

-   Equal power (except: Org-mode)
-   Lua > Lisp



#### Quick Fix List



### File Jumping

Copy from Primeagen

-   Bookmarks
-   Harpoon



## Order of language [dev template](file:///home/serralq/stow/Remote/Ririka/.attach/f7/42bfcd-2940-4223-9c62-30d32a413ef8/devenv/)

Bash >> Array
Lua >> Speed / Parallel
Rust / Go >> First party functions



### Task Driven Development w/ &ldquo;TODO&rdquo;     :ATTACH:

To write out the task before completing the task
Similar to Test Driven Development



### Org-Tangle( README.org or <target.type>.org ) */ Folding sections /*

[ Top Headers ] => File structure
[ Lower Headers ] => Personal organization



#### Header Template



### Prototyping

-   CLI -> UI
-   Write sample data



#### API design

add versioning number



### Design Patterns: [Refactoring Guru](https://refactoring.guru)



#### Next Concepts

-   Udp vs tcp
-   Design patterns
-   Pattern matching
-   Dependency Injection



#### Any

1.  Variable names

    -   Not:
        -   Abbreviate
        -   Types
    -   Do: physical unit
    -   Refactor: utils

2.  KISS (abstraction must justify itself)

    1.  DRY

3.  Never nester

    Line up exceptions in the front of the function
    Else break into smaller parts

4.  Functional

    Currying: passing in function with variable
      instead of just a variable
      eg: filter(lamdba with variable)

    1.  Monads

        -   Basic:
            Wrapper type
            Wrap    function
            Run     function
        -   Common:
            Optional
            Writer
            Promise / Future
        -   Why:
            Do with background function



#### Code reuse

1.  SOLID

    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


    <colgroup>
    <col  class="org-left" />

    <col  class="org-left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="org-left">Single Responsibility</td>
    <td class="org-left">To do one thing</td>
    </tr>

    <tr>
    <td class="org-left">Open/Close</td>
    <td class="org-left">No edit, allow plugin</td>
    </tr>

    <tr>
    <td class="org-left">Liskov Sub</td>
    <td class="org-left">Can reuse sub class in place of parent</td>
    </tr>

    <tr>
    <td class="org-left">Interface Segregation</td>
    <td class="org-left">Minimize interface size</td>
    </tr>

    <tr>
    <td class="org-left">Dependency Inversion</td>
    <td class="org-left">To accept depend, not reach for it</td>
    </tr>
    </tbody>
    </table>

2.  Composition (has a vs is a)

    combining functions, data interface

    -   can swap at runtime(dependency injection)

    1.  Inheritance

        -   Can&rsquo;t choose which parts are together,
            -   decide at compile
            -   can have access to parent&rsquo;s internal
        -   the same as folder vs web debate

    2.  Class Naming

        based on behavior not on intuit &ldquo;naming&rdquo;

    3.  E(ntity) C(omponent) S(ystem)

        To not have objects of entity
        but entity as composition of X{physics, texture, etc.}

    4.  Dependency Injection

        For external resources
        To have a common interface

    5.  Example: nix aspects

        Feature A own everything as per USE-case
        Feature A can publish read only{ options and provides }
          Minimize size
          Hard or soft depend, Assert or not
          [ litnus test ] if removed aspect A from host&rsquo;s include list
        Feature B can consume these options
        If a true cross module feature => another aspect
        Lastly, document for future contributors

3.  Abstraction

    < locality of behavior
    until disgusting / proof for why else

4.  Factory Pattern: hide the new keyword

    -   Either via conditional
        Singleton creator class w/ all the info
    -   Or via inheritance
        overriding parent&rsquo;s create<sub>x</sub> method
        and follows common interface
    -   Implementation
        1.  Create interface
        2.  Create factory with create func returning interface
        3.  Move original creator into factory
        4.  Move factory code into child

    1.  Alt definition:

        Given 0+ inputs:
          Output templated code

5.  Collector Pattern: */ just a special conditional /*

    -   What:
        External conditional
           eg: whether file is imported
        => Internal effects
    -   Use:
        Almost never, breaks composition
        But can get same effect if reframe the implementation



#### Database

Idempotency: Multiple action = single action
Latency: per request
  Queing latency: due to lack of throughput
  Intristic latency: due to time for single task
Throughput: total availible

1.  ACID

    Atomic - Do or Nothing
    Consistent - Valid data, can be eventual or always
    Isolation - as if single user
    Durable - After crash, still here?

2.  CAP

    Consistency: up to date info
    Availible: always respond, even stale
    Partition tolerance: if split network

    1.  only two of three

        If A + C: normally working
        else
          P + C: give correct later
          P + A: give current now



#### Security

-   Encryption: just keep the key
-   Hashing: only know if same, can&rsquo;t reverse
    -   Salting: breaks rainbow tables
    -   Slow hashing: slows down hashing



#### Parallel Execution

-   Critical regions
-   Mutex, etc.
-   Starvation, etc. test



#### Statistics

Given % of true if true    (sensitivity) (s1)
      % of false if false  (specificity) (s2)
      actual underlying %  (prevelance)  (p)
-> if positive -> p \* s1 / (p \* s1 + (1 - p) \* (1- s2))



#### Rollback

to predict what should happen, wait for server response and roll back as needed



## Test Case



### Fearless Refactoring

*/ 1. Prevent regression /*
*/ 2. If can&rsquo;t write on first go /*
Red - Green - Blue

1.  Test fail
2.  Test pass
3.  Refactor



## Documentation */ Prefer simple, upgrade as required /*



### Variable Names */ Base-line /*



#### Magic Num / Strings

Rather than have a num or string without explain
=> Use a variable
=> Allows for lsp completion to prevent mistyped string ids



### Comment */ Inline /*

-   Must be coded
    -> Variable names (for hard coded values)
-   Default: no, unless: no other option
    */ Can lie, so only comment if accept drawback/lies /*

    -   Skimming w/ &ldquo;# \* <Header>&rdquo;
    -   End user / Manual / Examples
        -   Error states
        -   Concurrency states
        -   Options
    -   4 letter codes, for easier grep / search

    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


    <colgroup>
    <col  class="org-left" />

    <col  class="org-left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="org-left">BUGS</td>
    <td class="org-left">-&gt; bugs</td>
    </tr>

    <tr>
    <td class="org-left">CITE</td>
    <td class="org-left">-&gt; citations</td>
    </tr>

    <tr>
    <td class="org-left">LOGS</td>
    <td class="org-left">-&gt; logs</td>
    </tr>

    <tr>
    <td class="org-left">EXAM</td>
    <td class="org-left">-&gt; give examples</td>
    </tr>

    <tr>
    <td class="org-left">TODO</td>
    <td class="org-left">-&gt; tasks</td>
    </tr>
    </tbody>
    </table>



### [Git](git.md)



### Code Debt

1.  Duplicates and dependencies
    To fix when I can make a future mistake
2.  Easy to read
    Familiarity requirements(ex: lang/library(lisp), programs(emacs))
    Group based on effect, eg nix-overlay



#### Vibe Coding

1.  Ask to explain the example
2.  Try deleting stuff
3.  Fix magic numbers
4.  Write to explain use for each code
5.  (Additional) Anything weird / I wouldn&rsquo;t do
6.  (For non-ai env) Code will be similar, so make sure it&rsquo;s plausible



## Debugging + Optimization */ = Code += debug + [System Design](system-design.md) /*



### After 3 tries: [AI](ai.md)

must try something new, ai retry temp won&rsquo;t change that much
-> check the implicitly skipped info



### -> more tries if ai had memory, for now too buggy of a feature



### Isolate bug

Find exact version with bug via git disect
Optimize turn around time



#### [Compilation histories](https://github.com/djgoku/compilation-history)



### Summarize Action

And give context with git messages
And check if diff is actually applied, or am accidentally testing old ver



### Errors / Stack Tracing

-   Read error codes
-   What&rsquo;s the minimum pass case
-   Then what&rsquo;s the breaking changes
-   Look at code changes



### Debugger / Tech-Specific



#### Golang

-   Files
    defer Close + Flush */ don&rsquo;t forget this /*



#### Emacs

M-x list-processes
M-: find-executable



#### Windows

Defender can delete your files



#### Networking

-   Ping 1.1.1.1
-   Ping Google.com
-   curl ifconfig.co



### Asking Question (to self / forum)

1.  Define <object / ver#> <deviation>
2.  Steps to reproduce



#### [System Design](system-design.md)/X-Y Problem

Just define the x, and suggest only for the y



### Optimization

Measure first



#### Neg space programming

To define what shouldn&rsquo;t happen



## [AI](ai.md) is one time extension to curr skill */ => AI wikipedia /*

Before merging: => confirm via (proper) git title

-   As Task (Src/Q, Hit%, Next/Tasks)
-   Summarize code
    -   Skip AI code review then to label like a textbook
        w/ &#x2013;gen as suffix
        (no code error, no shifting, visually distinct)
-   Match style / So simple
    -   Global (any project)
        -   Comments, inclu comment headers
        -   Magic Numbers / Variables
        -   Docs
        -   Project level vs Global level secrets / variables / packages
    -   Local (per project): Any repeat decisions
        within README.org */ top level only then keep sub headings there /*
-   Git title
    -   No stateful data eg opentofu machines
-   Tangle matches



### Reverse Engineer Anything

for visual novels
