---
title: Contribution Guide
sidebar_label: ✒️ Contribution Guide
sidebar_position: 1
---

# Contribution Guide

AV1 Community Wiki - community maintained wiki for all things encoding.

## Before You Contribute

1. By making a contribution to the AV1 Community Wiki, you are communicating that you have read & agreed to our Terms & Conditions, Privacy Policy, & Code of Conduct.
2. Ensure your understanding of the material you're contributing is sufficient to a point where it is useful to the project. It is perfectly acceptable not to get everything right the first time, but always double check your contributions for factual correctness.

## Connect With Us

If you're interested in communicating with other passionate contributors helping this project, visit [rvlt.gg/emxNXv1x](https://rvlt.gg/emxNXv1x). You'll need a Revolt account to join. Revolt is an open source Discord alternative, which you can read more about on [this page](https://github.com/revoltchat/legal/blob/master/About.md#communication-is-critical).

## Clone & Push Instructions
**Make sure to clone from & edit the** `main` **branch only, and push your final changes to the** `development` **branch according to the instructions below.**

*don't forget to add unimportant files to the .gitignore before making any commits*

1. Clone from the `main` branch to start to make a contribution:
```zsh
% git clone git@github.com:av1-community-contributors/av1-wiki.github.io.git -b main
```

2. Test your changes locally before making a commit:
```zsh
% yarn
% npx docusaurus start
```

3. Push changes to `main` branch:
```zsh
% git add .
% git commit -m "Commit Message"
% git push -u origin main
```

4. Deploy to `deployment` branch to make live on site:
```zsh
% GIT_USER=<username> DEPLOYMENT_BRANCH=deployment yarn deploy
```

*Docusaurus Info*
## Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

See initial instructions at the top.