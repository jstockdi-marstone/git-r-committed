# git 'r committed

## Overview
Git is an enormous part of the development workflow. This project is meant to share best practices and common workflow tips that should assist developers in becoming Git power users.

## Git Resources
- [View the Do's and Don'ts](https://kenzanlabs.github.io/git-r-committed)
- [Git Cheat Sheet (.png)](https://kenzanlabs.github.io/git-r-committed/images/Kenzan_Git_Cheat_Sheet.png) 

## Git Aliases

A Git alias is a pre-configured _shortcut_ for commonly used commands. There are two ways to simplify your Git workflow:

1. [Git Aliases](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases)

    Leverage `git config` to create a custom alias to replace common commands;
1. [Shell Aliases](http://www.tldp.org/LDP/abs/html/aliases.html)

    Allow custom commands to be created for both Git and non-Git commands.

The primary difference between the two are how the alias command is used. Git aliases will still require using the `git` prefix before the alias, whereas, the shell alias can be used exactly as created. Another advantage of a shell alias is the ability to combine multiple commands, including non-Git commands, into a single alias.

For example, you could create a Git alias for `git checkout` to instead be `git co`. In contrast, a shell alias for `git checkout` could be simply `gc`. 

### Popular Git Aliases

Below is a list of common aliases curated from Git power users at Kenzan. In this instance, it can be assumed that Git aliases were created, but a shell alias could be created to accommodate any workflow preference.

|Command|Alias|Description|
|-------|-----|-----------|
|`$ git checkout`|`$ git co`|
|`$ git diff`|`$ git d`|
|`$ git fetch`|`$ git f`|
|`$ git merge --ff-only`|`$ gif ff`|Fast-forward merge only|
|`$ git push -u`|`$ git pu`|
|`$ git status`|`$ git s`|
|`$ git stash --keep-index`|`$ git ski`|Stash modified files except those that have already been staged|
|`$ git rev-list -1 HEAD`|`$ git rl`|Retrieve the commit hash of the last commit|
|`$ git show --stat`|`$ git ss`|Display the stats of the latest commit|

### Popular Shell Aliases

It should be noted that the following commands have been contributed by Kenzan developers as part of their preferred workflow. Each command should be used with care, and modified to match your own workflow.

|Command|Alias|Description|
|-------|-----|-----------|
|`$ git add -A && git commit`|`$ gac`|Add all modified files and stage them. The commit message prompt will also be displayed.|
|`$ git reset --mixed head~1`|`$ gundo`|Undo that last commit and unstage the modified files.|
|$ git branch &#124; grep '^\*' &#124; cut -d' ' -f2 &#124; pbcopy|`$ gcopy`|Copy the current branch name to the clipboard|
|`$ git shortlog -sn`|`$ gcount`|List all commit authors with the number of commits for each|

## Do's and Don't Development

This repo is the home of the [Git Do's and Don'ts created by Kenzan](https://kenzanlabs.github.io/git-r-committed), which is hosted using [GitHub Pages](https://pages.github.com/). The site files are located on the [`gh-pages` branch](https://github.com/kenzanlabs/git-r-committed/tree/gh-pages), along with details on how to contribute.
