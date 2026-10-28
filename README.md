# Rebecca Ansell — personal website

A board-game themed academic site. Plain HTML/CSS/JS with no build step.

| File | What it is |
| --- | --- |
| `data.js` | **All the content.** Edit this to update bio, links, career board, papers, talks. |
| `index.html` | Page structure |
| `styles.css` | Look and feel |
| `app.js` | Guess Who game, career board, paper deck, score pad |
| `images/headshot.jpg` | Photo revealed in Guess Who |

## Preview
Double-click `index.html`, or run `python3 -m http.server` in this folder and open http://localhost:8000.

## Common edits (all in `data.js`)
- **Add a paper:** copy an entry in `PUBLICATIONS`; add links like `links: { pdf: "https://…", arxiv: "https://…" }`.
- **Add a talk:** copy an entry in `TALKS`. Set `upcoming: true` to highlight it.
- **Career board:** `BOARD` has exactly 24 spaces (indexes 0, 6, 12, 18 are the corners). Swap entries rather than adding.
- **Links:** fill in `linkedin`, `scholar`, `cv` in `SITE.links`; empty ones are hidden.

## Publish on GitHub Pages
The repo `rebeccaansell/rebeccaansell.github.io` already exists. Replace its contents with these files, commit, and push; the site goes live at https://rebeccaansell.github.io. Add an empty `.nojekyll` file so GitHub serves the files as-is.
