# Onboarding: question bank and how answers become the config

Ask in three rounds, four questions at most per round. Skip anything you can already answer from their CLAUDE.md, memory or files, and say what you inferred. Recommended option first.

## Round 1. You and why

1. **What's on your plate?** Ask them to name each business, job, side project or area. Each one becomes a lane (max 5). Ask whether personal life (admin, health, family) gets its own lane. Most people want it: it is where the forgotten stuff lives.
2. **What do you want this for?** (multi-select)
   - Stop losing track when I have several Claude chats or projects going at once (recommended)
   - Know the one thing to do next
   - See my progress, and keep myself accountable
   - Show my day on camera or in posts (the Recap gives "say on camera" lines)
3. **How many tasks does a normal day hold?** 3 to 5 / 5 to 10 / 10 or more. Use it to keep day one realistic and to set the kickoff size.

## Round 2. Your stack

1. **Which Claude do you use?** Claude Code / claude.ai / both. Decides where the rules block goes (Step 4).
2. **Calendar?** Google (live meetings on the hosted board) / Outlook or Apple (copied in at kickoff) / none.
3. **Where do your to-dos and notes live right now?** (multi-select) Notion / Obsidian / Apple Notes / Todoist, Trello, Linear, Asana / a TODO file in my projects / paper / my head. Anything named here is a source you read in Step 2 (with permission) and maybe keep in sync.
4. **Where does new work show up?** (multi-select) Email / Slack or Teams / WhatsApp or texts / calls and meetings. Tells you what to check at kickoff if those connectors exist, and what to ask them about if not.

## Round 3. Your rhythm

1. **When does your day start, and which timezone?** Sets `config.timezone` (IANA name, e.g. `Europe/London`) and when to expect the kickoff.
2. **Lanes and colours.** Propose names and a theme per lane from Round 1; let them rename. Themes: `forest` (dark green), `ocean` (dark blue), `plum` (dark purple), `ink` (dark gold), `paper` (cream and red), `sky` (light blue). Put the main business first.
3. **Morning kickoff style.**
   - I dump my list, you sort and order it (recommended to start)
   - You pull from my calendar, notes and yesterday's leftovers, and propose the day
4. **What's the Recap for?** End-of-day review / lines for daily content / both.

## Mapping answers to the config

```json
{
  "title": "<First name>'s Daily Board",
  "timezone": "Europe/London",
  "lanes": [
    { "key": "agency", "label": "Agency", "kicker": "The business", "theme": "forest" },
    { "key": "personal", "label": "Personal", "kicker": "Life admin", "theme": "ink" }
  ],
  "calendar": true,
  "calendarColors": { "7": "agency" },
  "inbox": true
}
```

- `key`: short, lowercase, no spaces. Never change it once tasks use it (rename `label` instead).
- `kicker`: three words max, shown above the lane name.
- `calendarColors`: Google Calendar `colorId` to lane key, only if they colour-code their calendar. Ask which colour means what.
- The last lane is the catch-all: tasks with an unknown lane land there.

## Three typical setups

- **Solo founder with one company:** lanes `company` (forest), `content` (paper), `personal` (ink). Google Calendar live, kickoff = Claude proposes.
- **Freelancer with clients:** one lane per big client (ocean, plum), `admin` (sky), `personal` (ink). Kickoff = they dump.
- **Employee with a side project:** `job` (ocean), `side project` (forest), `personal` (ink). Recap for content if they post their progress.
