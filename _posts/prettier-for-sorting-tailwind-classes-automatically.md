---
title: "Automatically Sorting Tailwind Classes with Prettier"
content_type: "notes"
topic: "tailwind"
category: "workflow"
sub_category: "frontend"
status: "publish"
date: "2024-04-26"
---

# Automatically Sorting Tailwind Classes with Prettier

Tailwind CSS is a paradigm shift in my workflow. But I have to admit,
utility classes can become so unwieldy on certain elements. One way of "taming
the beast" is to use Tailwind's Prettier plugin.

## Installing the Prettier Plugin

Note: install Prettier as a dev dependency.

1. Run in terminal:

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

With the command above, you now have installed Prettier and the Prettier plugin
for Tailwind as a dev dependency.

2. Create and Edit `.prettierrc`

The `.prettierrc` file serves as a configuration for the Prettier plugin.
Create the `.prettierrc` on the root directory of the project:

```bash
touch .prettierrc
```

_Learn more about [Prettier's configuration file](https://prettier.io/docs/en/configuration.html)_

Type the following code onto the `.prettierrc` file:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## Using the Prettier Tailwind plugin

### Checking Files and Directory

```bash
# Checking a file
npx prettier --check path/to/file

# Checking all files in a directory
npx prettier --check path/to/folder

# Checking all files in the directory
npx prettier --check .
```

### Apply Formatting

```bash
# Formatting a file
npx prettier --write path/to/file

# Formatting files a directory
npx prettier --write path/to/folder

# Formatting all files in the directory
npx prettier --write .
```

## Format on Save

If you have Prettier as one of your editor's formatters, this will
conveniently sort your Tailwind classes automatically.

## Learn More

### How Tailwind Sorts the Utility Classes

- [Video From Tailwind Labs](https://www.youtube.com/watch?v=_CntOc4hBcg&t=281s)
