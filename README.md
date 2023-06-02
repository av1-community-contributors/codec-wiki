# AV1 Community Wiki

A community maintained wiki for all things encoding.

## Clone & Push Instructions
**Make sure to clone from & edit the** `main` **branch only, and push your final changes to the** `development` **branch according to the instructions below.**

1. Clone from the `main` branch to start to make a contribution:
```
$ git clone https://github.com/av1-community-contributors/av1-wiki.github.io -b main
```
2. Test your changes locally before making a commit:
```
$ npx docusaurus start
```
3. Push changes to `main` branch:
```
$ git add .
$ git commit -m "Commit Message"
$ git push -u origin main
```

4. Deploy to `deployment` branch to make live on site:
```
$ GIT_USER=<username> DEPLOYMENT_BRANCH=deployment yarn deploy
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
