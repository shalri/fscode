---
title: "Github Pages with Tailwind and Vite"
content_type: "notes"
topic: "Github Pages"
category: "Deployment"
sub_category: "Tailwind"
status: "publish"
date: "2024-05-02"
---

# Github Pages with Tailwind and Vite

<!--toc:start-->

- [Introduction](#introduction)
- [Tailwind and Vite](#tailwind-and-vite)
- [Starting the Challenge](#starting-the-challenge)
- [Setup Local Repo](#setup-local-repo)
  1. [Create directory and go into the directory](#1-create-directory-and-go-into-the-directory)
  2. [When you are inside the `blog-review-card` directory run this command:](#2-when-you-are-inside-the-blog-review-card-directory-run-this-command)
  3. [Installing Vite Dependencies](#3-installing-vite-dependencies)
  4. [Installing Tailwind](#4-installing-tailwind)
  5. [Configuring Tailwind](#5-configuring-tailwind)
  6. [Testing Browser Reload and Setup](#6-testing-browser-reload-and-setup)
- [Getting Ready for Github Pages Deployment](#getting-ready-for-github-pages-deployment)
  1.  [`git init` and First Commit](#1-git-init-and-first-commit)
  2.  [Create New Github Repository](#2-create-new-github-repository)
  3.  [Pushing Your First Commit](#3-pushing-your-first-commit)
- [Setting Up Your GitHub Pages](#setting-up-your-github-pages)
  1.  [On your newly created repository's page. Click on the settings tab.](#1-on-your-newly-created-repositorys-page-click-on-the-settings-tab)
  2.  [Click on Pages](#2-click-on-pages)
  3.  [Edit `static.yml` File](#3-edit-staticyml-file)
  4.  [Click on Actions Tab](#4-click-on-actions-tab)
  5.  [`git pull`](#5-git-pull)
- [Almost There](#almost-there)
- [Integrating Frontend Mentor Challenge assets](#integrating-frontend-mentor-challenge-assets)
<!--toc:end-->

## Introduction

I recently decided to do
[FrontendMentor.io](https://www.frontendmentor.io/)'s challenges. Part of
the requirement for submitting your solution is to have a Github repo for
your code and host your project using GitHub, Vercel, or any hosting
service.

I chose to host my initial project with GitHub Pages since I plan to do
more challenges. Having my repo and using GitHub Pages to host it keeps my
workflow tight. Plus it is free!

## Tailwind and Vite

I love Tailwind. Since I started using it has been part of my workflow.
Vite also helps by streamlining the build process. I created a base template
using this killer combo, you can check out the [soko repo](https://github.com/shalri/soko).

## Starting the Challenge

I will be using the [Blog Review Card](https://www.frontendmentor.io/learning-paths/getting-started-on-frontend-mentor-XJhRWRREZd/steps/663243dd20fb35b1b65f8a05/challenge/starturl) challenge as an example.
The nice thing about [FrontendMentor.io](https://www.frontendmentor.io/) is they give you a style
guide and the assets you need to complete the challenge. With the assets
on hand, I started the project by deploying my initial setup. This
helps me prevent some headaches like broken source links and the build
just failing. Nothing is more irritating than when you discover some
unexpected bugs on your deployed project that didn't exist in your local
environment. I find it much better to find these quirks from the start.

You can follow along with me and set up the GitHub Pages from scratch.

## Setup Local Repo

Here are the steps to set set up your local repo:

### 1. Create a directory and go into the directory

```bash
mkdir blog-review-card && cd blog-review-card
```

### 2. When you are inside the `blog-review-card` directory run this command:

```bash
npm create vite@latest .
```

You will be prompted by ViteJS for some options regarding the setup of your
project. Just select `Vanilla` and `JavaScript` since this is just a simple project.

After providing your options on the prompts, you will see something like
this:

```bash
✔  Select a framework: Vanilla
✔  Select a variant: JavaScript

Scaffolding project in /home/user/path/to/blog-review-card...

Done. Now run:

  npm install
  npm run dev
```

The scaffolding will look like this:

```bash
 counter.js
 index.html
 javascript.svg
 main.js
 node_modules/
 package-lock.json
 package.json
 postcss.config.js
 public/
 style.css
 .gitignore

2 directories, 10 files
```

### 3. Installing Vite Dependencies

```bash
npm install
npm run dev
```

Now that your project scaffolding is created and you have the dev server up
and running it's time to install Tailwind.

### 4. Installing Tailwind

Now after the project scaffolding has been conveniently created by Vite. It's
time to install Tailwind.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 5. Configuring Tailwind

The rest of the steps are from the [Tailwind docs]:

**_tailwind.config.js_** - add paths to all your template files.

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

**_styles.css_** - add the Tailwind directives to your CSS.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

You can delete all the contents of `styles.css` and just add the Tailwind
directives above.

**Optional** but highly recommended when playing around with Tailwind--[Sorting Classes with Prettier](https://shalri.github.io/fscode/post/prettier-for-sorting-tailwind-classes-automatically)

### 6. Testing Browser Reload and Setup

You have everything in place. Let's check if everything works as expected.

**_index.html_**

```html
<!doctype html>
<html lang="en" class="bg-yellow-300">
  <head>
    ....
  </head>
  <body>
    ....
  </body>
</html>
```

Just add any Tailwind utility class to the `<html>` tag, I usually use
`bg-yellow-300` for good luck.

## Getting Ready for Github Pages Deployment

Before you can deploy the project to Github Pages for free, you need the project
to have its own public Github repo. Let's get to it!

### 1. `git init` and First Commit

On the root of your project directory just run the command to initialize `git`

```bash
git init
```

Note: Vite has already created a `.gitignore` file. Nice.

```bash
git add -A
git commit -m 'First commit'
```

With these commands, you just staged (`git add -A`) and committed (`git commit -m`)
your initial setup.

Now that your **local** repo is ready, you can set the GitHub **remote**
repo.

### 2. Create a New Github Repository

Log in to your GitHub account and create a public [new repo](https://github.com/new).

Just follow the instructions on GitHub's Create a new repository page and you're golden.

Note: just copy and paste the section from `git remote add origin` to `git push`

### 3. Pushing Your First Commit

On your command line just paste the command you copied from the step above.

```bash
git remote add origin git@github.com:<yourAccount>/fm-blog-review-card.git
git push -u origin main
```

## Setting Up Your GitHub Pages

### 1. On your newly created repository's page. Click on the settings tab.

The **Settings** tab is on the right of the tab heading.
![settings tab](/fscode/github-pages-clicked.png)

### 2. Click on Pages

The **Pages** setting is on the left sidebar, right under the
_Code and Automation_ section.

Click on the Static HTML configure button.

![settings tab](/fscode/github-pages-static-yaml.png)

### 3. Edit `static.yml` File

**Important**: Make sure to provide the correct Node.js version that you are
using. You can check by running this command:

```bash
node --version
```

Copy and paste the code below (edit your node version):

```yaml
name: Deploy static content to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: your-node-version # Specify the Node.js version you are using

      - name: Install dependencies
        run: npm ci

      - name: Build static content
        run: npm run build # This command should generate the 'dist' folder

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./dist" # Upload the 'dist' folder

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Click on the commit changes button. It should be on the top right (colored green).

### 4. Click on the Actions Tab

![actions tab](/fscode/github-page-action-clicked.png)

It should be building and deploying your repo to GitHub Pages. After the deployment,
you will be dismayed when you visit the URL. You will probably see a blank screen
this is because we have not configured our base path yet.

### 5. `git pull`

You've made changes in the remote repo. You should pull the changes onto your
local repo to keep them in sync.

```bash
git pull
```

## Almost There

To fix the `404` errors just create a config file for Vite and name it `vite.config.js`.
In your `vite.config.js` copy and paste the following code:

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  base: "/name-of-your-repo/",
});
```

To be clear your GitHub Pages URL will look like
`https://<user>.github.io/<name-of-your-repo>`.

Now you're all set. Everything will be automated. Every time you push a commit
from your local repo, Github will automatically update your page.

## Integrating Frontend Mentor Challenge assets

Integrating the assets and template files from Frontend Mentor is all you
have to do to start coding.

That's it. Your automated workflow is done.
