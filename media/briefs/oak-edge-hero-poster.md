# Grok Imagine Task — DA × Oak Hero Poster

You are running inside the reviewed `pipelines/grok-imagine-media.yaml`
Riverboat workflow in the trusted `somarc/da-oak` checkout.

## Hard boundaries

1. Use the only available visual tool, `image_gen`. Do not draw a substitute
   with HTML, SVG, Canvas, or a local diffusion package.
2. You have no shell, file-writing, web, MCP, Git, DA, or credential tool. Do
   not request one. The reviewed Riverboat collector owns filesystem work.
3. Do not edit repository files, call DA, upload, preview, or publish.
4. Use the existing authenticated Grok session. Never print, read, request, or
   persist credentials.
5. Generate no headline, logo, readable interface, diagram labels, coin,
   watermark, or baked-in typography.

## Visual brief

Create a cinematic 16:9 editorial technology film still for a full-bleed
website hero about **durable content becoming a global edge experience**.

Show a monumental ancient oak in a vast subterranean archive cutaway. Its roots
are formed from dark mineral segments, growth rings, warm paper strata, and
precise ledger-like joints. One controlled sap-green signal enters the root
system, remains continuous through the segment layers, and rises into a canopy
whose distant leaves resolve into hundreds of restrained edge lights. The tree
must feel physical and stewarded—not mystical fantasy and not an artificial
brain. Suggest immutable history below and effortless distribution above.

Material language: blackened oak, basalt, smoked glass, limestone paper,
oxidized metal, faint atmospheric dust, tactile high-end CGI, subtle film grain,
restrained volumetric light. Palette: near-black forest green, mineral gray,
warm stone, one sap-green continuity signal, a very small amber settlement glint.

Compose the oak and the strongest light toward the upper-right. Reserve a broad
dark, low-detail safe zone across the left and lower-left for large white
editorial typography. Keep the horizon calm and make the image survive an
`object-fit: cover` crop on desktop and mobile.

Avoid purple cyberpunk glow, binary rain, blockchain coins, humanoid robots,
stock faces, floating dashboards, generic cloud icons, readable code, neural
network imagery, fantasy elves, or a bright daytime forest.

## Output contract

- Request `aspect_ratio: 16:9` from `image_gen`.
- Produce exactly one successful image.
- Leave the result in this Grok session's managed `images/` folder.
- The reviewed collector will auto-orient, center-crop, resize, and encode the
  result to exactly 2400×1350 WebP at:

```text
.da/media-staging/oak-edge-hero-poster.webp
```

- Do not create the video in this step.
- End immediately after the single successful `image_gen` call.
