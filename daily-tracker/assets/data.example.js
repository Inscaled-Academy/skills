// Local mode data file. Claude rewrites this file; board.html (in the same folder) re-reads it every 20 seconds.
// Same shapes as the artifact database: config = config/board, days = the "days" collection, inbox = the "inbox" collection.
window.BOARD_DATA = {
  config: {
    title: "Sam's Daily Board",
    timezone: "Europe/London",
    lanes: [
      { key: "agency", label: "Agency", kicker: "The business", theme: "forest" },
      { key: "side", label: "Side project", kicker: "Building in public", theme: "paper" },
      { key: "personal", label: "Personal", kicker: "Life admin", theme: "ink" }
    ],
    calendar: false,
    calendarColors: {},
    inbox: true
  },
  days: {
    "2026-01-15": {
      date: "2026-01-15",
      headline: "Big focus: ship the client proposal.",
      calendar: [{ t: "10:00", end: "10:30", title: "Client call", area: "agency" }],
      tasks: [
        { id: "a1", area: "agency", order: 1, rank: 1, status: "doing", tag: "Big focus", title: "Finish the proposal for the new client", detail: "Pricing page + timeline. Send before 5pm." },
        { id: "a2", area: "agency", order: 2, status: "done", doneAt: "2026-01-15T09:40:00Z", title: "Reply to the three leads from yesterday", win: "Replied to three new leads" },
        { id: "s1", area: "side", order: 1, status: "todo", title: "Film today's update video" },
        { id: "p1", area: "personal", order: 1, status: "todo", title: "Book the dentist" }
      ]
    }
  },
  inbox: []
};
