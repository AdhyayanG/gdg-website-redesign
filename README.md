# Web3 Carnival — Website Redesign

A responsive multi-page redesign of the Web3 Carnival event website, built for the
Kalakriti design hackathon (FinTech F1 track). Web3 Carnival is powered by Threeway
Studio. This is a design concept and is not affiliated with or endorsed by the
official event.

Tagline: **Elevate. Empower. Revolutionise.**

## Design system

A "Whimsical SaaS" identity: warm cream background, deepened orange and gold accents,
heavy ink outlines, flat offset shadows, and pill-shaped controls.

- Background `#FDF9E3`, brand orange `#E8542F`, gold `#F5C518`, ink `#1A1A1A`
- Display type: Fredoka One (uppercase, stroked with an offset shadow)
- Body type: Courier Prime (monospace)
- Custom violet text selection, scroll-reveal animations, animated marquee

## Pages

| File | Page |
|------|------|
| `index.html` | Home — hero, stats, tracks, features, key experiences, register |
| `tracks.html` | The 7 conference tracks, expanded |
| `demo-night.html` | Demo Night format, agenda, and who should apply |
| `speakers.html` | Become a Speaker, why speak, and past speakers |
| `awards.html` | Award categories and judging |
| `sponsors.html` | Become a Sponsor, tiers, past sponsors and partners |

Shared styles live in `styles.css`, shared behavior in `script.js`, and all images
in `assets/`.

## Run locally

It is a static site with no build step. Serve the folder with any static server:

```bash
python -m http.server 5757
```

Then open `http://localhost:5757`.

## Deploy (Netlify)

- **Drag and drop:** zip or drag this folder into https://app.netlify.com/drop
- **Git:** push to GitHub, then on Netlify choose *Add new site -> Import from Git*
  and select the repo. No build command is needed; `netlify.toml` sets the publish
  directory to the repository root.

## Image credits

Speaker photographs and sponsor / partner logos in `assets/` are the property of
their respective owners and originate from the official web3carnival.world site.
They are included here only to depict the same event's past speakers and sponsors
within this non-commercial hackathon redesign concept.

## Attribution

Design and build for the Kalakriti hackathon by Adhyayan.
