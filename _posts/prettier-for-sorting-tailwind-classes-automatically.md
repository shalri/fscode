---
title: "Prettier for Sorting Tailwind Classes Automatically"
content_type: "notes"
topic: "Tailwind"
category: "workflow"
sub_category: "frontend"
date: "2024-04-24"
status: "draft"
---

# Prettier for Sorting Tailwind Classes

TODO: Introduction discuss Prettier and the tendency of Tailwind utility classes
to be disorganized

[prettier-plugin-tailwindcss Github](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

## Installing Prettier

1. Run in terminal

```shell
npm install -D prettier

```

Check if it is installed `devDependencies`.

3. Using Prettier

Command for checking:

```shell
npx prettier --check path/to/file

```

Command for formatting:

```shell
npx prettier --write folder
```

- Yep you can format the all the files in the directory.
- (.) for entire project

4. Format on Save

Editor set up...

5. Installing Prettier for Tailwind

```shell
npm install -D prettier prettier-plugin-tailwindcss

```

6. Create `.prettierrc`

This file allows you to configure Prettier

## How Tailwind Sorts the Utility class

- [Video](https://www.youtube.com/watch?v=_CntOc4hBcg&t=281s)

TODO: Brief explanation and overview

## Formatting an existing project
