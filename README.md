# Nuxt 2 Project

A modern Vue.js application built with Nuxt 2.

## Features

- 🚀 **Fast Development** - Hot module replacement and fast refresh
- 📱 **Universal** - Server-side rendering and static site generation
- 🔧 **Modular** - Extensive module ecosystem
- ⚡ **Performance** - Automatic code splitting and optimization

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Project Structure

```
nuxt2-project/
├── assets/          # Uncompiled assets (SCSS, images, fonts)
├── components/      # Vue.js components
├── layouts/         # Application layouts
├── middleware/      # Custom middleware
├── pages/          # Application views & routes (auto-generated routing)
├── plugins/        # JavaScript plugins to run before instantiating the root Vue.js application
├── static/         # Static files (directly served)
├── store/          # Vuex store files
├── nuxt.config.js  # Nuxt.js configuration file
└── package.json    # Project dependencies and scripts
```

## Pages

- **Home (`/`)** - Welcome page with feature overview
- **About (`/about`)** - Information about the project and Nuxt.js

## Development

This project uses:
- **Nuxt 2.15.8** - The Vue.js framework
- **Vue 2.6.14** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript

## Deployment

For detailed explanation on how things work, check out the [Nuxt.js documentation](https://nuxtjs.org).

## License

MIT
