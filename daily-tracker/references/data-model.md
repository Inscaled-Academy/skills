# Data model

Same shapes in both modes. Hosted: documents in the artifact's database. Local: one `data.js` file.

## `config/board` (one document)

See `onboarding.md` for every field. The page re-styles itself as soon as this changes.

## `days/<YYYY-MM-DD>` (one document per day, date in the user's timezone)

```json
{
  "date": "2026-01-15",
  "headline": "Big focus: ship the client proposal.",
  "calendar": [{ "t": "10:00", "end": "10:30", "title": "Client call", "area": "agency" }],
  "recap": { "lines": ["Optional. Overrides the auto 'say on camera' lines."] },
  "tasks": [
    {
      "id": "a1",               // unique within the day, short
      "area": "agency",         // a lane key
      "order": 1,               // position inside the lane, 1 = top
      "rank": 1,                // optional, across lanes: 1 = the "Up next" card
      "status": "todo",         // todo | doing | done
      "title": "Finish the proposal for the new client",
      "detail": "Pricing page + timeline. Send before 5pm.",
      "tag": "Big focus",       // optional short pill
      "carried": true,          // optional, came over from yesterday
      "from": "phone",          // optional, added by the user on the board
      "startedAt": "2026-01-15T09:10:00Z",
      "doneAt": "2026-01-15T11:40:00Z",
      "win": "Sent the proposal to the new client"   // set when done: short, first person, sayable
    }
  ]
}
```

Rules:
- Write the whole `tasks` array back (update the `tasks` field), never a partial array.
- Pin every write to the version you just read. On a conflict, re-read and merge your change onto the new version.
- Never delete a task the user added (`from: "phone"`) unless they ask.
- Times are ISO in UTC; the page shows them in `config.timezone`.

## `inbox/<id>` (links the user drops from their phone)

```json
{ "url": "https://...", "note": "What should Claude look at?", "status": "new", "createdAt": "...", "reply": "Your note after looking" }
```
At kickoff: look at each `new` link, write `reply` (what is useful in it for them) and set `status: "seen"`.

## Local mode: `data.js`

```js
window.BOARD_DATA = { config: { ... }, days: { "2026-01-15": { ... } }, inbox: [ { id: "l1", url: "...", status: "new" } ] };
```
Rewrite the whole file each time (read it, change it, write it back). Keep the 30 most recent days; older days can be moved to `archive/YYYY-MM.json` if the file grows.
