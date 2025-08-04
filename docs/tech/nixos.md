---
date:
  created: 2025-07-30
---
# NixOS is for your Future Self
Do you remember what you ate 1 year ago? In general, this doesn't matter, since
the cost of forgetting is proportional to size of the event and thus to the size
of the memory. That's to say, if you forget something small, it won't affect you
too much, and the things that would affect you by a non-trivial amount would be
large enough to not be forgotten within the relevant time span. 

But for code, a single fleeting line could break a configuration months later,
costing dozens of fustrating and avoidable hours of debugging. That's the
problem I aim to solve with NixOS, is how to not forget with the minimal cost.

???+ note "Minimum Viable Product"
     A reliable system which minimizes information loss.

## Defining: Declarative Programming
Most operating systems follow an imperative model, which means you tell it what
to do, as compared to NixOS which follows a declarative model, which means you
tell it what you want. For example, to install a package in Arch would follow
require inputting the following command into the terminal:
``` 
sudo pacman -S hyprland
```

Compared to installing a package in NixOS would requires a few more steps, first
to edit your configuration.nix file:
```
...
  programs.hyprland = {
    enable = true;
    xwayland.enable = true;
  };
...
```

and then to rebuild the system:
```
nixos-rebuild switch
```

### Thesis of NixOS
Both install process achieves the same result, but only NixOS will keep a
preserve the information for future rebuilds within the configuration file. The
imperative approach leaves an inadequate history trail. Thusly, I will demonstrate
how NixOS in particular is able to sidestep additional information traps
compared to other systems.

???+ note "Spec: Written"
     NixOS keeps a written config of all system changes

## Case 1: Documentation
The subsequent question would be why not just keep a list of applications? But
comments and documentation can lie. Can you guarentee that you would never
forget to write down every application you've installed? What about the small
terminal helper you installed for a single script? Will you forget to uninstall
this program or maybe say that you'll write it down later, only to forget it.

Even if you are a super human and never sucuumb to laziness, can you trust that
your previous self never did. It may be a fact that you never did, but you would
also need perfect memory to confirm that the documentation is reliable. 

However, with code, the execution of the program also automatically checks and
reflects the true state of your configuration. If you fail to code an
application install, the application will not be installed, and if you installed
an application you did not need, then the application will still be within your
configuration file. There is no code which run without a correct syntax.

???+ note "Spec: Verification"
     NixOS's config is verifiable via code execution

## Case 2: Package Managers
Another option is to use a package manager such as homebrew or pacman which
automatically keeps a list of all installed application, but these have two
large issues.

First, these package managers makes no distinction between applications you
installed and application that were installed as dependencies within the global
namespace. That's to say that as that any application can access another
application's installed dependency. However, not every install and code will or
can be managed by the package manager. These two facts combined can lead to a
depenedency relation between the original package's dependency and the external
program, but this dependency is only implicit and unwritten. Of course, there's
still a causality chain from uninstall to program crash, but this now requires
also investigating an uninstall dependency removals which is a class of issue
that NixOS avoids by only exposing the intended output of an install.

???+ note "Spec: Scope"
     NixOS's config specificies (almost) all of userspace

Secondly, regular uninstalls remove history. In NixOS, the installation list is
a text file that can be tracked with version software such as Git. Thus, each
uninstall is added to the history of file changes rather than removing the
information from the install list. 

Uninstalls must be safe, else the disk will pile up requiring either a risky
reinstall or extra money to upgrade your storage.

???+ note "Spec: History"
     NixOS's config is a version-able text file

## Case 3: Custom Install Script
Another solution is to create an install script. Have a list of every explicit
change and installation within your system fufills most previous spec, but what
happens when you change the system. To guarentee the script runs, you would have
to re-install the system after each change. Moreover, you would have to delete everything
beforehand to ensure artifcats from a previous install does not pollute the
current install. This is possible, but it is magnitudes simpiler in a declarative
system. 

By specifying the goal and not the process, NixOS can simply unlink all
"uninstall" and if you happen to reinstall the application, a link would be
created again. This preserves the result of an uninstall without the cost of the
uninstall process. This simple shortcut reduces the cost of deleting and then
re-installing, enabling for more atomic updates.

