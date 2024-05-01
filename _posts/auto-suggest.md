---
title: "Installing ZSH atuo-suggestion and auto-completion"
content_type: "notes"
topic: "Terminal"
category: "Workflow"
sub_category: "Teminal"
status: "draft"
date: "2024-05-01"
---

# Installing ZSH atuo-suggestion and auto-completion

Enabling auto-suggestions and auto-completion in Zsh can enhance your command-line experience. To achieve this, you can use the Oh My Zsh framework, a popular community-driven collection of plugins and themes for Zsh. Here are the steps to set up auto-suggestions and auto-completion:

1. **Install Oh My Zsh:**

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

or

```bash
sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

2. **Install the Zsh-aktosuggestions plugin:**

Zsh-autosuggestions is a plugin that provides intelligent command-line suggestions as you type.

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

3. **Enable the Zsh-autosuggestions plugin:**

Edit your Zsh configuration file, typically located at `~/.zshrc`, and add or update the plugins section:

```bash
plugins=(zsh-autosuggestions)
```

4. **Source your updated Zsh configuration:**

Run the following command to apply the changes:

```bash
source ~/.zshrc
```

5. **Install the Zsh-autocomplete plugin (Optional):**

Zsh-autocomplete provides additional auto-completion features.

```bash
git clone https://github.com/marlonrichert/zsh-autocomplete $ZSH_CUSTOM/plugins/zsh-autocomplete
```

6. **Enable the Zsh-autocomplete plugin:**

Edit your Zsh configuration file again and update the plugins section:

```bash
plugins=(zsh-autosuggestions zsh-autocomplete)
```

7. **Source your updated Zsh configuration:**

```bash
source ~/.zshrc
```

8. **Configuration (Optional):**

You can customize the behavior of Zsh-autosuggestions and Zsh-autocomplete by referring to their respective documentation:

- Zsh-autosuggestions: https://github.com/zsh-users/zsh-autosuggestions
- Zsh-autocomplete: https://github.com/marlonrichert/zsh-autocomplete

9. **Restart your Zsh session or open a new terminal window for the changes to take effect.**

Now, you should have auto-suggestions and auto-completion features enabled in your Zsh shell. As you type commands, you'll see suggestions based on your command history, and auto-completion should provide options as you press the Tab key.

## TODO

Try out the settings and find out if this has any incompatibility issue with history-search plugin
[autocomplete settings](https://github.com/marlonrichert/zsh-autocomplete#configuration)

Also these are the settings for auto-suggest:
[autosuggest settings](https://github.com/zsh-users/zsh-autosuggestions)
