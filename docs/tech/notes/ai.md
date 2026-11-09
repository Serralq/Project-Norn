!!! Warning "Internal Notes"
    1) This is my own internal notes optimized for my own travel creation process and not explaining my travel system for an audience.

    2) This is a markdown export of my own org docs with a custom doom emacs instance as renderer, so the cannonical formatting that I see will be different than the markdown version you see.

    3) There will be broken links and other issues.

## Channel List

[T3 Theo](../authors.md)
[Ben Davis(AI)](../authors.md)


## Theory: three parts

-   LLM: as internet knows
-   Context: &not;(as internt knows)
-   Goal / Taste: to start, to go above avg
    Eg: like engineer


### Models: just test out and try

-   Effort levels
-   Multi-media: if possible, but costly
    may try to have a summarizer subagent
-   Usage limits
    Tool limits


#### Black box

may need to try to explore this black box w/ different prompts


#### Reviews

split into tiers and by subscription

-   Grok 4.1: ass
-   Deepseek V4: Perfectly fine
-   GLM 5.2: Perfectly fine
-   Kimi 2.7: Perfectly fine
-   Open Ai 5.5: Perfectly fine
-   Claude 4.8: Perfectly fine
-   Gemini subscription: Just for searches


#### Subscriptions */ hermes as reference list /*

Use what&rsquo;s reputable for now since it&rsquo;s always changing:

-   Claude: High (claude code only)
-   Codex: Fast
-   Opencode GO: Cheap (just a deepseek wrapper for cost benefits)
-   Nous Research: All in one ai agents tool calls


#### Harnesses */ opencode go as reference list /*


### Goal->IFF: humans OR non-Defaults

-   Task prompt
-   Chat history + prev local/CLAUDE.md
-   Instruction/Identify prompt, &ldquo;as a <span class="underline">\_</span>&rdquo;
    -   Tool prompt = skills.md, over time
-   Global prompt via global/CLAUDE.md


#### Limits: subset of future/me can do (+Internet)

