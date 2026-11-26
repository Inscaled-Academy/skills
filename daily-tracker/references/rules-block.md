# Rules block to install (Step 4)

Fill in the placeholders, show it to the user, and after their OK append it to the instructions every chat reads (Claude Code: `~/.claude/CLAUDE.md`; claude.ai: the Project instructions or memory). Keep it short: long rules get skipped.

```markdown
## Daily board (STANDING RULE, every chat)

My daily board: <BOARD LINK, or the folder ~/daily-board/ (data.js)>. Lanes: <lane keys and labels>. Timezone: <IANA zone>.
Use the daily-tracker skill for the details.

- **Starting any task:** read today's board (`days/<YYYY-MM-DD>`), find the matching task by meaning or add it to the right lane, set it to `doing`. Even if I never mention the board.
- **Finishing:** tick it `done` straight away with a short first-person `win` line I could say out loud.
- **New work that comes up:** add it to today's board in the moment.
- **Morning kickoff** (when I say "kickoff" or start the day): make sure every unfinished task from earlier days is on today's board (carried: true; the hosted page does this itself when I open it, check anyway), add my list, <pull today's calendar / my notes>, read new inbox links, recommend the order (most important = rank 1).
- **Always re-read before writing** and pin the version: another chat or my phone may have changed it. The board is the truth.
```
