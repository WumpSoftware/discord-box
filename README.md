***Update a pinned gist with your discord bot stats!***<br>

# Prep
A) Set up a token over [here](https://github.com/settings/tokens/new) with the **gist** scope<br>
B) Create a new public gist [here](https://gist.github.com)

# Project setup
A) Fork this repo<br>
B) Go to the **actions** tab and click **enable**<br>
C) Go into your forked repo and go into the file: **./github/workflows/schedule.yml**
D) Once in the schedule file, edit the **GIST_ID** section in the **env** section of the file. It should be something like: gist.github.com/[your name here]/this is the id.<br>
E) Go into your forked repo and find the settings tab, then find the secrets tab.<br>
F) Add 2 secrets:
* 1) GH_TOKEN - Your github token you got on step A
* 2) BOT_TOKEN - Your discord bot token

# Congrats, you did it! 🎉🎉

If you ever need help you can make an issue :)