Must check */ via git diff /*


#### Prompts

-   I am about to paste my <material>. Tell me when you are done reading it.
-   Act as a <role>, based on my <material>, <questions>
-   Details like: Detail, Task, Goal, Steps, Constraint, Format

1.  Claude.md: tell to add this itself

    -   Frequent: to not repeat myself
        how to start
        hard rules

2.  Example: [PLAN.md](https://github.com/Bad3r/nixos/blob/main/.agents/dendrite.md)


#### Skills */ opencode top list as reference /*

[ only if I repeat, and want to copy ] =>
  another person&rsquo;s pre made USE-case / inputs
Repo&rsquo;s:

-   <https://github.com/t3dotgg/tstack>
-   <https://github.com/mattpocock/skills>
-   <https://www.youtube.com/watch?v=TpYBwkhy9JY>


### Context: Long session -> worse memory, so session::new


#### Tui

-   AI
    -   Planning
        -   Subagents
    -   Auto
        -   Compaction (local)
        -   Memory + Dream (global)
-   Tools
    -   Requieres definitions: some major ones
        -   Bash: to allow for it to choose files
        -   Lsp: whenever possible
        -   Browser
    -   Hooks: auto tooling
    -   MCP design: universal design
        -   New standard: use login cmd -> auth in browser
            instead of manual token passing

1.  -> Exa vs. Gptel.el(connector)

    Per/trends: Prebuilt w/ extra hooks such as
      longer tasks
      auto compact
      auto sub agents


## (Code) Workflow, as of now

1.  minimum add tool def, project skeleton
2.  then just do stuff / plan
3.  fastest model til too hard
4.  parrallel if possible, notification when done
5.  compact if want to notes for future repeated use


### Prompts


#### Struct

-   What I want
-   Define done
-   When to stop and ask
    -   Give it a way out
-   What I currently know + Confidence
-   Copy <X>


#### Meta Data

Type what you want instead of clicking buttons like changing models
Use voice dictation


### Singular Interfaces


#### Model / App List

1.  Previous

    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


    <colgroup>
    <col  class="org-left" />

    <col  class="org-left" />

    <col  class="org-left" />
    </colgroup>
    <thead>
    <tr>
    <th scope="col" class="org-left">Methods</th>
    <th scope="col" class="org-left">Via</th>
    <th scope="col" class="org-left">&#xa0;</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td class="org-left">Chat only</td>
    <td class="org-left">Gemini, Claude, T3</td>
    <td class="org-left">&#xa0;</td>
    </tr>

    <tr>
    <td class="org-left">- Multi-modal chats</td>
    <td class="org-left">Codex, GPT.el</td>
    <td class="org-left">&#xa0;</td>
    </tr>

    <tr>
    <td class="org-left">- Voice</td>
    <td class="org-left">OpenRouter</td>
    <td class="org-left">&#xa0;</td>
    </tr>

    <tr>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    </tr>

    <tr>
    <td class="org-left">Inline completion++</td>
    </tr>

    <tr>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">Aidermacs</td>
    <td class="org-left">&#xa0;</td>
    </tr>

    <tr>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">GPT.el</td>
    <td class="org-left">&#xa0;</td>
    </tr>

    <tr>
    <td class="org-left">Tab complete</td>
    <td class="org-left">Jetbrains, ???</td>
    <td class="org-left">&#xa0;</td>
    </tr>

    <tr>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    </tr>

    <tr>
    <td class="org-left">Single Session</td>
    <td class="org-left">Opencode</td>
    <td class="org-left">as it was trained for</td>
    </tr>

    <tr>
    <td class="org-left">- With test cases</td>
    <td class="org-left">Claude</td>
    <td class="org-left">&#xa0;</td>
    </tr>

    <tr>
    <td class="org-left">- Create rules</td>
    <td class="org-left">Codex</td>
    <td class="org-left">&#xa0;</td>
    </tr>

    <tr>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    </tr>

    <tr>
    <td class="org-left">Indepenedent Agent</td>
    <td class="org-left">Openclaw?</td>
    <td class="org-left">&#xa0;</td>
    </tr>
    </tbody>
    </table>

2.  As of Oct 2026

    Deepseek for more AI (aka background default)
    OpenAI for when I am waiting
    Claude for when OpenAI fails

3.  Based on floor and not ceiling

    If can allow for high floor = can go longer without failure
    Length of run is more powerful than actual intelligence


#### Inline-ver

-   (treesitter) highlight => overlay
-   &ldquo;+&rdquo; for more definitions


#### Full-chat-ver

1.  Narrow buffer / :GPTEL<sub>TOPIC</sub>:
2.  Send at point

    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


    <colgroup>
    <col  class="org-left" />

    <col  class="org-left" />

    <col  class="org-left" />
    </colgroup>
    <thead>
    <tr>
    <th scope="col" class="org-left">Input</th>
    <th scope="col" class="org-left">&#xa0;</th>
    <th scope="col" class="org-left">Output</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td class="org-left">minibuffer</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">echo</td>
    </tr>

    <tr>
    <td class="org-left">session</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">session</td>
    </tr>

    <tr>
    <td class="org-left">file</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">file</td>
    </tr>
    </tbody>
    </table>

1.  TODO Options, mix and match

    -   File/Image attach as txt
    -   Tags for which side of the ai prompt :ai: or :user:
    -   Fixing gptel abort / when fails


#### Singular session: TUI

1.  Custom cmds -> Shortcuts

    1.  New project

        /init
        /ide
        /memory

    2.  General memory

        /clear
        /compact
        /resume
        /rewind
        /context, /cost
        /effort, /model

    3.  Github

        /review
        /security-review
        /simplify
        /undo, /diff, /commit, /pr

2.  File only

    -   Worktree: multiple at a time, one agent per
    -   Permissions: optimize later
        -   Review modes

3.  Hooks

    -   Hooks: over time
        Trigger: question / done
        Context: branch / bookmark / folder name

4.  TODO Next hooks

    Next hooks:

    -   formatter
    -   test cases
    -   notification for questions
    -   Using sem for semantic git change logs


#### User facing

-   Will be API Pricing
-   try Jev / decision models


### Multi session: Burn tokens instead of thinking


#### Worktree (1 per session)


#### Default: GUI/T3Code

Just treat as inbox

1.  General Kanban Board => Todoist

    If multi repeated stages


#### Workmux: local sessions

Only after stable jj support
Worktree whitelist of copy


#### Canary

to check if it is following attention, context window isn&rsquo;t too big
then to ask it for a simple instruction to check


#### AI Agents => Summarize their context windows

*/ Other sections, when to use agents, here how to use agents /*
Team:  Different goals
Swarm: Repeat the same goals

1.  As &ldquo;team members&rdquo;

    Copy these adaptations:

    -   Notification
    -   Inbox OR Kanban Board

2.  Best of N

    To brute force a solution

3.  Allow for exploration of wacky ideas


#### Loops

1.  Code Test / Reviewer

    Me:

    -   To give inline comments

    Ai:

    -   Allow for other models to review
    -   Allow it to validate itself

    Code:

    -   Give measurable tests, never allow regressions
    -   Make it cheap, have downloadable versions

2.  Goals

    To just go for it


#### System Understanding / Merging

1.  Intentions

    Baked into commit message and tests

2.  For Both

    Seperate API and Implementation
    Tiers of Importance

3.  For AI

    Treat as fresh employee

4.  For Self / Feature Flags

    Make assumptions and run with them
    Make fixes cheap + prev/testings+demo

    -   Feature flags


#### (AI-only) Outputs

sometimes best if interactive
List to plug in for interactive:

-   Trek

List to copy from:

-   <https://vimjoyer.com/nixmap/>

1.  Scripting Tiers

    1.  Me such as Auth
    2.  Interactive (for AI)
    3.  Programatically reproducable


### Failures (any time it isn&rsquo;t one shot)

-   Need to plan and imagine more
-   Add to skill to not repeat
-   Find the red case and green case to find the border


#### Opencode specifics

Do a simple hello world to check if functioning
If trying to jailbreak will also force it to hang


### Future Steps

-   First try with better ver,
    Second ask for debug methods
    then try with multiple ver at once
    final try with multiple ver for debugs
-   Any fail (fail to answer / fail to compile)
    => Break it down: til can prompt with correct context / do it myself
-   Check assumptions (within prompt)
-   Assume to be lying: fix via:
    Verify by me
           by another src
           by another ai


## Regular USE-cases and IMPL details

-   Like a human teacher to talk to, and hear explanation
    -   Give examples
-   Cleaning data
-   To find src, try deep research mode
    -   Include documents like NotebookLLM
        -   May require using chrome for pdf uploads
    -   <https://elicit.com>
    -   <https://www.perplexity.ai/>
    -   <https://scite.ai>
    -   Gemini
    -   Ragi
-   to find the word for &#x2026;
-   To search sources in another language
-   to be faster, by summarizing  w/ link and sources
    -   To avoid sponsor info
    -   Due to possible missing details
    -   <https://www.prompthub.us/blog/better-summarization-with-chain-of-density-prompting>


## Next/Applications => MCP/API + (can describe, but can&rsquo;t program)

-   Yt subscription
    Define category
    Allow to sort into category
    Check for correct nums
    Check for correct sort (easier than sorting)


### [Norn](../Norn.md)/&ldquo;Volatile env&rdquo;

Logs:

-   Aug 2026
    not perfect for complete web searches
    table formatting (openai only)


### Copy technical non-devs


### Missing API / Tool calls

x ai


### Local Recall

similar to Microsoft&rsquo;s but with mine once ai is more efficient


### AI mimic character

-   Eleven labs / [Open src ver](https://youtu.be/dQ841Pd6YvQ?si=oDjcw8gowAIvqHqd)
-   Character ai


#### AI [Mare](https://x.com/kasasagiproject/status/1878372852841209991?t=6I0wqb71_FMIJTATFyZ98Q&s=19)


### Ai code wikipedia

via deep wiki, maybe in future another better one will come


### Petg tracker

from manual typing on pc
to   describing on phone


### [Video-Use github page](https://github.com/browser-use/video-use)


### Better browser automation / Plug and play

using hermes ai
requires decent ai to know what it is doing


### Mini-Jailbreak

-   ask to fix code instead of search for vulnerability
-   claim is for research


### Glasses

Only if they get better


### Calendar like the New York Subway arrival board


### Version control in IDE

-   To allow for a selection of text
-   Auto splits, previews
-   Then commit into a child commit with message


## Finding AI in the wild (and/or within assignments)

-   Not x, it is x
-   Emoji in README
-   em-dash
-   hooks to ping the professor
-   white text
