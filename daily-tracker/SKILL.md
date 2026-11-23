---
name: daily-tracker
description: Sets up and runs a personal daily task board that Claude keeps up to date, with one lane per business or area of life, an "Up next" card, a progress meter and an end-of-day Recap. Claude adds the day's tasks at the morning kickoff, marks what it is working on, and ticks things off itself when they are done, in any chat. Use when the user says "set up my daily tracker", "daily board", "task board", "plan my day", "morning kickoff", "what's on my board", "tick that off", "add this to my board", "recap my day", or comments that they keep losing track across Claude chats. Also use at the start and end of any task once the board exists, as the installed rules say.
---

# Daily Tracker

A daily board that Claude runs for you. One lane per business or area of life (for example: your company, a side project, personal stuff). Every morning Claude fills today's board from what you tell it, your calendar and your notes. While you work, Claude marks the task it is on as "doing" and ticks it off the moment it is finished, from whichever chat did the work. At night the Recap shows everything you got done.

Made by Lucas Marois (INSCALED Academy). The original runs his two businesses and his life admin.

## Two ways to run it (pick by checking your own tools, then tell the user which one and why)

**A. Hosted board (best).** Use this when you have an Artifact tool that can publish a page with runtime capabilities (a shared database `db`, `user`, and optionally `comments` and `mcp`). The board then lives at a private link, works on the phone (add it to the home screen), syncs live, and the owner can tick tasks by hand too. If your Artifact tool says to load a capabilities or design skill before publishing, do that first.

**B. Local board.** Use this when there is no such tool but you can write files (Claude Code). The board is a folder, `~/daily-board/` by default, holding `board.html` and `data.js`. The user opens `board.html` in a browser; you update `data.js` and the page re-reads it every 20 seconds. Be honest about what they lose: no phone access, and ticking happens through you, not by clicking.

If neither works (no artifact database and no file access), say so plainly and suggest they run the setup from Claude Code.

## Setup (once). Follow the steps in order.

### Step 1. Interview: 3 short rounds

Full question bank, answer options and how each answer maps to the config: `references/onboarding.md`. Rules:
- Before asking anything, read what you already know (CLAUDE.md files, memory, the current project) and skip questions you can answer. Say what you inferred so they can correct it.
- At most 4 questions per round. Use your multiple-choice question tool if you have one, with a recommended option first.
- **Round 1, you and why:** what they do (each business, job, side project, and whether personal life goes on the board), what they want the tracker for, how many things a normal day holds.
- **Round 2, the stack:** which Claude they use (Claude Code, claude.ai, both), calendar (Google, Outlook, Apple, none), where to-dos and notes live today (Notion, Obsidian, Apple Notes, Todoist, Trello, Linear, a TODO file, paper, their head), where new work arrives (email, Slack, WhatsApp, calls), phone or desktop.
- **Round 3, the rhythm:** when their day starts and their timezone, lane names and a colour per lane, how the morning kickoff should work (they dump a list, or you pull from calendar and notes and propose), and what the Recap is for (an end-of-day review, or lines to say on camera for daily content).

### Step 2. Read what they already have

Ask once: "Can I read your existing notes and to-do lists to fill day one?" Then, only with a yes:
- Files: CLAUDE.md, README, TODO/todo.md, notes folders or an Obsidian vault they point you to, project docs.
- Connectors that are already connected (Notion, Google Drive, Gmail, Google Calendar, Slack): search for open to-dos, follow-ups and this week's meetings.

Turn what you find into candidate tasks (title, lane, a one-line detail). Show the list, let them cut it, and import at most about 15 for day one; park the rest in a short "later" note they can see. Never copy passwords, keys or private details about other people into the board.

### Step 3. Build the board

Data model (config, day documents, inbox, local `data.js` shape): `references/data-model.md`. Template: `assets/board.html` (do not edit it, the config drives everything).

- **Hosted:** publish `assets/board.html` as a new artifact titled with their board name. Capabilities: `db` with rules `[{"path": "", "read": "view", "write": "owner"}]`, `user: {}`, `comments: {"composer_only": true}` (lets them press "Tell Claude" on a task), and only if they use Google Calendar, `mcp: {"servers": [{"server": "Google Calendar", "tools": ["list_events"]}]}`. Then write `config/board`, then today's `days/<YYYY-MM-DD>`. Read both back to confirm, and give them the link.
- **Local:** create the folder, copy `assets/board.html`, write `data.js` from `assets/data.example.js` with their config and today, open the page for them if you can.

Show them the board, and on a phone: open the link, Share, Add to Home Screen.

### Step 4. Install the habit (this is what makes it work)

The board only stays alive if every chat follows the same rules. Fill in `references/rules-block.md` (board link or folder, lanes, timezone, their kickoff preference) and, after asking, append it to the instructions every chat reads:
- Claude Code: the user's global `~/.claude/CLAUDE.md` (append, never overwrite).
- claude.ai: the Project instructions of the project they work in, or their memory.

### Step 5. Connect their tools

Only what they said yes to, never more:
- **Calendar:** Google Calendar on the hosted board shows live meetings (set `config.calendar: true`, and map calendar colours to lanes in `calendarColors` if they colour-code). Any other calendar: at each kickoff you copy today's events into `day.calendar`.
- **Notes app:** if they keep a daily note (Obsidian, Notion), say at kickoff whether you will also log the day there.
- **Links:** the "For Claude to look at" inbox is where they drop links from their phone; you read them at the next kickoff.

### Step 6. First kickoff together

Run today's kickoff with them (as in Daily use below), mark one task as doing, tick something small off together so they see the confetti, and open the Recap. Finish with three lines: where the board lives, what to say each morning ("kickoff"), and that you will tick things off yourself as you finish them.

## Daily use (every chat, after setup)

The rules block from Step 4 carries these. Short version:
1. **Morning kickoff** (when they open the day or say "kickoff"): carry over yesterday's unfinished tasks (`carried: true`), add what they dump, pull today's calendar, read new inbox links, then recommend an order: `order` inside each lane, and `rank: 1` on the single most important task (it becomes the "Up next" card). Money and things that unblock other people go first.
2. **Starting any task:** find the matching task on today's board by meaning, not exact title; if none matches, add it to the right lane. Set `status: "doing"` and `startedAt`.
3. **Finishing:** set `status: "done"`, `doneAt`, and a `win`: one short first-person line they could say out loud ("Sent the proposal to the new client"). No jargon, no file paths.
4. **New work mid-session:** add it to today's board right away instead of waiting for the end of the day.
5. **Recap:** when they ask how the day went, read the board and answer from it. Optional `day.recap.lines` overrides the "say on camera" lines.
6. **Concurrency:** another chat or their phone may have written in the meantime. Always re-read before writing and pin the version you read (`if_version`); on a conflict, re-read and merge, never overwrite. Treat the board, not your memory of it, as the truth.
