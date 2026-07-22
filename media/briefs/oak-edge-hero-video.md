# Grok Imagine Task — DA × Oak Hero Loop

You are running inside the reviewed `pipelines/grok-imagine-media.yaml`
Riverboat workflow in the trusted `somarc/da-oak` checkout.

## Hard boundaries

1. Use the only available visual tool, `image_to_video`, if it exists.
2. Use this approved still as frame one and the visual identity anchor:

```text
.da/media-staging/oak-edge-hero-poster.webp
```

3. If `image_to_video` is unavailable, create no substitute and leave the
   validated poster-only path intact.
4. You have no shell, file-writing, web, MCP, Git, DA, or credential tool. The
   reviewed Riverboat collector owns filesystem work.
5. Never print, read, request, or persist credentials.
6. Add no text, logo, UI, people, coins, or new narrative objects.

## Motion brief

Animate one restrained six-second atmospheric shot. The camera makes a barely
perceptible upward-right drift with shallow parallax through the subterranean
oak archive. A single sap-green pulse travels slowly through the mineral root
segments, rises through one growth ring, and reaches a few canopy edge lights.
Paper strata and dust breathe by only a few pixels; the monumental tree and
architecture remain stable.

Preserve the dark left/lower-left typography safe zone. Avoid hard cuts,
flashing, swaying branches, fast particles, aggressive zoom, or busy edge-node
animation. Make the final frame visually compatible with the first so the loop
is unobtrusive. No audio.

## Output contract

- Prefer a 6-second 16:9 MP4 at the source image aspect ratio.
- Leave the raw result in this Grok session's managed `videos/` or `images/`
  directory.
- The reviewed collector will remove audio and attached artwork, normalize to
  H.264/yuv420p only when required, add fast-start metadata, and write:

```text
.da/media-staging/oak-edge-hero-loop.mp4
```

- End after the `image_to_video` result or clearly report poster-only capability.