???+ note "Spec: Automation"
     NixOS's config automates away the cost of rebuilds, enabling frequent rebuilds

## Counter 1: Amnesia
Yes, it is expected to forget the content of each file, but as I wrote each
file, it is trivial to simply read the file again. My definition of information
loss wouldn't be forgetting the information, but when that information is no
longer accessible, in any form. Only information which was never recorded, or
poorly organized that the information loses its required context, or buried in a sea of
irrelevant information, would be considered lost.

???+ note "Addenum"
     Information is lost when it cannot be accessed, not when it is forgotten

## Holy Trinity: Nix, NixPkgs, NixOS, (and Homemanager)
- Nix is just the implmentation language
- NixPkgs is an implmentation of Nix for handling installs and uninstalls
- NixOS is an implmentation of Nix for handling system level configurations,
  such as wifi, keyboard, launch services, etc.
- Homemanager is an implementation of Nix for handling application level configurations
  
Each is it's own seperate part. It is also possible to only integrate parts of
your system. For example, NixPkgs can be used within MacOS, using Nix-Darwin,
and a NixOS system can also run other package managers such as Python's pip or
Javascript's npm.

For Homemanager, I would reccomend only paritially configuring application
within Nix. You can use as much or as little of it as you wish, but due to the
incompleteness of homemanager compared to the near infinite application
configurations, it's simplier to utilize dotfiles or one of the other
techniques discussed later in the article, when there is not a convienent
Homemanager option.

