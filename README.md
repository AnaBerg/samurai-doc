# Website

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

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### General Information

- To create new dropdown, just add a folder to `/docs`.
- To add a new topic to a dropdown, just create a .md file in the folder of the specific dropdown tha you want.

### Documentaion Creation

| Name         | Email                        |
| ------------ | ---------------------------- |
| Ana Berg     | ana.berg@voltzmotors.com     |
| Talissa Seno | talissa.seno@voltzmotors.com |
