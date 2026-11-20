# Someone is STANDING on a plane over Vice City beach in GTA 6

[![make.fun bounty](https://img.shields.io/badge/make.fun-%24500_bounty-ff5ca8)](https://make.fun/bounty/gta6-clipper-01)

Entry for the **gta6-clipper-01** bounty on [make.fun](https://make.fun/bounty/gta6-clipper-01)
($500, top 20 clips by YouTube views).

## The clip

An 18-second vertical Short (1080x1920) cut from Rockstar's official GTA 6
trailer 2 (https://www.youtube.com/watch?v=rz1B4B2yBZY):

- **0:00–0:03** — the hook: a wing-walker standing on a pink biplane trailing
  pink smoke over a packed Vice City beach, slowed down so the stunt lands.
  On-screen: "THIS IS GTA 6".
- **0:03–0:18** — the make.fun pitch, on screen over the frozen beach frame:
  "Make clips like this with AI" → "and earn money on make.fun" →
  "make.fun/bounty/gta6-clipper-01".

Cut and rendered with ffmpeg in the build session; no finished clip was
downloaded from anywhere.

## YouTube title

```
Someone is STANDING on a plane over Vice City beach in GTA 6
```

## YouTube description (exact)

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
makefun-rattan-gallery-riddle

Someone is standing on a plane wing over Vice City beach — straight from the GTA 6 trailer. Only in Leonida.

#GTA6 #GTA6Trailer #ViceCity #Shorts
```

## Status

- Clip rendered: `gta6-clipper-final.mp4` (18.0 s, 1080x1920, H.264).
- **Video not uploaded yet** — `VIDEO.json` still holds the placeholder.
  Once the video is public on YouTube, `VIDEO.json` gets its real URL and this
  entry is submitted.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `$MAKEFUN_OUTPUT_DIR/VIDEO.json`. That is all it does —
the house reads the video's views itself.

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
