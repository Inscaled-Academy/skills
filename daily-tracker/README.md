# Daily Tracker

A daily board that Claude runs for you. One lane per business or area of your life, an "Up next" card, a progress bar and a Recap of everything you got done. Every morning Claude sets up the day with you, and while you work it marks what it's on and ticks things off by itself when they're finished, from whichever chat did the work. No more losing track with six sessions open.

The first time you run it, Claude interviews you (what you do, what you want it for, your calendar and tools), reads the notes and to-do lists you already have if you say yes, builds your board in your own lanes and colours, and saves the daily rules so every chat keeps it up to date.

## Install

**Claude Code (recommended)**

```bash
git clone https://github.com/Inscaled-Academy/skills.git
cp -r skills/daily-tracker ~/.claude/skills/
```

On Windows (PowerShell): `Copy-Item -Recurse skills\daily-tracker $HOME\.claude\skills\`

**claude.ai**

Download [`daily-tracker.zip`](../dist/daily-tracker.zip), then in claude.ai go to Settings, Capabilities, Skills, and upload it.

## Run it

Say: **"Set up my daily tracker."** It takes about 10 minutes. After that, start each day with **"kickoff"**.

## Where the board lives

- **Hosted (best):** if your Claude can publish artifacts with a database, your board is a private link that works on your phone (add it to your home screen) and you can tick things by hand too.
- **Local:** otherwise it's a `board.html` page in `~/daily-board/` that Claude keeps updated on your computer.

Your data stays in your own artifact or folder. Nothing is sent to me.

## What's inside

```
SKILL.md                    the setup and the daily routine
references/onboarding.md    the questions Claude asks you, and how answers become your board
references/data-model.md    how the board stores days and tasks
references/rules-block.md   the rules Claude saves so every chat uses the board
assets/board.html           the board itself (driven by your config, no editing needed)
assets/data.example.js      example data for the local version
```