???+ note "Further Readings"
     - These are just a subset of what I personally used to get to where I am.
     - General overview of Nix and NixOS:
       [NoBoilerPlate's Video](https://www.youtube.com/watch?v=CwfKlX3rA6E)
     - Setting up the general build system:
       [Vimjoyer's Video](https://www.youtube.com/watch?v=a67Sv4Mbxmc)
     - Understanding Nix's language and terminology:
       [Surma's Video](https://www.youtube.com/watch?v=5D3nUU1OVx8)
     - The main wiki is incomplete, but it's the best place to start debugging:
       [Nix's Wiki](https://nixos.wiki/wiki/Main_Page)
     - 99% of all the options in NixOS, NixPkgs, and Homemanager:
       [Search Portal](https://search.nixos.org/packages)
     - There's also flakes to learn about too

## Catch-all Files
This only leaves the file system. This would also encompass non-dotfile application level
configurations.

Dotfile applications despite not following a declarative style, follow each spec
laid out previously. Dotfiles are just special text files, almost never system
generated, and runs on each applicaiton initialization.

For non-dotfile applications, they are generally system-generated based on
defaults or user inputs in a graphical config panel but each setting still exists
as files written outside of the main installed executable. Given this, the
configuration can be treated the same as regular arbitrary file data.

For regular arbitrary file data, the best compromise I've found is to utilize an
opt-in rather than an opt-out system. This means that each file should be
automatically trashed unless otherwise specified within a file. This allows for
a functional written history of what I've decided to keep. This is written and
function since without writting the opt-in's, the files would be deleted.
However, details within the opt-in folders can be system-generated and
information becomes lost. The best mitigation would be to create as granular of
a selection as possible.

### Via Impermanence

The most comprehensive solution within the Nix ecosystem is called
[Impermanence](https://nixos.wiki/wiki/Impermanence). This sets out the disk
structure, specifically a permanent and a imperanent volume. Then on each boot
the impermanent volume is unmounted, recreated, and then symlinks to the
permanent is added. I do not use this solution since this requires expanding the
basic NixOS installation to also cover disk partitioning, which I find dangerous.

???+ note "Further Readings"
     - Nix Impermanence explained: 
       [NixCon2023 Talk](https://www.youtube.com/watch?v=QtBouFMyrWg)
     - Nix Impermanence documentation: 
       [Github](https://github.com/nix-community/impermanence)
     - NixOS's wiki on Nix Impermanence:
       [Imperance](https://nixos.wiki/wiki/Impermanence)

### Via GNU Stow
A simipler solution, which I currently utilize, is called GNU stow. GNU stow is
called a symlink farm. It simply takes a folder and creates links so the folder
can be at two places at once. In my use case, I use stow to create a copy of my
main file system but within the ~/stow directory.

Running stow . within the stow/ directory
```
stow/
stow/.config/
stow/.config/wezterm
stow/.config/nvim
stow/.config/yazi
stow/.scripts/alarm.sh
```

Would result in the following links
```
.config/             -> stow/.config/
.config/wezterm      -> stow/.config/wezterm
.config/nvim         -> stow/.config/nvim
.config/yazi         -> stow/.config/yazi
.scripts/alarm.sh    -> stow/.scripts/alarm.sh
```

This is also applicable to any kind of folder/file, including media files,
spreadsheet files, non-coding files.
```
stow/Downloads/<Files>
Downloads/<Files>   -> stow/Downloads/<Files>
```

Despite ending in the same locations as the regular system generated files, the
starting stow/ folder will only hold opt-in folders, satisfying spec 2.
To verify the system functions only requires limited manual intervention: delete
every thing and then repopulate with nixos-rebuild and stow.

???+ note "Further Readings"
     - GNU Stow's manual: 
       [GNU Foundation](https://www.gnu.org/software/stow/manual/stow.html)
     - Video alternatives: 
       [Typcraft's Video](https://www.youtube.com/watch?v=NoFiYOqnC4o),
       [Dream of Autonomy's Video](https://www.youtube.com/watch?v=y6XCebnB9gs)


### Via Org-Attach
Another way to mitigate forgetting, is to keep extra context attached to the
files and a way to accomplish this is by keep each file attached to a note,
using an application like
[Org-Attach](https://orgmode.org/manual/Attachments.html). That's to say, stop
using folders to organize files and notes to organize information and instead
combine the two. This way all the information is in one place. This does not
guarentee memory, but it does reduce the chance of forgetting.

This does not require every file to be within Org-Attach, but the benfits scale
with Org's usage, so for my workflow, files in Downloads after a month are either
inserted into Org-Roam else be deleted. The exceptions are files whose path I
need to type out in the terminal often.

???+ note "Further Readings"
     - Chris Maiorana's explanation of Org-Attach: 
     [Part 1](https://www.youtube.com/watch?v=UPUdbLFJmqs),
     [Part 2](https://www.youtube.com/watch?v=MVjuVH-moAc)

## Cache Flushing
For performance optimization, most applications, and especially browsers and
browser-based electron applications, generate cache or temp files that clogs up
disk space, but removing this now becomes trivial. Simply delete everything
except the opt-in files and rebuild. This approaches preserves the power of
reinstall but without all of the hassle of reinstalling.

???+ note "Source + Further Readings Combined"
     - These are just a subset of what I personally used to get to where I am.
     - General overview of Nix and NixOS:
       - https://www.youtube.com/watch?v=CwfKlX3rA6E
     - Setting up the general build system:
       - https://www.youtube.com/watch?v=a67Sv4Mbxmc
     - Understanding Nix's language and terminology:
       - https://www.youtube.com/watch?v=5D3nUU1OVx8
     - The main wiki is incomplete, but it's the best place to start debugging:
       - https://nixos.wiki/wiki/Main_Page
     - 99% of all the options in NixOS, NixPkgs, and Homemanager:
       - https://search.nixos.org/packages
     - There's also flakes to learn about too
     - Nix Impermanence explained: 
       - https://www.youtube.com/watch?v=QtBouFMyrWg
     - Nix Impermanence documentation: 
       - https://github.com/nix-community/impermanence
     - NixOS's wiki on Nix Impermanence:
       - https://nixos.wiki/wiki/Impermanence
     - GNU Stow's manual: 
       - https://www.gnu.org/software/stow/manual/stow.html
     - Video alternatives: 
       - https://www.youtube.com/watch?v=NoFiYOqnC4o
       - https://www.youtube.com/watch?v=y6XCebnB9gs
     - Chris Maiorana's explanation of Org-Attach: 
       - https://www.youtube.com/watch?v=UPUdbLFJmqs
       - https://www.youtube.com/watch?v=MVjuVH-moAc

