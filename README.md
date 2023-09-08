# Codec Wiki

A community maintained wiki for all things encoding.

## Before You Contribute

1. By making a contribution to the Codec Wiki, you are communicating that you have read & agreed to our Terms & Conditions, Privacy Policy, & Code of Conduct.
2. Ensure your understanding of the material you're contributing is sufficient to a point where it is useful to the project. It is perfectly acceptable not to get everything right the first time, but always double check your contributions for factual correctness.
3. If you would like, connect with us via our Revolt server located at [rvlt.gg/emxNXv1x](https://rvlt.gg/emxNXv1x). You can ask questions & communicate with other contributors here.

## Clone & Push Instructions
**Make sure to clone from & edit the** `main` **branch only, & push your final changes to the** `development` **branch according to the instructions below. Also be sure to use node 18 LTS, as later versions tend to be troublesome.**

*don't forget to add unimportant files to the .gitignore*

1. Clone from the `main` branch to start to make a contribution:
```zsh
% git clone git@github.com:av1-community-contributors/codec-wiki.git -b main
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
